import 'package:flutter/material.dart';
import 'package:vms/constants/color_constants.dart';

class RouteActiveButton extends StatelessWidget {
  const RouteActiveButton({
    required this.title,
    required this.onPressed,
    super.key,
  });

  final String title;
  final void Function()? onPressed;
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 18),
      child: ElevatedButton(
        onPressed: onPressed,
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.transparent,
          foregroundColor:  title.toLowerCase() == 'start'
                ? Colors.green
                : title.toLowerCase() == 'cancel'
                    ? Colors.redAccent
                    : ColorConstants.yellow,
          elevation: 0,
          shadowColor: Colors.transparent,
          side: BorderSide(
            color: title.toLowerCase() == 'start'
                ? Colors.green
                : title.toLowerCase() == 'cancel'
                    ? Colors.redAccent
                    : ColorConstants.yellow,
          ),
          padding: const EdgeInsets.symmetric(vertical: 15),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(10),
          ),
        ),
        child: Center(
          child: Text(
            title,
            style: const TextStyle(
              color: Colors.black,
              fontSize: 14,
              fontWeight: FontWeight.w600,
            ),
          ),
        ),
      ),
    );
  }
}
