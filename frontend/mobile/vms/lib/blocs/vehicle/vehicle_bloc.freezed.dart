// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'vehicle_bloc.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$VehicleEvent {
  String get licensePlate => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String licensePlate) fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String licensePlate)? fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String licensePlate)? fetch,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(VehicleEventFetch value) fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(VehicleEventFetch value)? fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(VehicleEventFetch value)? fetch,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;

  @JsonKey(ignore: true)
  $VehicleEventCopyWith<VehicleEvent> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $VehicleEventCopyWith<$Res> {
  factory $VehicleEventCopyWith(
          VehicleEvent value, $Res Function(VehicleEvent) then) =
      _$VehicleEventCopyWithImpl<$Res, VehicleEvent>;
  @useResult
  $Res call({String licensePlate});
}

/// @nodoc
class _$VehicleEventCopyWithImpl<$Res, $Val extends VehicleEvent>
    implements $VehicleEventCopyWith<$Res> {
  _$VehicleEventCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? licensePlate = null,
  }) {
    return _then(_value.copyWith(
      licensePlate: null == licensePlate
          ? _value.licensePlate
          : licensePlate // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$VehicleEventFetchImplCopyWith<$Res>
    implements $VehicleEventCopyWith<$Res> {
  factory _$$VehicleEventFetchImplCopyWith(_$VehicleEventFetchImpl value,
          $Res Function(_$VehicleEventFetchImpl) then) =
      __$$VehicleEventFetchImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String licensePlate});
}

/// @nodoc
class __$$VehicleEventFetchImplCopyWithImpl<$Res>
    extends _$VehicleEventCopyWithImpl<$Res, _$VehicleEventFetchImpl>
    implements _$$VehicleEventFetchImplCopyWith<$Res> {
  __$$VehicleEventFetchImplCopyWithImpl(_$VehicleEventFetchImpl _value,
      $Res Function(_$VehicleEventFetchImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? licensePlate = null,
  }) {
    return _then(_$VehicleEventFetchImpl(
      licensePlate: null == licensePlate
          ? _value.licensePlate
          : licensePlate // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc

class _$VehicleEventFetchImpl implements VehicleEventFetch {
  const _$VehicleEventFetchImpl({required this.licensePlate});

  @override
  final String licensePlate;

  @override
  String toString() {
    return 'VehicleEvent.fetch(licensePlate: $licensePlate)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$VehicleEventFetchImpl &&
            (identical(other.licensePlate, licensePlate) ||
                other.licensePlate == licensePlate));
  }

  @override
  int get hashCode => Object.hash(runtimeType, licensePlate);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$VehicleEventFetchImplCopyWith<_$VehicleEventFetchImpl> get copyWith =>
      __$$VehicleEventFetchImplCopyWithImpl<_$VehicleEventFetchImpl>(
          this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(String licensePlate) fetch,
  }) {
    return fetch(licensePlate);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(String licensePlate)? fetch,
  }) {
    return fetch?.call(licensePlate);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(String licensePlate)? fetch,
    required TResult orElse(),
  }) {
    if (fetch != null) {
      return fetch(licensePlate);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(VehicleEventFetch value) fetch,
  }) {
    return fetch(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(VehicleEventFetch value)? fetch,
  }) {
    return fetch?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(VehicleEventFetch value)? fetch,
    required TResult orElse(),
  }) {
    if (fetch != null) {
      return fetch(this);
    }
    return orElse();
  }
}

abstract class VehicleEventFetch implements VehicleEvent {
  const factory VehicleEventFetch({required final String licensePlate}) =
      _$VehicleEventFetchImpl;

