import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:vms/blocs/get_routes/get_routes_bloc.dart';
import 'package:vms/blocs/vehicle/vehicle_bloc.dart';
import 'package:vms/constants/color_constants.dart';
import 'package:vms/constants/enums.dart';
import 'package:vms/constants/map_constants.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:vms/widgets/containers/vehicle_info.dart';

class VehicleInfoScreen extends StatefulWidget {
  const VehicleInfoScreen({required this.userId, super.key});

  final int userId;

  @override
  State<VehicleInfoScreen> createState() => _VehicleInfoScreenState();
}

class _VehicleInfoScreenState extends State<VehicleInfoScreen> {
  late bool isEmptyRoutes = true;
  bool isAlreadyCalled = false;

  @override
  void initState() {
    context
        .read<GetRoutesBloc>()
        .add(GetRoutesEvent.fetch(userId: widget.userId));
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final height = MediaQuery.of(context).size.height;
    final width = MediaQuery.of(context).size.width;

    final getRouteState = context.watch<GetRoutesBloc>();

    getRouteState.state.mapOrNull(loaded: (value) {
      if (value.routes.routes
          .where(
              (element) => element.status == routeStatus[RouteStatus.started])
          .isEmpty) {
        isEmptyRoutes = true;
      } else {
        isEmptyRoutes = false;
        if (!isAlreadyCalled) {
          context.read<VehicleBloc>().add(
                VehicleEvent.fetch(
                    licensePlate: value.routes.routes[0].vehicleId),
              );
          setState(() {
            isAlreadyCalled = true;
          });
        }
      }
    });

    final getVehicleState = context.watch<VehicleBloc>();

    return SizedBox(
      height: height,
      width: width,
      child: SafeArea(
        bottom: false,
        child: Column(
          children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 18),
              margin: const EdgeInsets.only(top: 40, bottom: 10),
              alignment: Alignment.topLeft,
              child: Text(
                pageTitle[Pages.info]!,
                style: const TextStyle(
                  fontSize: 30,
                  fontWeight: FontWeight.w800,
                  color: Colors.black,
                ),
              ),
            ),
            Expanded(
              child: Scrollbar(
                child: SingleChildScrollView(
                  physics: const BouncingScrollPhysics(),
                  padding: const EdgeInsets.only(top: 30),
                  child: isEmptyRoutes
                      ? Container(
                          margin: EdgeInsets.only(top: height / 4),
                          child: Text(
                            'No assigned routes found.',
                            style: TextStyle(color: ColorConstants.grey),
                            textAlign: TextAlign.center,
                          ),
                        )
                      : getVehicleState.state.when(
                          loading: () {
                            return Container(
                              margin: EdgeInsets.only(top: height / 4),
                              child: const CupertinoActivityIndicator(
                                color: ColorConstants.yellow,
                              ),
                            );
                          },
                          loaded: (vehicle) {
                            List<String> vehicleInfoList = [
                              vehicle.licensePlate,
                              vehicle.capacity.toString(),
                              vehicle.tankVolume.toString(),
                              vehicle.mileage.toString(),
                              vehicle.lastMaintainedDate,
                              vehicle.lastFueledDate,
                            ];
              
                            return Column(
                              children: [
                                CachedNetworkImage(
                                  imageUrl: vehicle.vehicleImage,
                                  width: width,
                                ),
                                const SizedBox(height: 30),
                                Padding(
                                  padding:
                                      const EdgeInsets.symmetric(horizontal: 20),
                                  child: Row(
                                    mainAxisAlignment:
                                        MainAxisAlignment.spaceBetween,
                                    children: [
                                      Text(
                                        vehicle.make + vehicle.model,
                                        style: const TextStyle(
                                          color: Colors.black,
                                          fontWeight: FontWeight.w700,
                                          fontSize: 18,
                                        ),
                                      ),
                                      Text(
                                        vehicle.manufactureYear.toString(),
                                        style: const TextStyle(
                                          color: ColorConstants.yellow,
                                          fontWeight: FontWeight.w500,
                                          fontSize: 14,
                                        ),
                                      )
                                    ],
                                  ),
                                ),
                                const SizedBox(height: 14),
                                Container(
                                  margin:
                                      const EdgeInsets.symmetric(horizontal: 18),
                                  height: 0.5,
                                  color: ColorConstants.lightGrey,
                                ),
                                const SizedBox(height: 50),
                                Column(
                                  children: List.generate(6, (index) {
                                    return VehicleInfo(
                                      info: vehicleInfoList[index],
                                      vehicleTypeInfo:
                                          VehicleTypeInfo.values.toList()[index],
                                    );
                                  }),
                                ),
                                const SizedBox(height: 200),
                              ],
                            );
                          },
                          error: () {
                            return Container(
                              margin: EdgeInsets.only(top: height / 4),
                              child: Text(
                                'Oops..Looks like your internet connection is unstable. Try again',
                                style: TextStyle(color: ColorConstants.grey),
                                textAlign: TextAlign.center,
                              ),
                            );
                          },
                        ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
