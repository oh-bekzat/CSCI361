import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:vms/constants/color_constants.dart';
import 'package:vms/routes/router_constants.dart';

class PreloaderScreen extends StatefulWidget {
  const PreloaderScreen({super.key});

  @override
  State<PreloaderScreen> createState() => _PreloaderScreenState();
}

class _PreloaderScreenState extends State<PreloaderScreen> {
  int _seconds = 1;
  late Timer timer;

  @override
  void initState() {
    super.initState();

    if (mounted) {
      timer = Timer.periodic(const Duration(seconds: 1), (Timer timer) {
        setState(() {
          if (_seconds > 0) {
            _seconds--;
          } else {
            timer.cancel();
          }
        });
      });
    }

      Timer(const Duration(milliseconds: 1250), () {
        Navigator.of(context).pushReplacementNamed(RouterName.loginRoute);
      });

    // if (Boxes.userBox().isNotEmpty) {
    //   Timer(const Duration(milliseconds: 1250), () {
    //     Navigator.of(context).pushReplacementNamed(RouterName.mainRoute);
    //   });
    // } else {
    //   Timer(const Duration(milliseconds: 1250), () {
    //     Navigator.of(context).pushReplacementNamed(RouterName.welcomeRoute);
    //   });
    // }
  }

  @override
  void dispose() {
    timer.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ColorConstants.yellow,
      body: Center(
        child: SvgPicture.asset('assets/images/logo.svg'),
      ),
    );
  }
}
