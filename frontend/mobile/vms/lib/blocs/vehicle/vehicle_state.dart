part of 'vehicle_bloc.dart';

@freezed
class VehicleState with _$VehicleState {
  const factory VehicleState.loading() = VehicleStateLoading;
  const factory VehicleState.loaded({required Vehicle vehicle}) =
      VehicleStateLoaded;
  const factory VehicleState.error() = VehicleStateError;
}