  @override
  String get licensePlate;
  @override
  @JsonKey(ignore: true)
  _$$VehicleEventFetchImplCopyWith<_$VehicleEventFetchImpl> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
mixin _$VehicleState {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() loading,
    required TResult Function(Vehicle vehicle) loaded,
    required TResult Function() error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? loading,
    TResult? Function(Vehicle vehicle)? loaded,
    TResult? Function()? error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? loading,
    TResult Function(Vehicle vehicle)? loaded,
    TResult Function()? error,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(VehicleStateLoading value) loading,
    required TResult Function(VehicleStateLoaded value) loaded,
    required TResult Function(VehicleStateError value) error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(VehicleStateLoading value)? loading,
    TResult? Function(VehicleStateLoaded value)? loaded,
    TResult? Function(VehicleStateError value)? error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(VehicleStateLoading value)? loading,
    TResult Function(VehicleStateLoaded value)? loaded,
    TResult Function(VehicleStateError value)? error,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $VehicleStateCopyWith<$Res> {
  factory $VehicleStateCopyWith(
          VehicleState value, $Res Function(VehicleState) then) =
      _$VehicleStateCopyWithImpl<$Res, VehicleState>;
}

/// @nodoc
class _$VehicleStateCopyWithImpl<$Res, $Val extends VehicleState>
    implements $VehicleStateCopyWith<$Res> {
  _$VehicleStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$VehicleStateLoadingImplCopyWith<$Res> {
  factory _$$VehicleStateLoadingImplCopyWith(_$VehicleStateLoadingImpl value,
          $Res Function(_$VehicleStateLoadingImpl) then) =
      __$$VehicleStateLoadingImplCopyWithImpl<$Res>;
}

/// @nodoc
class __$$VehicleStateLoadingImplCopyWithImpl<$Res>
    extends _$VehicleStateCopyWithImpl<$Res, _$VehicleStateLoadingImpl>
    implements _$$VehicleStateLoadingImplCopyWith<$Res> {
  __$$VehicleStateLoadingImplCopyWithImpl(_$VehicleStateLoadingImpl _value,
      $Res Function(_$VehicleStateLoadingImpl) _then)
      : super(_value, _then);
}

/// @nodoc

class _$VehicleStateLoadingImpl implements VehicleStateLoading {
  const _$VehicleStateLoadingImpl();

  @override
  String toString() {
    return 'VehicleState.loading()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$VehicleStateLoadingImpl);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() loading,
    required TResult Function(Vehicle vehicle) loaded,
    required TResult Function() error,
  }) {
    return loading();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? loading,
    TResult? Function(Vehicle vehicle)? loaded,
    TResult? Function()? error,
  }) {
    return loading?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? loading,
    TResult Function(Vehicle vehicle)? loaded,
    TResult Function()? error,
    required TResult orElse(),
  }) {
    if (loading != null) {
      return loading();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(VehicleStateLoading value) loading,
    required TResult Function(VehicleStateLoaded value) loaded,
    required TResult Function(VehicleStateError value) error,
  }) {
    return loading(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(VehicleStateLoading value)? loading,
    TResult? Function(VehicleStateLoaded value)? loaded,
    TResult? Function(VehicleStateError value)? error,
  }) {
    return loading?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(VehicleStateLoading value)? loading,
    TResult Function(VehicleStateLoaded value)? loaded,
    TResult Function(VehicleStateError value)? error,
    required TResult orElse(),
  }) {
    if (loading != null) {
      return loading(this);
    }
    return orElse();
  }
}

abstract class VehicleStateLoading implements VehicleState {
  const factory VehicleStateLoading() = _$VehicleStateLoadingImpl;
}

/// @nodoc
abstract class _$$VehicleStateLoadedImplCopyWith<$Res> {
  factory _$$VehicleStateLoadedImplCopyWith(_$VehicleStateLoadedImpl value,
          $Res Function(_$VehicleStateLoadedImpl) then) =
      __$$VehicleStateLoadedImplCopyWithImpl<$Res>;
  @useResult
  $Res call({Vehicle vehicle});

  $VehicleCopyWith<$Res> get vehicle;
}

/// @nodoc
class __$$VehicleStateLoadedImplCopyWithImpl<$Res>
    extends _$VehicleStateCopyWithImpl<$Res, _$VehicleStateLoadedImpl>
    implements _$$VehicleStateLoadedImplCopyWith<$Res> {
  __$$VehicleStateLoadedImplCopyWithImpl(_$VehicleStateLoadedImpl _value,
      $Res Function(_$VehicleStateLoadedImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? vehicle = null,
  }) {
    return _then(_$VehicleStateLoadedImpl(
      vehicle: null == vehicle
          ? _value.vehicle
          : vehicle // ignore: cast_nullable_to_non_nullable
              as Vehicle,
    ));
  }

  @override
  @pragma('vm:prefer-inline')
  $VehicleCopyWith<$Res> get vehicle {
    return $VehicleCopyWith<$Res>(_value.vehicle, (value) {
      return _then(_value.copyWith(vehicle: value));
    });
  }
}

/// @nodoc

