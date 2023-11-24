import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:vms/blocs/cancel_route/cancel_route_bloc.dart';
import 'package:vms/blocs/finish_route/finish_route_bloc.dart';
import 'package:vms/blocs/get_routes/get_routes_bloc.dart';
import 'package:vms/blocs/profile/profile_bloc.dart';
import 'package:vms/blocs/start_route/start_route_bloc.dart';
import 'package:vms/blocs/vehicle/vehicle_bloc.dart';
import 'package:vms/constants/color_constants.dart';
import 'package:vms/constants/enums.dart';
import 'package:vms/pages/home/home_screen.dart';
import 'package:vms/pages/profile/profile_screen.dart';
import 'package:vms/pages/services/services_screen.dart';
import 'package:vms/pages/vehicle_info/vehicle_info_screen.dart';
import 'package:vms/providers/bottom_provider/bottom_provider.dart';
import 'package:vms/repositories/profile/profile_repo.dart';
import 'package:vms/repositories/routes/routes_repo.dart';
import 'package:vms/repositories/vehicle/vehicle_repo.dart';
import 'package:vms/widgets/bottom_nav_bar/bottom_nav_bar.dart';

class BaseScreen extends StatefulWidget {
  const BaseScreen({super.key});

  @override
  State<BaseScreen> createState() => _BaseScreenState();
}

class _BaseScreenState extends State<BaseScreen> {
  @override
  Widget build(BuildContext context) {
    final bottomProviderWatch = context.watch<BottomProvider>();

    RoutesRepo routesRepo = RoutesRepo();
    VehicleRepo vehicleRepo = VehicleRepo();
    ProfileRepo profileRepo = ProfileRepo();

    return FutureBuilder(
      future: SharedPreferences.getInstance()
          .then((prefs) => prefs.getInt('user_id')),
      builder: (context, snapshot) {
        final int? userId = snapshot.data;
        if (snapshot.connectionState == ConnectionState.done) {
          return MultiBlocProvider(
            providers: [
              BlocProvider(
                create: (context) => GetRoutesBloc(routesRepo: routesRepo),
              ),
              BlocProvider(
                create: (context) => VehicleBloc(vehicleRepo: vehicleRepo),
              ),
            ],
            child: Scaffold(
              backgroundColor: ColorConstants.bg,
              body: Stack(
                children: [
                  bottomProviderWatch.currentPage == Pages.home
                      ? HomeScreen(userId: userId!)
                      : bottomProviderWatch.currentPage == Pages.info
                          ? VehicleInfoScreen(userId: userId!)
                          : BlocProvider(
                              create: (context) =>
                                  ProfileBloc(profileRepo: profileRepo),
                              child: ProfileScreen(userId: userId!),
                            ),
                  const Align(
                    alignment: Alignment.bottomCenter,
                    child: BottomNavBar(),
                  ),
                ],
              ),
            ),
          );
        } else {
          return const SizedBox();
        }
      },
    );
  }
}
