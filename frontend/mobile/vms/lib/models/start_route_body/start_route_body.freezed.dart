// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'start_route_body.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

StartRouteBody _$StartRouteBodyFromJson(Map<String, dynamic> json) {
  return _StartRouteBody.fromJson(json);
}

/// @nodoc
mixin _$StartRouteBody {
  @JsonKey(name: 'driver_id')
  int get driverId => throw _privateConstructorUsedError;
  @JsonKey(name: 'start_time')
  String get startTime => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $StartRouteBodyCopyWith<StartRouteBody> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $StartRouteBodyCopyWith<$Res> {
  factory $StartRouteBodyCopyWith(
          StartRouteBody value, $Res Function(StartRouteBody) then) =
      _$StartRouteBodyCopyWithImpl<$Res, StartRouteBody>;
  @useResult
  $Res call(
      {@JsonKey(name: 'driver_id') int driverId,
      @JsonKey(name: 'start_time') String startTime});
}

/// @nodoc
class _$StartRouteBodyCopyWithImpl<$Res, $Val extends StartRouteBody>
    implements $StartRouteBodyCopyWith<$Res> {
  _$StartRouteBodyCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? driverId = null,
    Object? startTime = null,
  }) {
    return _then(_value.copyWith(
      driverId: null == driverId
          ? _value.driverId
          : driverId // ignore: cast_nullable_to_non_nullable
              as int,
      startTime: null == startTime
          ? _value.startTime
          : startTime // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$StartRouteBodyImplCopyWith<$Res>
    implements $StartRouteBodyCopyWith<$Res> {
  factory _$$StartRouteBodyImplCopyWith(_$StartRouteBodyImpl value,
          $Res Function(_$StartRouteBodyImpl) then) =
      __$$StartRouteBodyImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {@JsonKey(name: 'driver_id') int driverId,
      @JsonKey(name: 'start_time') String startTime});
}

/// @nodoc
class __$$StartRouteBodyImplCopyWithImpl<$Res>
    extends _$StartRouteBodyCopyWithImpl<$Res, _$StartRouteBodyImpl>
    implements _$$StartRouteBodyImplCopyWith<$Res> {
  __$$StartRouteBodyImplCopyWithImpl(
      _$StartRouteBodyImpl _value, $Res Function(_$StartRouteBodyImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? driverId = null,
    Object? startTime = null,
  }) {
    return _then(_$StartRouteBodyImpl(
      driverId: null == driverId
          ? _value.driverId
          : driverId // ignore: cast_nullable_to_non_nullable
              as int,
      startTime: null == startTime
          ? _value.startTime
          : startTime // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$StartRouteBodyImpl implements _StartRouteBody {
  const _$StartRouteBodyImpl(
      {@JsonKey(name: 'driver_id') required this.driverId,
      @JsonKey(name: 'start_time') required this.startTime});

  factory _$StartRouteBodyImpl.fromJson(Map<String, dynamic> json) =>
      _$$StartRouteBodyImplFromJson(json);

  @override
  @JsonKey(name: 'driver_id')
  final int driverId;
  @override
  @JsonKey(name: 'start_time')
  final String startTime;

  @override
  String toString() {
    return 'StartRouteBody(driverId: $driverId, startTime: $startTime)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$StartRouteBodyImpl &&
            (identical(other.driverId, driverId) ||
                other.driverId == driverId) &&
            (identical(other.startTime, startTime) ||
                other.startTime == startTime));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, driverId, startTime);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$StartRouteBodyImplCopyWith<_$StartRouteBodyImpl> get copyWith =>
      __$$StartRouteBodyImplCopyWithImpl<_$StartRouteBodyImpl>(
          this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$StartRouteBodyImplToJson(
      this,
    );
  }
}

abstract class _StartRouteBody implements StartRouteBody {
  const factory _StartRouteBody(
          {@JsonKey(name: 'driver_id') required final int driverId,
          @JsonKey(name: 'start_time') required final String startTime}) =
      _$StartRouteBodyImpl;

  factory _StartRouteBody.fromJson(Map<String, dynamic> json) =
      _$StartRouteBodyImpl.fromJson;

  @override
  @JsonKey(name: 'driver_id')
  int get driverId;
  @override
  @JsonKey(name: 'start_time')
  String get startTime;
  @override
  @JsonKey(ignore: true)
  _$$StartRouteBodyImplCopyWith<_$StartRouteBodyImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
