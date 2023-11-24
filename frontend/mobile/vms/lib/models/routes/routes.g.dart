// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'routes.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$RoutesImpl _$$RoutesImplFromJson(Map<String, dynamic> json) => _$RoutesImpl(
      routes: (json['routes'] as List<dynamic>)
          .map((e) => Route.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$$RoutesImplToJson(_$RoutesImpl instance) =>
    <String, dynamic>{
      'routes': instance.routes,
    };

_$RouteImpl _$$RouteImplFromJson(Map<String, dynamic> json) => _$RouteImpl(
      routeId: json['route_id'] as int,
      clientId: json['client_id'] as int,
      driverId: json['driver_id'] as int,
      vehicleId: json['vehicle_id'] as String,
      startPoint: json['start_point'] as String,
      finishPoint: json['finish_point'] as String,
      distance: json['distance'] as int,
      startTime: json['start_time'] as String?,
      finishTime: json['finish_time'] as String?,
      status: json['status'] as String,
      requestedTime: json['requested_time'] as String,
      requestedDate: json['requested_date'] as String,
      rate: (json['rate'] as num?)?.toDouble(),
    );

Map<String, dynamic> _$$RouteImplToJson(_$RouteImpl instance) =>
    <String, dynamic>{
      'route_id': instance.routeId,
      'client_id': instance.clientId,
      'driver_id': instance.driverId,
      'vehicle_id': instance.vehicleId,
      'start_point': instance.startPoint,
      'finish_point': instance.finishPoint,
      'distance': instance.distance,
      'start_time': instance.startTime,
      'finish_time': instance.finishTime,
      'status': instance.status,
      'requested_time': instance.requestedTime,
      'requested_date': instance.requestedDate,
      'rate': instance.rate,
    };
