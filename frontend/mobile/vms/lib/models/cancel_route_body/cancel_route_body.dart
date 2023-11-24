import 'package:freezed_annotation/freezed_annotation.dart';

part 'cancel_route_body.freezed.dart';
part 'cancel_route_body.g.dart';

@freezed
class CancelRouteBody with _$CancelRouteBody {
  const factory CancelRouteBody({
    @JsonKey(name: 'driver_id')
    required int driverId,
  }) = _CancelRouteBody;

  factory CancelRouteBody.fromJson(Map<String, dynamic> json) =>
      _$CancelRouteBodyFromJson(json);
}