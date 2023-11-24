// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'finish_route_body.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

FinishRouteBody _$FinishRouteBodyFromJson(Map<String, dynamic> json) {
  return _FinishRouteBody.fromJson(json);
}

/// @nodoc
mixin _$FinishRouteBody {
  @JsonKey(name: 'driver_id')
  int get driverId => throw _privateConstructorUsedError;
  @JsonKey(name: 'finish_time')
  String get finishTime => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $FinishRouteBodyCopyWith<FinishRouteBody> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $FinishRouteBodyCopyWith<$Res> {
  factory $FinishRouteBodyCopyWith(
          FinishRouteBody value, $Res Function(FinishRouteBody) then) =
      _$FinishRouteBodyCopyWithImpl<$Res, FinishRouteBody>;
  @useResult
  $Res call(
      {@JsonKey(name: 'driver_id') int driverId,
      @JsonKey(name: 'finish_time') String finishTime});
}

/// @nodoc
class _$FinishRouteBodyCopyWithImpl<$Res, $Val extends FinishRouteBody>
    implements $FinishRouteBodyCopyWith<$Res> {
  _$FinishRouteBodyCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? driverId = null,
    Object? finishTime = null,
  }) {
    return _then(_value.copyWith(
      driverId: null == driverId
          ? _value.driverId
          : driverId // ignore: cast_nullable_to_non_nullable
              as int,
      finishTime: null == finishTime
          ? _value.finishTime
          : finishTime // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$FinishRouteBodyImplCopyWith<$Res>
    implements $FinishRouteBodyCopyWith<$Res> {
  factory _$$FinishRouteBodyImplCopyWith(_$FinishRouteBodyImpl value,
          $Res Function(_$FinishRouteBodyImpl) then) =
      __$$FinishRouteBodyImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {@JsonKey(name: 'driver_id') int driverId,
      @JsonKey(name: 'finish_time') String finishTime});
}

/// @nodoc
class __$$FinishRouteBodyImplCopyWithImpl<$Res>
    extends _$FinishRouteBodyCopyWithImpl<$Res, _$FinishRouteBodyImpl>
    implements _$$FinishRouteBodyImplCopyWith<$Res> {
  __$$FinishRouteBodyImplCopyWithImpl(
      _$FinishRouteBodyImpl _value, $Res Function(_$FinishRouteBodyImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? driverId = null,
    Object? finishTime = null,
  }) {
    return _then(_$FinishRouteBodyImpl(
      driverId: null == driverId
          ? _value.driverId
          : driverId // ignore: cast_nullable_to_non_nullable
              as int,
      finishTime: null == finishTime
          ? _value.finishTime
          : finishTime // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$FinishRouteBodyImpl implements _FinishRouteBody {
  const _$FinishRouteBodyImpl(
      {@JsonKey(name: 'driver_id') required this.driverId,
      @JsonKey(name: 'finish_time') required this.finishTime});

  factory _$FinishRouteBodyImpl.fromJson(Map<String, dynamic> json) =>
      _$$FinishRouteBodyImplFromJson(json);

  @override
  @JsonKey(name: 'driver_id')
  final int driverId;
  @override
  @JsonKey(name: 'finish_time')
  final String finishTime;

  @override
  String toString() {
    return 'FinishRouteBody(driverId: $driverId, finishTime: $finishTime)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$FinishRouteBodyImpl &&
            (identical(other.driverId, driverId) ||
                other.driverId == driverId) &&
            (identical(other.finishTime, finishTime) ||
                other.finishTime == finishTime));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, driverId, finishTime);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$FinishRouteBodyImplCopyWith<_$FinishRouteBodyImpl> get copyWith =>
      __$$FinishRouteBodyImplCopyWithImpl<_$FinishRouteBodyImpl>(
          this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$FinishRouteBodyImplToJson(
      this,
    );
  }
}

abstract class _FinishRouteBody implements FinishRouteBody {
  const factory _FinishRouteBody(
          {@JsonKey(name: 'driver_id') required final int driverId,
          @JsonKey(name: 'finish_time') required final String finishTime}) =
      _$FinishRouteBodyImpl;

  factory _FinishRouteBody.fromJson(Map<String, dynamic> json) =
      _$FinishRouteBodyImpl.fromJson;

  @override
  @JsonKey(name: 'driver_id')
  int get driverId;
  @override
  @JsonKey(name: 'finish_time')
  String get finishTime;
  @override
  @JsonKey(ignore: true)
  _$$FinishRouteBodyImplCopyWith<_$FinishRouteBodyImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
