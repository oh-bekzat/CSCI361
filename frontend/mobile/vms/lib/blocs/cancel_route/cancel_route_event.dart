part of 'cancel_route_bloc.dart';

@freezed
class CancelRouteEvent with _$CancelRouteEvent {
  const factory CancelRouteEvent.fetch({
    required int routeId,
    required CancelRouteBody cancelBody,
  }) = CancelRouteEventFetch;
}