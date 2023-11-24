import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:provider/provider.dart';
import 'package:vms/blocs/profile/profile_bloc.dart';
import 'package:vms/constants/color_constants.dart';
import 'package:vms/constants/enums.dart';
import 'package:vms/constants/functions.dart';
import 'package:vms/constants/map_constants.dart';
import 'package:vms/models/cancel_route_body/cancel_route_body.dart';
import 'package:vms/models/finish_route_body/finish_route_body.dart';
import 'package:vms/models/routes/routes.dart';
import 'package:vms/models/start_route_body/start_route_body.dart';
import 'package:vms/models/vehicle/vehicle.dart';
import 'package:vms/repositories/routes/routes_repo.dart';
import 'package:vms/repositories/vehicle/vehicle_repo.dart';
import 'package:vms/widgets/containers/profile_info.dart';

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key, required this.userId});

  final int userId;

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  @override
  void initState() {
    context.read<ProfileBloc>().add(ProfileEvent.fetch(userId: widget.userId));

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final height = MediaQuery.of(context).size.height;
    final width = MediaQuery.of(context).size.width;

    final profileState = context.watch<ProfileBloc>();

    return SizedBox(
      height: height,
      width: width,
      child: SafeArea(
        bottom: false,
        child: Column(
          children: [
            Container(
              margin: const EdgeInsets.symmetric(vertical: 40),
              padding: const EdgeInsets.symmetric(horizontal: 18),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    pageTitle[Pages.profile]!,
                    style: const TextStyle(
                      fontSize: 30,
                      fontWeight: FontWeight.w800,
                      color: Colors.black,
                    ),
                  ),
                  IconButton(
                    icon: SvgPicture.asset('assets/images/sign_out.svg'),
                    splashRadius: 25,
                    iconSize: 25,
                    highlightColor: Colors.redAccent.withOpacity(0.2),
                    splashColor: Colors.redAccent.withOpacity(0.2),
                    onPressed: () {
                      showAlertDialog(context);
                    },
                  ),
                ],
              ),
            ),
            profileState.state.when(
              loading: () {
                return Container(
                  margin: EdgeInsets.only(top: height / 4),
                  child: const CupertinoActivityIndicator(
                    color: ColorConstants.yellow,
                  ),
                );
              },
              loaded: (profile) {
                List<String> profileList = [
                  profile.userRole,
                  profile.email,
                  profile.address,
                  profile.phoneNumber,
                  profile.iin,
                ];

                return Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Container(
                      margin: const EdgeInsets.only(bottom: 30),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(100),
                        border: Border.all(
                          width: 1,
                          color: ColorConstants.lightGrey,
                        ),
                      ),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(100),
                        child: Image.asset(
                          'assets/images/kitten.png',
                          width: 100,
                          height: 100,
                          fit: BoxFit.fill,
                        ),
                      ),
                    ),
                    Text(
                      '${profile.firstname} ${profile.lastname}',
                      style: const TextStyle(
                        color: Colors.black,
                        fontWeight: FontWeight.w700,
                        fontSize: 18,
                      ),
                    ),
                    const SizedBox(height: 30),
                    Column(
                      mainAxisSize: MainAxisSize.min,
                      children: List.generate(5, (index) {
                        return ProfileInfo(
                          info: profileList[index],
                          profileTypeInfo:
                              ProfileTypeInfo.values.toList()[index],
                        );
                      }),
                    )
                  ],
                );
              },
              error: () {
                return Container(
                  margin: EdgeInsets.only(top: height / 4),
                  child: const Text(
                    'Oops..Looks like your internet connection is unstable. Try again',
                    textAlign: TextAlign.center,
                  ),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}
