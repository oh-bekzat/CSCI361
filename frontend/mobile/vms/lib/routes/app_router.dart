import 'package:flutter/material.dart';
import 'package:vms/pages/base/base_screen.dart';
import 'package:vms/pages/login/login_screen.dart';
import 'package:vms/pages/preloader/preloader_screen.dart';
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
      default:
        return MaterialPageRoute(
          builder: (_) => const LoginScreen(),
        );
    }
  }
}
