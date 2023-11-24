import 'package:freezed_annotation/freezed_annotation.dart';

part 'vehicle.freezed.dart';
part 'vehicle.g.dart';

@freezed
class Vehicle with _$Vehicle {
  const factory Vehicle({
    @JsonKey(name: 'license_plate')
    required String licensePlate,

    required String make,

    required String model,

    @JsonKey(name: 'vehicle_image')
    required String vehicleImage,

    @JsonKey(name: 'manufacture_year')
    required int manufactureYear,

    required int capacity,

    @JsonKey(name: 'fuel_volume')
    required int fuelVolume,

    @JsonKey(name: 'tank_volume')
    required int tankVolume,

    required int mileage,

    @JsonKey(name: 'last_fueled_date')
    required String lastFueledDate,

    @JsonKey(name: 'last_maintained_date')
    required String lastMaintainedDate,
  }) = _Vehicle;

  factory Vehicle.fromJson(Map<String, dynamic> json) =>
      _$VehicleFromJson(json);
  
}