part of 'finish_route_bloc.dart';

@freezed
class FinishRouteState with _$FinishRouteState {
  const factory FinishRouteState.loading() = FinishRouteStateLoading;
  const factory FinishRouteState.loaded() = FinishRouteStateLoaded;
  const factory FinishRouteState.error() = FinishRouteStateError;
}