import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:vms/blocs/cancel_route/cancel_route_bloc.dart';
import 'package:vms/blocs/finish_route/finish_route_bloc.dart';
import 'package:vms/blocs/start_route/start_route_bloc.dart';
import 'package:vms/pages/base/base_screen.dart';
import 'package:vms/pages/login/login_screen.dart';
import 'package:vms/pages/preloader/preloader_screen.dart';
import 'package:vms/pages/route/route_screen.dart';
import 'package:vms/repositories/routes/routes_repo.dart';
import 'package:vms/routes/router_constants.dart';

class AppRouter {
  static Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case RouterName.preloaderRoute:
        return MaterialPageRoute(
          builder: (_) => const PreloaderScreen(),
        );
      case RouterName.baseRoute:
        return MaterialPageRoute(
          builder: (_) => const BaseScreen(),
        );
      case RouterName.loginRoute:
        return MaterialPageRoute(
          builder: (_) => const LoginScreen(),
        );
      case RouterName.dorogaRoute:
        final args = settings.arguments as DorogaArguments;
        RoutesRepo routesRepo = RoutesRepo();

        return MaterialPageRoute(
          builder: (_) => MultiBlocProvider(
            providers: [
              BlocProvider(
                create: (context) => StartRouteBloc(routesRepo: routesRepo),
              ),
              BlocProvider(
                create: (context) => CancelRouteBloc(routesRepo: routesRepo),
              ),
              BlocProvider(
                create: (context) => FinishRouteBloc(routesRepo: routesRepo),
              ),
            ],
            child: RouteScreen(arguments: args),
          ),
        );
      default:
        return MaterialPageRoute(
          builder: (_) => const LoginScreen(),
        );
    }
  }
}
