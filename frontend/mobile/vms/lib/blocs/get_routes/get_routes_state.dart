part of 'get_routes_bloc.dart';

@freezed
class GetRoutesState with _$GetRoutesState {
  const factory GetRoutesState.loading() = GetRoutesStateLoading;
  const factory GetRoutesState.loaded({required Routes routes}) =
      GetRoutesStateLoaded;
  const factory GetRoutesState.error() = GetRoutesStateError;
}