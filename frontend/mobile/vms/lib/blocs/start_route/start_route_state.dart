part of 'start_route_bloc.dart';

@freezed
class StartRouteState with _$StartRouteState {
  const factory StartRouteState.loading() = StartRouteStateLoading;
  const factory StartRouteState.loaded() = StartRouteStateLoaded;
  const factory StartRouteState.error() = StartRouteStateError;
}
