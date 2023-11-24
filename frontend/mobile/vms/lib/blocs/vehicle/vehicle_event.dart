part of 'vehicle_bloc.dart';

@freezed
class VehicleEvent with _$VehicleEvent {
  const factory VehicleEvent.fetch({
    required String licensePlate,
  }) = VehicleEventFetch;
}