class _$VehicleStateLoadedImpl implements VehicleStateLoaded {
  const _$VehicleStateLoadedImpl({required this.vehicle});

  @override
  final Vehicle vehicle;

  @override
  String toString() {
    return 'VehicleState.loaded(vehicle: $vehicle)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$VehicleStateLoadedImpl &&
            (identical(other.vehicle, vehicle) || other.vehicle == vehicle));
  }

  @override
  int get hashCode => Object.hash(runtimeType, vehicle);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$VehicleStateLoadedImplCopyWith<_$VehicleStateLoadedImpl> get copyWith =>
      __$$VehicleStateLoadedImplCopyWithImpl<_$VehicleStateLoadedImpl>(
          this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() loading,
    required TResult Function(Vehicle vehicle) loaded,
    required TResult Function() error,
  }) {
    return loaded(vehicle);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? loading,
    TResult? Function(Vehicle vehicle)? loaded,
    TResult? Function()? error,
  }) {
    return loaded?.call(vehicle);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? loading,
    TResult Function(Vehicle vehicle)? loaded,
    TResult Function()? error,
    required TResult orElse(),
  }) {
    if (loaded != null) {
      return loaded(vehicle);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(VehicleStateLoading value) loading,
    required TResult Function(VehicleStateLoaded value) loaded,
    required TResult Function(VehicleStateError value) error,
  }) {
    return loaded(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(VehicleStateLoading value)? loading,
    TResult? Function(VehicleStateLoaded value)? loaded,
    TResult? Function(VehicleStateError value)? error,
  }) {
    return loaded?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(VehicleStateLoading value)? loading,
    TResult Function(VehicleStateLoaded value)? loaded,
    TResult Function(VehicleStateError value)? error,
    required TResult orElse(),
  }) {
    if (loaded != null) {
      return loaded(this);
    }
    return orElse();
  }
}

abstract class VehicleStateLoaded implements VehicleState {
  const factory VehicleStateLoaded({required final Vehicle vehicle}) =
      _$VehicleStateLoadedImpl;

  Vehicle get vehicle;
  @JsonKey(ignore: true)
  _$$VehicleStateLoadedImplCopyWith<_$VehicleStateLoadedImpl> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$VehicleStateErrorImplCopyWith<$Res> {
  factory _$$VehicleStateErrorImplCopyWith(_$VehicleStateErrorImpl value,
          $Res Function(_$VehicleStateErrorImpl) then) =
      __$$VehicleStateErrorImplCopyWithImpl<$Res>;
}

/// @nodoc
class __$$VehicleStateErrorImplCopyWithImpl<$Res>
    extends _$VehicleStateCopyWithImpl<$Res, _$VehicleStateErrorImpl>
    implements _$$VehicleStateErrorImplCopyWith<$Res> {
  __$$VehicleStateErrorImplCopyWithImpl(_$VehicleStateErrorImpl _value,
      $Res Function(_$VehicleStateErrorImpl) _then)
      : super(_value, _then);
}

/// @nodoc

class _$VehicleStateErrorImpl implements VehicleStateError {
  const _$VehicleStateErrorImpl();

  @override
  String toString() {
    return 'VehicleState.error()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$VehicleStateErrorImpl);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() loading,
    required TResult Function(Vehicle vehicle) loaded,
    required TResult Function() error,
  }) {
    return error();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? loading,
    TResult? Function(Vehicle vehicle)? loaded,
    TResult? Function()? error,
  }) {
    return error?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? loading,
    TResult Function(Vehicle vehicle)? loaded,
    TResult Function()? error,
    required TResult orElse(),
  }) {
    if (error != null) {
      return error();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(VehicleStateLoading value) loading,
    required TResult Function(VehicleStateLoaded value) loaded,
    required TResult Function(VehicleStateError value) error,
  }) {
    return error(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(VehicleStateLoading value)? loading,
    TResult? Function(VehicleStateLoaded value)? loaded,
    TResult? Function(VehicleStateError value)? error,
  }) {
    return error?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(VehicleStateLoading value)? loading,
    TResult Function(VehicleStateLoaded value)? loaded,
    TResult Function(VehicleStateError value)? error,
    required TResult orElse(),
  }) {
    if (error != null) {
      return error(this);
    }
    return orElse();
  }
}

abstract class VehicleStateError implements VehicleState {
  const factory VehicleStateError() = _$VehicleStateErrorImpl;
}
