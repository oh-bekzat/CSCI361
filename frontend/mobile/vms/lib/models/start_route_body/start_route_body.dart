import 'package:freezed_annotation/freezed_annotation.dart';

part 'start_route_body.freezed.dart';
part 'start_route_body.g.dart';

@freezed
class StartRouteBody with _$StartRouteBody {
  const factory StartRouteBody({
    @JsonKey(name: 'driver_id')
    required int driverId,

    @JsonKey(name: 'start_time')
    required String startTime,
  }) = _StartRouteBody;

  factory StartRouteBody.fromJson(Map<String, dynamic> json) =>
      _$StartRouteBodyFromJson(json);
}