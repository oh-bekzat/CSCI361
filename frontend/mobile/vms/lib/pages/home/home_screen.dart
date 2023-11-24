import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:vms/blocs/get_routes/get_routes_bloc.dart';
import 'package:vms/constants/color_constants.dart';
import 'package:vms/constants/enums.dart';
import 'package:vms/constants/map_constants.dart';
import 'package:vms/routes/router_constants.dart';
import 'package:vms/widgets/containers/route_container.dart';
import 'package:vms/widgets/tab/custom_tab.dart';
import 'package:vms/models/routes/routes.dart' as doroga;

class HomeScreen extends StatefulWidget {
  const HomeScreen({required this.userId, super.key});

  final int userId;
  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> with TickerProviderStateMixin {
  late final TabController _tabController;

  @override
  void initState() {
    context
        .read<GetRoutesBloc>()
        .add(GetRoutesEvent.fetch(userId: widget.userId));

    super.initState();
    _tabController = TabController(length: 3, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final getRouteState = context.watch<GetRoutesBloc>();

    return SizedBox(
      height: MediaQuery.of(context).size.height,
      width: MediaQuery.of(context).size.width,
      child: SafeArea(
        bottom: false,
        child: Column(
          children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 18),
              margin: const EdgeInsets.only(top: 40, bottom: 30),
              alignment: Alignment.topLeft,
              child: Text(
                pageTitle[Pages.home]!,
                style: const TextStyle(
                  fontSize: 30,
                  fontWeight: FontWeight.w800,
                  color: Colors.black,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 18),
              child: Container(
                decoration: BoxDecoration(
                  color: Colors.white,
                  border: Border.all(
                    width: 1,
                    color: ColorConstants.border,
                  ),
                  borderRadius: BorderRadius.circular(20),
                ),
                child: TabBar(
                  splashBorderRadius: BorderRadius.circular(20),
                  indicatorColor: Colors.blue,
                  padding: const EdgeInsets.all(5),
                  controller: _tabController,
                  indicator: BoxDecoration(
                    color: ColorConstants.yellow,
                    borderRadius: BorderRadius.circular(15),
                  ),
                  labelColor: Colors.white, // Selected tab text color
                  unselectedLabelColor:
                      ColorConstants.grey, // Unselected tab text color
                  tabs: const [
                    CustomTab(title: 'ASSIGNED'),
                    CustomTab(title: 'CURRENT'),
                    CustomTab(title: 'COMPLETED'),
                  ],
                ),
              ),
            ),
            getRouteState.state.when(
              loading: () => const Center(
                child: CupertinoActivityIndicator(color: ColorConstants.yellow),
              ),
              loaded: (routes) {
                List<doroga.Route> assignedRoutes = routes.routes
                    .where((element) =>
                        element.status == routeStatus[RouteStatus.assigned])
                    .toList();

                List<doroga.Route> currentRoutes = routes.routes
                    .where((element) =>
                        element.status == routeStatus[RouteStatus.started])
                    .toList();

                List<doroga.Route> completedRoutes = routes.routes
                    .where((element) =>
                        element.status == routeStatus[RouteStatus.completed])
                    .toList();

                return Expanded(
                  child: TabBarView(
                    physics: const BouncingScrollPhysics(),
                    controller: _tabController,
                    children: [
                      assignedRoutes.isEmpty
                          ? Container(
                              margin: const EdgeInsets.only(top: 40),
                              child: Text(
                                'No assigned routes found',
                                style: TextStyle(color: ColorConstants.grey),
                                textAlign: TextAlign.center,
                              ),
                            )
                          : ListView(
                              padding: const EdgeInsets.only(bottom: 150),
                              children:
                                  List.generate(assignedRoutes.length, (index) {
                                return Container(
                                  margin: EdgeInsets.fromLTRB(
                                      18, index == 0 ? 20 : 0, 18, 10),
                                  child: RouteContainer(
                                    fromAddress:
                                        assignedRoutes[index].startPoint,
                                    toAddress:
                                        assignedRoutes[index].finishPoint,
                                    time: assignedRoutes[index].requestedDate,
                                    onPressed: () {
                                      Navigator.pushNamed(
                                        context,
                                        RouterName.dorogaRoute,
                                        arguments: DorogaArguments(
                                          userId: widget.userId,
                                          routeId:
                                              assignedRoutes[index].routeId,
                                          fromAddress:
                                              assignedRoutes[index].startPoint,
                                          toAddress:
                                              assignedRoutes[index].finishPoint,
                                          time: assignedRoutes[index]
                                              .requestedDate,
                                          status: assignedRoutes[index].status,
                                        ),
                                      );
                                    },
                                  ),
                                );
                              }),
                            ),
                      currentRoutes.isEmpty
                          ? Container(
                              margin: const EdgeInsets.only(top: 40),
                              child: Text(
                                'No current routes found',
                                style: TextStyle(color: ColorConstants.grey),
                                textAlign: TextAlign.center,
                              ),
                            )
                          : ListView(
                              padding: const EdgeInsets.only(bottom: 150),
                              children:
                                  List.generate(currentRoutes.length, (index) {
                                return Container(
                                  margin: EdgeInsets.fromLTRB(
                                      18, index == 0 ? 20 : 0, 18, 10),
                                  child: RouteContainer(
                                    fromAddress:
                                        currentRoutes[index].startPoint,
                                    toAddress: currentRoutes[index].finishPoint,
                                    time: currentRoutes[index].requestedDate,
                                    onPressed: () {
                                      Navigator.pushNamed(
                                        context,
                                        RouterName.dorogaRoute,
                                        arguments: DorogaArguments(
                                          userId: widget.userId,
                                          routeId: currentRoutes[index].routeId,
                                          fromAddress:
                                              currentRoutes[index].startPoint,
                                          toAddress:
                                              currentRoutes[index].finishPoint,
                                          time: currentRoutes[index]
                                              .requestedDate,
                                          status: currentRoutes[index].status,
                                          startTime:
                                              currentRoutes[index].startTime,
                                        ),
                                      );
                                    },
                                  ),
                                );
                              }),
                            ),
                      completedRoutes.isEmpty
                          ? Container(
                              margin: const EdgeInsets.only(top: 40),
                              child: Text(
                                'No completed routes found',
                                style: TextStyle(color: ColorConstants.grey),
                                textAlign: TextAlign.center,
                              ),
                            )
                          : ListView(
                              padding: const EdgeInsets.only(bottom: 150),
                              children: List.generate(completedRoutes.length,
                                  (index) {
                                return Container(
                                  margin: EdgeInsets.fromLTRB(
                                      18, index == 0 ? 20 : 0, 18, 10),
                                  child: RouteContainer(
                                    fromAddress:
                                        completedRoutes[index].startPoint,
                                    toAddress:
                                        completedRoutes[index].finishPoint,
                                    time: completedRoutes[index].requestedDate,
                                    onPressed: () {
                                      Navigator.pushNamed(
                                        context,
                                        RouterName.dorogaRoute,
                                        arguments: DorogaArguments(
                                          userId: widget.userId,
                                          routeId:
                                              completedRoutes[index].routeId,
                                          fromAddress:
                                              completedRoutes[index].startPoint,
                                          toAddress: completedRoutes[index]
                                              .finishPoint,
                                          time: completedRoutes[index]
                                              .requestedDate,
                                          status: completedRoutes[index].status,
                                          startTime:
                                              completedRoutes[index].startTime,
                                          finishTime:
                                              completedRoutes[index].finishTime,
                                        ),
                                      );
                                    },
                                  ),
                                );
                              }),
                            ),
                    ],
                  ),
                );
              },
              error: () => Center(
                child: Text(
                  'Oops..Looks like your internet connection is unstable. Try again',
                  style: TextStyle(color: ColorConstants.grey),
                  textAlign: TextAlign.center,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
