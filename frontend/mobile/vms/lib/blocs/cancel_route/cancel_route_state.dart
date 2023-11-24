part of 'cancel_route_bloc.dart';

@freezed
class CancelRouteState with _$CancelRouteState {
  const factory CancelRouteState.loading() = CancelRouteStateLoading;
  const factory CancelRouteState.loaded() = CancelRouteStateLoaded;
  const factory CancelRouteState.error() = CancelRouteStateError;
}