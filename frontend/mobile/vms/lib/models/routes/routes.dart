import 'package:freezed_annotation/freezed_annotation.dart';

part 'routes.freezed.dart';
part 'routes.g.dart';

@freezed
class Routes with _$Routes {
  const factory Routes({
    required List<Route> routes,
  }) = _Routes;

  factory Routes.fromJson(Map<String, dynamic> json) =>
      _$RoutesFromJson(json);
  
}

@freezed
class Route with _$Route {
  const factory Route({
    @JsonKey(name: 'route_id')
    required int routeId,

    @JsonKey(name: 'client_id')
    required int clientId,

    @JsonKey(name: 'driver_id')
    required int driverId,

    @JsonKey(name: 'vehicle_id')
    required String vehicleId,

    @JsonKey(name: 'start_point')
    required String startPoint,

    @JsonKey(name: 'finish_point')
    required String finishPoint,

    required int distance,

    @JsonKey(name: 'start_time')
    required String? startTime,

    @JsonKey(name: 'finish_time')
    required String? finishTime,

    required String status,

    @JsonKey(name: 'requested_time')
    required String requestedTime,

    @JsonKey(name: 'requested_date')
    required String requestedDate,

    required double? rate,
  }) = _Route;

  factory Route.fromJson(Map<String, dynamic> json) =>
      _$RouteFromJson(json);
  
}