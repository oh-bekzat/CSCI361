// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'vehicle.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$VehicleImpl _$$VehicleImplFromJson(Map<String, dynamic> json) =>
    _$VehicleImpl(
      licensePlate: json['license_plate'] as String,
      make: json['make'] as String,
      model: json['model'] as String,
      vehicleImage: json['vehicle_image'] as String,
      manufactureYear: json['manufacture_year'] as int,
      capacity: json['capacity'] as int,
      fuelVolume: json['fuel_volume'] as int,
      tankVolume: json['tank_volume'] as int,
      mileage: json['mileage'] as int,
      lastFueledDate: json['last_fueled_date'] as String,
      lastMaintainedDate: json['last_maintained_date'] as String,
    );

Map<String, dynamic> _$$VehicleImplToJson(_$VehicleImpl instance) =>
    <String, dynamic>{
      'license_plate': instance.licensePlate,
      'make': instance.make,
      'model': instance.model,
      'vehicle_image': instance.vehicleImage,
      'manufacture_year': instance.manufactureYear,
      'capacity': instance.capacity,
      'fuel_volume': instance.fuelVolume,
      'tank_volume': instance.tankVolume,
      'mileage': instance.mileage,
      'last_fueled_date': instance.lastFueledDate,
      'last_maintained_date': instance.lastMaintainedDate,
    };
