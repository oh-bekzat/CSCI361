import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:vms/constants/color_constants.dart';
import 'package:vms/constants/enums.dart';
import 'package:vms/constants/map_constants.dart';

class ProfileInfo extends StatelessWidget {
  const ProfileInfo({
    required this.info,
    required this.profileTypeInfo,
    super.key,
  });

  final String info;
  final ProfileTypeInfo profileTypeInfo;
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const SizedBox(height: 10),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 18),
          child: Row(
            children: [
              SvgPicture.asset(profileTypeIcon[profileTypeInfo]!),
              const SizedBox(width: 30),
              Text(
                profileTypeTitle[profileTypeInfo]!,
                style: TextStyle(
                  color: Colors.black.withOpacity(0.7),
                  fontSize: 14,
                  fontWeight: FontWeight.w500,
                ),
              ),
              const Expanded(child: SizedBox()),
              Text(
                info,
                style: TextStyle(
                  color: Colors.black.withOpacity(0.7),
                  fontSize: 14,
                  fontWeight: FontWeight.w700,
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 10),
        Container(
          height: 0.5,
          color: ColorConstants.lightGrey,
          width: MediaQuery.of(context).size.width,
        )
      ],
    );
  }
}