part of 'get_routes_bloc.dart';

@freezed
class GetRoutesEvent with _$GetRoutesEvent {
  const factory GetRoutesEvent.fetch({
    required int userId,
  }) = GetRoutesEventFetch;
}