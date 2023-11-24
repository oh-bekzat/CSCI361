part of 'finish_route_bloc.dart';

@freezed
class FinishRouteEvent with _$FinishRouteEvent {
  const factory FinishRouteEvent.fetch({
    required int routeId,
    required FinishRouteBody finishBody,
  }) = FinishRouteEventFetch;
}