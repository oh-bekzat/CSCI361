import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:vms/constants/color_constants.dart';

class MyBackButton extends StatelessWidget {
  const MyBackButton({super.key});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.pop(context);
      },
      behavior: HitTestBehavior.translucent,
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: ColorConstants.yellow,
        ),
        width: 44,
        height: 44,
        child: Center(
          child: SvgPicture.asset(
            'assets/images/back.svg',
            colorFilter: const ColorFilter.mode(Colors.white, BlendMode.srcIn),
          ),
        ),
      ),
    );
  }
}
