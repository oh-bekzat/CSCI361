// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'vehicle.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

Vehicle _$VehicleFromJson(Map<String, dynamic> json) {
  return _Vehicle.fromJson(json);
}

/// @nodoc
mixin _$Vehicle {
  @JsonKey(name: 'license_plate')
  String get licensePlate => throw _privateConstructorUsedError;
  String get make => throw _privateConstructorUsedError;
  String get model => throw _privateConstructorUsedError;
  @JsonKey(name: 'vehicle_image')
  String get vehicleImage => throw _privateConstructorUsedError;
  @JsonKey(name: 'manufacture_year')
  int get manufactureYear => throw _privateConstructorUsedError;
  int get capacity => throw _privateConstructorUsedError;
  @JsonKey(name: 'fuel_volume')
  int get fuelVolume => throw _privateConstructorUsedError;
  @JsonKey(name: 'tank_volume')
  int get tankVolume => throw _privateConstructorUsedError;
  int get mileage => throw _privateConstructorUsedError;
  @JsonKey(name: 'last_fueled_date')
  String get lastFueledDate => throw _privateConstructorUsedError;
  @JsonKey(name: 'last_maintained_date')
  String get lastMaintainedDate => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $VehicleCopyWith<Vehicle> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $VehicleCopyWith<$Res> {
  factory $VehicleCopyWith(Vehicle value, $Res Function(Vehicle) then) =
      _$VehicleCopyWithImpl<$Res, Vehicle>;
  @useResult
  $Res call(
      {@JsonKey(name: 'license_plate') String licensePlate,
      String make,
      String model,
      @JsonKey(name: 'vehicle_image') String vehicleImage,
      @JsonKey(name: 'manufacture_year') int manufactureYear,
      int capacity,
      @JsonKey(name: 'fuel_volume') int fuelVolume,
      @JsonKey(name: 'tank_volume') int tankVolume,
      int mileage,
      @JsonKey(name: 'last_fueled_date') String lastFueledDate,
      @JsonKey(name: 'last_maintained_date') String lastMaintainedDate});
}

/// @nodoc
class _$VehicleCopyWithImpl<$Res, $Val extends Vehicle>
    implements $VehicleCopyWith<$Res> {
  _$VehicleCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? licensePlate = null,
    Object? make = null,
    Object? model = null,
    Object? vehicleImage = null,
    Object? manufactureYear = null,
    Object? capacity = null,
    Object? fuelVolume = null,
    Object? tankVolume = null,
    Object? mileage = null,
    Object? lastFueledDate = null,
    Object? lastMaintainedDate = null,
  }) {
    return _then(_value.copyWith(
      licensePlate: null == licensePlate
          ? _value.licensePlate
          : licensePlate // ignore: cast_nullable_to_non_nullable
              as String,
      make: null == make
          ? _value.make
          : make // ignore: cast_nullable_to_non_nullable
              as String,
      model: null == model
          ? _value.model
          : model // ignore: cast_nullable_to_non_nullable
              as String,
      vehicleImage: null == vehicleImage
          ? _value.vehicleImage
          : vehicleImage // ignore: cast_nullable_to_non_nullable
              as String,
      manufactureYear: null == manufactureYear
          ? _value.manufactureYear
          : manufactureYear // ignore: cast_nullable_to_non_nullable
              as int,
      capacity: null == capacity
          ? _value.capacity
          : capacity // ignore: cast_nullable_to_non_nullable
              as int,
      fuelVolume: null == fuelVolume
          ? _value.fuelVolume
          : fuelVolume // ignore: cast_nullable_to_non_nullable
              as int,
      tankVolume: null == tankVolume
          ? _value.tankVolume
          : tankVolume // ignore: cast_nullable_to_non_nullable
              as int,
      mileage: null == mileage
          ? _value.mileage
          : mileage // ignore: cast_nullable_to_non_nullable
              as int,
      lastFueledDate: null == lastFueledDate
          ? _value.lastFueledDate
          : lastFueledDate // ignore: cast_nullable_to_non_nullable
              as String,
      lastMaintainedDate: null == lastMaintainedDate
          ? _value.lastMaintainedDate
          : lastMaintainedDate // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$VehicleImplCopyWith<$Res> implements $VehicleCopyWith<$Res> {
  factory _$$VehicleImplCopyWith(
          _$VehicleImpl value, $Res Function(_$VehicleImpl) then) =
      __$$VehicleImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {@JsonKey(name: 'license_plate') String licensePlate,
      String make,
      String model,
      @JsonKey(name: 'vehicle_image') String vehicleImage,
      @JsonKey(name: 'manufacture_year') int manufactureYear,
      int capacity,
      @JsonKey(name: 'fuel_volume') int fuelVolume,
      @JsonKey(name: 'tank_volume') int tankVolume,
      int mileage,
      @JsonKey(name: 'last_fueled_date') String lastFueledDate,
      @JsonKey(name: 'last_maintained_date') String lastMaintainedDate});
}

/// @nodoc
class __$$VehicleImplCopyWithImpl<$Res>
    extends _$VehicleCopyWithImpl<$Res, _$VehicleImpl>
    implements _$$VehicleImplCopyWith<$Res> {
  __$$VehicleImplCopyWithImpl(
      _$VehicleImpl _value, $Res Function(_$VehicleImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? licensePlate = null,
    Object? make = null,
    Object? model = null,
    Object? vehicleImage = null,
    Object? manufactureYear = null,
    Object? capacity = null,
    Object? fuelVolume = null,
    Object? tankVolume = null,
    Object? mileage = null,
    Object? lastFueledDate = null,
    Object? lastMaintainedDate = null,
  }) {
    return _then(_$VehicleImpl(
      licensePlate: null == licensePlate
          ? _value.licensePlate
          : licensePlate // ignore: cast_nullable_to_non_nullable
              as String,
      make: null == make
          ? _value.make
          : make // ignore: cast_nullable_to_non_nullable
              as String,
      model: null == model
          ? _value.model
          : model // ignore: cast_nullable_to_non_nullable
              as String,
      vehicleImage: null == vehicleImage
          ? _value.vehicleImage
          : vehicleImage // ignore: cast_nullable_to_non_nullable
              as String,
      manufactureYear: null == manufactureYear
          ? _value.manufactureYear
          : manufactureYear // ignore: cast_nullable_to_non_nullable
              as int,
      capacity: null == capacity
          ? _value.capacity
          : capacity // ignore: cast_nullable_to_non_nullable
              as int,
      fuelVolume: null == fuelVolume
          ? _value.fuelVolume
          : fuelVolume // ignore: cast_nullable_to_non_nullable
              as int,
      tankVolume: null == tankVolume
          ? _value.tankVolume
          : tankVolume // ignore: cast_nullable_to_non_nullable
              as int,
      mileage: null == mileage
          ? _value.mileage
          : mileage // ignore: cast_nullable_to_non_nullable
              as int,
      lastFueledDate: null == lastFueledDate
          ? _value.lastFueledDate
          : lastFueledDate // ignore: cast_nullable_to_non_nullable
              as String,
      lastMaintainedDate: null == lastMaintainedDate
          ? _value.lastMaintainedDate
          : lastMaintainedDate // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$VehicleImpl implements _Vehicle {
  const _$VehicleImpl(
      {@JsonKey(name: 'license_plate') required this.licensePlate,
      required this.make,
      required this.model,
      @JsonKey(name: 'vehicle_image') required this.vehicleImage,
      @JsonKey(name: 'manufacture_year') required this.manufactureYear,
      required this.capacity,
      @JsonKey(name: 'fuel_volume') required this.fuelVolume,
      @JsonKey(name: 'tank_volume') required this.tankVolume,
      required this.mileage,
      @JsonKey(name: 'last_fueled_date') required this.lastFueledDate,
      @JsonKey(name: 'last_maintained_date') required this.lastMaintainedDate});

  factory _$VehicleImpl.fromJson(Map<String, dynamic> json) =>
      _$$VehicleImplFromJson(json);

  @override
  @JsonKey(name: 'license_plate')
  final String licensePlate;
  @override
  final String make;
  @override
  final String model;
  @override
  @JsonKey(name: 'vehicle_image')
  final String vehicleImage;
  @override
  @JsonKey(name: 'manufacture_year')
  final int manufactureYear;
  @override
  final int capacity;
  @override
  @JsonKey(name: 'fuel_volume')
  final int fuelVolume;
  @override
  @JsonKey(name: 'tank_volume')
  final int tankVolume;
  @override
  final int mileage;
  @override
  @JsonKey(name: 'last_fueled_date')
  final String lastFueledDate;
  @override
  @JsonKey(name: 'last_maintained_date')
  final String lastMaintainedDate;

  @override
  String toString() {
    return 'Vehicle(licensePlate: $licensePlate, make: $make, model: $model, vehicleImage: $vehicleImage, manufactureYear: $manufactureYear, capacity: $capacity, fuelVolume: $fuelVolume, tankVolume: $tankVolume, mileage: $mileage, lastFueledDate: $lastFueledDate, lastMaintainedDate: $lastMaintainedDate)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$VehicleImpl &&
            (identical(other.licensePlate, licensePlate) ||
                other.licensePlate == licensePlate) &&
            (identical(other.make, make) || other.make == make) &&
            (identical(other.model, model) || other.model == model) &&
            (identical(other.vehicleImage, vehicleImage) ||
                other.vehicleImage == vehicleImage) &&
            (identical(other.manufactureYear, manufactureYear) ||
                other.manufactureYear == manufactureYear) &&
            (identical(other.capacity, capacity) ||
                other.capacity == capacity) &&
            (identical(other.fuelVolume, fuelVolume) ||
                other.fuelVolume == fuelVolume) &&
            (identical(other.tankVolume, tankVolume) ||
                other.tankVolume == tankVolume) &&
            (identical(other.mileage, mileage) || other.mileage == mileage) &&
            (identical(other.lastFueledDate, lastFueledDate) ||
                other.lastFueledDate == lastFueledDate) &&
            (identical(other.lastMaintainedDate, lastMaintainedDate) ||
                other.lastMaintainedDate == lastMaintainedDate));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      licensePlate,
      make,
      model,
      vehicleImage,
      manufactureYear,
      capacity,
      fuelVolume,
      tankVolume,
      mileage,
      lastFueledDate,
      lastMaintainedDate);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$VehicleImplCopyWith<_$VehicleImpl> get copyWith =>
      __$$VehicleImplCopyWithImpl<_$VehicleImpl>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$VehicleImplToJson(
      this,
    );
  }
}

abstract class _Vehicle implements Vehicle {
  const factory _Vehicle(
      {@JsonKey(name: 'license_plate') required final String licensePlate,
      required final String make,
      required final String model,
      @JsonKey(name: 'vehicle_image') required final String vehicleImage,
      @JsonKey(name: 'manufacture_year') required final int manufactureYear,
      required final int capacity,
      @JsonKey(name: 'fuel_volume') required final int fuelVolume,
      @JsonKey(name: 'tank_volume') required final int tankVolume,
      required final int mileage,
      @JsonKey(name: 'last_fueled_date') required final String lastFueledDate,
      @JsonKey(name: 'last_maintained_date')
      required final String lastMaintainedDate}) = _$VehicleImpl;

  factory _Vehicle.fromJson(Map<String, dynamic> json) = _$VehicleImpl.fromJson;

  @override
  @JsonKey(name: 'license_plate')
  String get licensePlate;
  @override
  String get make;
  @override
  String get model;
  @override
  @JsonKey(name: 'vehicle_image')
  String get vehicleImage;
  @override
  @JsonKey(name: 'manufacture_year')
  int get manufactureYear;
  @override
  int get capacity;
  @override
  @JsonKey(name: 'fuel_volume')
  int get fuelVolume;
  @override
  @JsonKey(name: 'tank_volume')
  int get tankVolume;
  @override
  int get mileage;
  @override
  @JsonKey(name: 'last_fueled_date')
  String get lastFueledDate;
  @override
  @JsonKey(name: 'last_maintained_date')
  String get lastMaintainedDate;
  @override
  @JsonKey(ignore: true)
  _$$VehicleImplCopyWith<_$VehicleImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
