// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'finish_route_body.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$FinishRouteBodyImpl _$$FinishRouteBodyImplFromJson(
        Map<String, dynamic> json) =>
    _$FinishRouteBodyImpl(
      driverId: json['driver_id'] as int,
      finishTime: json['finish_time'] as String,
    );

Map<String, dynamic> _$$FinishRouteBodyImplToJson(
        _$FinishRouteBodyImpl instance) =>
    <String, dynamic>{
      'driver_id': instance.driverId,
      'finish_time': instance.finishTime,
    };
