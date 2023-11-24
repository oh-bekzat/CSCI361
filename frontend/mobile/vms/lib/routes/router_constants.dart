class RouterName {
  static const preloaderRoute = '/';

  static const loginRoute = '/login-screen';

  static const baseRoute = '/base-screen';

  static const dorogaRoute = '/doroga-screen';
}

class DorogaArguments {
  final int userId;
  final int routeId;
  final String fromAddress;
  final String toAddress;
  final String time;
  final String status;
  final String? startTime;
  final String? finishTime;

  DorogaArguments({
    required this.userId,
    required this.routeId,
    required this.fromAddress,
    required this.toAddress,
    required this.time,
    required this.status,
    this.startTime,
    this.finishTime,
  });
}
