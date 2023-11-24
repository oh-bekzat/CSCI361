import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:provider/provider.dart';
import 'package:vms/blocs/cancel_route/cancel_route_bloc.dart';
import 'package:vms/blocs/finish_route/finish_route_bloc.dart';
import 'package:vms/blocs/start_route/start_route_bloc.dart';
import 'package:vms/constants/color_constants.dart';
import 'package:vms/models/cancel_route_body/cancel_route_body.dart';
import 'package:vms/models/finish_route_body/finish_route_body.dart';
import 'package:vms/models/start_route_body/start_route_body.dart';
import 'package:vms/routes/router_constants.dart';
import 'package:vms/widgets/buttons/my_back_button.dart';
import 'package:vms/widgets/buttons/route_active_button.dart';
import 'package:intl/intl.dart';

class RouteScreen extends StatefulWidget {
  const RouteScreen({
    required this.arguments,
    super.key,
  });

  final DorogaArguments arguments;

  @override
  State<RouteScreen> createState() => _RouteScreenState();
}

class _RouteScreenState extends State<RouteScreen> {
  late String routeStatus;
  String finishTime = DateTime.now().toIso8601String();
  String startTime = DateTime.now().toIso8601String();

  @override
  void initState() {
    routeStatus = widget.arguments.status;

    super.initState();
  }

  Future<void> finishRoute(BuildContext context) async {
    FinishRouteBody finishRouteBody = FinishRouteBody(
      driverId: widget.arguments.userId,
      finishTime: finishTime,
    );

    context.read<FinishRouteBloc>().add(FinishRouteEvent.fetch(
        routeId: widget.arguments.routeId, finishBody: finishRouteBody));
  }

  Future<void> startRoute(BuildContext context) async {
    StartRouteBody startRouteBody = StartRouteBody(
      driverId: widget.arguments.userId,
      startTime: startTime,
    );

    context.read<StartRouteBloc>().add(StartRouteEvent.fetch(
        routeId: widget.arguments.routeId, startBody: startRouteBody));
  }

  Future<void> cancelRoute(BuildContext context) async {
    CancelRouteBody cancelRouteBody = CancelRouteBody(
      driverId: widget.arguments.userId,
    );

    context.read<CancelRouteBloc>().add(CancelRouteEvent.fetch(
          routeId: widget.arguments.routeId,
          cancelBody: cancelRouteBody,
        ));
  }

  @override
  Widget build(BuildContext context) {
    String startTime = '';
    String finishTime = '';

    if (widget.arguments.startTime == null) {
      startTime = '-:-';
    } else {
      DateTime start = DateTime.parse(widget.arguments.startTime!);
      var formatter = DateFormat('hh:mm');
      startTime = formatter.format(start);
    }

    if (widget.arguments.finishTime == null) {
      finishTime = '-:-';
    } else {
      DateTime start = DateTime.parse(widget.arguments.finishTime!);
      var formatter = DateFormat('hh:mm');
      finishTime = formatter.format(start);
    }

    return Scaffold(
      backgroundColor: ColorConstants.bg,
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            Container(
              margin: const EdgeInsets.only(top: 40, bottom: 10),
              padding: const EdgeInsets.symmetric(horizontal: 18),
              child: const Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  MyBackButton(),
                  Text(
                    'Route',
                    style: TextStyle(
                      fontSize: 30,
                      fontWeight: FontWeight.w800,
                      color: Colors.black,
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 30),
            Container(
              padding: const EdgeInsets.all(20),
              margin: const EdgeInsets.symmetric(horizontal: 18),
              decoration: BoxDecoration(
                color: Colors.white,
                border: Border.all(color: ColorConstants.border),
                borderRadius: BorderRadius.circular(10),
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
                          widget.arguments.fromAddress,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(
                            color: Colors.black,
                            fontWeight: FontWeight.w600,
                            fontSize: 14,
                          ),
                        ),
                        const SizedBox(height: 15),
                        Text(
                          widget.arguments.toAddress,
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
                    widget.arguments.time,
                    style: TextStyle(
                      color: ColorConstants.grey,
                      fontWeight: FontWeight.w500,
                      fontSize: 12,
                    ),
                  ),
                ],
              ),
            ),
            Column(
              children: [
                const SizedBox(height: 40),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 18),
                  child: Row(
                    children: [
                      Text(
                        'Start Time',
                        style: TextStyle(
                          color: Colors.black.withOpacity(0.7),
                          fontSize: 14,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      const Expanded(child: SizedBox()),
                      Text(
                        startTime,
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
                ),
                const SizedBox(height: 10),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 18),
                  child: Row(
                    children: [
                      Text(
                        'Finish Time',
                        style: TextStyle(
                          color: Colors.black.withOpacity(0.7),
                          fontSize: 14,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      const Expanded(child: SizedBox()),
                      Text(
                        finishTime,
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
                ),
              ],
            ),
            const Expanded(child: SizedBox()),
            routeStatus == 'assigned'
                ? Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      RouteActiveButton(
                        title: 'Start',
                        onPressed: () async {
                          await startRoute(context);

                          Navigator.pop(context);
                          Navigator.pop(context);
                          Navigator.pushNamed(context, RouterName.baseRoute);
                        },
                      ),
                      const SizedBox(height: 15),
                      RouteActiveButton(
                        title: 'Cancel',
                        onPressed: () async {
                          await cancelRoute(context);

                          Navigator.pop(context);
                          Navigator.pop(context);
                          Navigator.pushNamed(context, RouterName.baseRoute);
                        },
                      ),
                    ],
                  )
                : routeStatus == 'started'
                    ? RouteActiveButton(
                        title: 'Finish',
                        onPressed: () async {
                          await finishRoute(context);

                          Navigator.pop(context);
                          Navigator.pop(context);
                          Navigator.pushNamed(context, RouterName.baseRoute);
                        },
                      )
                    : const SizedBox(),
            const SizedBox(height: 50),
          ],
        ),
      ),
    );
  }
}
