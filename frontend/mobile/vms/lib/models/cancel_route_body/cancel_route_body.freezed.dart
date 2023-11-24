// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'cancel_route_body.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

CancelRouteBody _$CancelRouteBodyFromJson(Map<String, dynamic> json) {
  return _CancelRouteBody.fromJson(json);
}

/// @nodoc
mixin _$CancelRouteBody {
  @JsonKey(name: 'driver_id')
  int get driverId => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $CancelRouteBodyCopyWith<CancelRouteBody> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $CancelRouteBodyCopyWith<$Res> {
  factory $CancelRouteBodyCopyWith(
          CancelRouteBody value, $Res Function(CancelRouteBody) then) =
      _$CancelRouteBodyCopyWithImpl<$Res, CancelRouteBody>;
  @useResult
  $Res call({@JsonKey(name: 'driver_id') int driverId});
}

/// @nodoc
class _$CancelRouteBodyCopyWithImpl<$Res, $Val extends CancelRouteBody>
    implements $CancelRouteBodyCopyWith<$Res> {
  _$CancelRouteBodyCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? driverId = null,
  }) {
    return _then(_value.copyWith(
      driverId: null == driverId
          ? _value.driverId
          : driverId // ignore: cast_nullable_to_non_nullable
              as int,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$CancelRouteBodyImplCopyWith<$Res>
    implements $CancelRouteBodyCopyWith<$Res> {
  factory _$$CancelRouteBodyImplCopyWith(_$CancelRouteBodyImpl value,
          $Res Function(_$CancelRouteBodyImpl) then) =
      __$$CancelRouteBodyImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({@JsonKey(name: 'driver_id') int driverId});
}

/// @nodoc
class __$$CancelRouteBodyImplCopyWithImpl<$Res>
    extends _$CancelRouteBodyCopyWithImpl<$Res, _$CancelRouteBodyImpl>
    implements _$$CancelRouteBodyImplCopyWith<$Res> {
  __$$CancelRouteBodyImplCopyWithImpl(
      _$CancelRouteBodyImpl _value, $Res Function(_$CancelRouteBodyImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? driverId = null,
  }) {
    return _then(_$CancelRouteBodyImpl(
      driverId: null == driverId
          ? _value.driverId
          : driverId // ignore: cast_nullable_to_non_nullable
              as int,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$CancelRouteBodyImpl implements _CancelRouteBody {
  const _$CancelRouteBodyImpl(
      {@JsonKey(name: 'driver_id') required this.driverId});

  factory _$CancelRouteBodyImpl.fromJson(Map<String, dynamic> json) =>
      _$$CancelRouteBodyImplFromJson(json);

  @override
  @JsonKey(name: 'driver_id')
  final int driverId;

  @override
  String toString() {
    return 'CancelRouteBody(driverId: $driverId)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$CancelRouteBodyImpl &&
            (identical(other.driverId, driverId) ||
                other.driverId == driverId));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, driverId);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$CancelRouteBodyImplCopyWith<_$CancelRouteBodyImpl> get copyWith =>
      __$$CancelRouteBodyImplCopyWithImpl<_$CancelRouteBodyImpl>(
          this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$CancelRouteBodyImplToJson(
      this,
    );
  }
}

abstract class _CancelRouteBody implements CancelRouteBody {
  const factory _CancelRouteBody(
          {@JsonKey(name: 'driver_id') required final int driverId}) =
      _$CancelRouteBodyImpl;

  factory _CancelRouteBody.fromJson(Map<String, dynamic> json) =
      _$CancelRouteBodyImpl.fromJson;

  @override
  @JsonKey(name: 'driver_id')
  int get driverId;
  @override
  @JsonKey(ignore: true)
  _$$CancelRouteBodyImplCopyWith<_$CancelRouteBodyImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
