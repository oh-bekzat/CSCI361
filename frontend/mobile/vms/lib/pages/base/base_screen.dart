import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:vms/constants/enums.dart';
import 'package:vms/pages/home/home_screen.dart';
import 'package:vms/pages/profile/profile_screen.dart';
import 'package:vms/pages/services/services_screen.dart';
import 'package:vms/pages/vehicle_info/vehicle_info_screen.dart';
import 'package:vms/providers/bottom_provider/bottom_provider.dart';
import 'package:vms/widgets/bottom_nav_bar/bottom_nav_bar.dart';

class BaseScreen extends StatefulWidget {
  const BaseScreen({super.key});

  @override
  State<BaseScreen> createState() => _BaseScreenState();
}

class _BaseScreenState extends State<BaseScreen> {
  @override
  Widget build(BuildContext context) {
    final providerWatch = context.watch<BottomProvider>();

    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          providerWatch.currentPage == Pages.home
              ? const HomeScreen()
              : providerWatch.currentPage == Pages.services
                  ? const ServicesScreen()
                  : providerWatch.currentPage == Pages.info
                      ? const VehicleInfoScreen()
                      : const ProfileScreen(),
          const Align(
            alignment: Alignment.bottomCenter,
            child: BottomNavBar(),
          ),
        ],
      ),
    );
  }
}
