import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:intl/intl.dart';
import 'package:vms/constants/color_constants.dart';

class RouteContainer extends StatelessWidget {
  const RouteContainer({
    required this.fromAddress,
    required this.toAddress,
    required this.time,
    required this.onPressed,
    super.key,
  });

  final String fromAddress;
  final String toAddress;
  final String time;
  final void Function()? onPressed;
  @override
  Widget build(BuildContext context) {
    DateTime start = DateTime.parse(time);
    var formatter = DateFormat('hh:mm - dd MMM, yyyy');
    String requestedTime = formatter.format(start);

    return ElevatedButton(
      onPressed: onPressed,
      style: ElevatedButton.styleFrom(
        padding: const EdgeInsets.all(20),
        backgroundColor: Colors.white,
        foregroundColor: ColorConstants.yellow,
        side: const BorderSide(color: ColorConstants.border),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
        shadowColor: Colors.transparent,
        elevation: 0,
      ),
      child: Row(
        children: [
          SvgPicture.asset('assets/images/route_line.svg'),
          const SizedBox(width: 20),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  fromAddress,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(
                    color: Colors.black,
                    fontWeight: FontWeight.w600,
                    fontSize: 14,
                  ),
                ),
                const SizedBox(height: 15),
                Text(
                  toAddress,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(
                    color: Colors.black,
                    fontWeight: FontWeight.w600,
                    fontSize: 14,
                  ),
                ),
              ],
            ),
          ),
          Text(
            requestedTime,
            style: TextStyle(
              color: ColorConstants.grey,
              fontWeight: FontWeight.w500,
              fontSize: 12,
            ),
          ),
        ],
      ),
    );
  }
}
