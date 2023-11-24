import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:vms/models/vehicle/vehicle.dart';
import 'package:vms/repositories/vehicle/vehicle_repo.dart';

part 'vehicle_bloc.freezed.dart';
part 'vehicle_event.dart';
part 'vehicle_state.dart';

class VehicleBloc extends Bloc<VehicleEvent, VehicleState> {
  final VehicleRepo vehicleRepo;

  VehicleBloc({required this.vehicleRepo})
      : super(const VehicleState.loading()) {
    on<VehicleEventFetch>((event, emit) async {
      emit(const VehicleState.loading());
      try {
        Vehicle vehicleLoaded =
            await vehicleRepo.getVehicleInfo(event.licensePlate);

        emit(VehicleState.loaded(vehicle: vehicleLoaded));
      } catch (e) {
        emit(const VehicleState.error());
      }
    });
  }
}
