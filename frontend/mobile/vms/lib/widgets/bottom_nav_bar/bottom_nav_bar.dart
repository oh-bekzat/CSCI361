import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:provider/provider.dart';
import 'package:vms/constants/color_constants.dart';
import 'package:vms/constants/enums.dart';
import 'package:vms/constants/map_constants.dart';
import 'package:vms/providers/bottom_provider/bottom_provider.dart';

class BottomNavBar extends StatefulWidget {
  const BottomNavBar({super.key});

  @override
  State<BottomNavBar> createState() => _BottomNavBarState();
}

class _BottomNavBarState extends State<BottomNavBar> {
  @override
  Widget build(BuildContext context) {
    final providerRead = context.read<BottomProvider>();
    final providerWatch = context.watch<BottomProvider>();

    return Container(
      decoration: const BoxDecoration(
        color: ColorConstants.yellow,
      ),
      padding: const EdgeInsets.only(left: 10,right: 10,top: 12,bottom: 40),
      child: Row(
        children: List.generate(3, (index) {
          return Expanded(
            child: GestureDetector(
              behavior: HitTestBehavior.translucent,
              onTap: () {
                providerRead.changePage(Pages.values.toList()[index]);
              },
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                mainAxisSize: MainAxisSize.min,
                children: [
                  SvgPicture.asset(
                    providerWatch.currentPage == Pages.values.toList()[index]
                        ? activePageIcon[Pages.values.toList()[index]]!
                        : inActivePageIcon[Pages.values.toList()[index]]!,
                    width: 20,
                    height: 20,
                  ),
                  const SizedBox(height: 2),
                  Text(
                    bottomTitle[Pages.values.toList()[index]]!,
                    style: TextStyle(
                      fontWeight: FontWeight.w600,
                      fontSize: 12,
                      color: providerWatch.currentPage ==
                              Pages.values.toList()[index]
                          ? Colors.white
                          : ColorConstants.darkYellow,
                    ),
                  ),
                ],
              ),
            ),
          );
        }),
      ),
    );
  }
}
