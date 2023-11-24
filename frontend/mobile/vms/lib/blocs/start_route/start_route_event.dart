part of 'start_route_bloc.dart';

@freezed
class StartRouteEvent with _$StartRouteEvent {
  const factory StartRouteEvent.fetch({
    required int routeId,
    required StartRouteBody startBody,
  }) = StartRouteEventFetch;
}