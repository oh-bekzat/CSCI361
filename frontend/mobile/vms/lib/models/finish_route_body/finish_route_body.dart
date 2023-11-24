import 'package:freezed_annotation/freezed_annotation.dart';

part 'finish_route_body.freezed.dart';
part 'finish_route_body.g.dart';

@freezed
class FinishRouteBody with _$FinishRouteBody {
  const factory FinishRouteBody({
    @JsonKey(name: 'driver_id')
    required int driverId,

    @JsonKey(name: 'finish_time')
    required String finishTime,
  }) = _FinishRouteBody;

  factory FinishRouteBody.fromJson(Map<String, dynamic> json) =>
      _$FinishRouteBodyFromJson(json);
}