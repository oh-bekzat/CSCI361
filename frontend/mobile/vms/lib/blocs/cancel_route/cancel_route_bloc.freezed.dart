// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'cancel_route_bloc.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$CancelRouteEvent {
  int get routeId => throw _privateConstructorUsedError;
  CancelRouteBody get cancelBody => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(int routeId, CancelRouteBody cancelBody) fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(int routeId, CancelRouteBody cancelBody)? fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(int routeId, CancelRouteBody cancelBody)? fetch,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(CancelRouteEventFetch value) fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(CancelRouteEventFetch value)? fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(CancelRouteEventFetch value)? fetch,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;

  @JsonKey(ignore: true)
  $CancelRouteEventCopyWith<CancelRouteEvent> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $CancelRouteEventCopyWith<$Res> {
  factory $CancelRouteEventCopyWith(
          CancelRouteEvent value, $Res Function(CancelRouteEvent) then) =
      _$CancelRouteEventCopyWithImpl<$Res, CancelRouteEvent>;
  @useResult
  $Res call({int routeId, CancelRouteBody cancelBody});

  $CancelRouteBodyCopyWith<$Res> get cancelBody;
}

/// @nodoc
class _$CancelRouteEventCopyWithImpl<$Res, $Val extends CancelRouteEvent>
    implements $CancelRouteEventCopyWith<$Res> {
  _$CancelRouteEventCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? routeId = null,
    Object? cancelBody = null,
  }) {
    return _then(_value.copyWith(
      routeId: null == routeId
          ? _value.routeId
          : routeId // ignore: cast_nullable_to_non_nullable
              as int,
      cancelBody: null == cancelBody
          ? _value.cancelBody
          : cancelBody // ignore: cast_nullable_to_non_nullable
              as CancelRouteBody,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $CancelRouteBodyCopyWith<$Res> get cancelBody {
    return $CancelRouteBodyCopyWith<$Res>(_value.cancelBody, (value) {
      return _then(_value.copyWith(cancelBody: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$CancelRouteEventFetchImplCopyWith<$Res>
    implements $CancelRouteEventCopyWith<$Res> {
  factory _$$CancelRouteEventFetchImplCopyWith(
          _$CancelRouteEventFetchImpl value,
          $Res Function(_$CancelRouteEventFetchImpl) then) =
      __$$CancelRouteEventFetchImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({int routeId, CancelRouteBody cancelBody});

  @override
  $CancelRouteBodyCopyWith<$Res> get cancelBody;
}

/// @nodoc
class __$$CancelRouteEventFetchImplCopyWithImpl<$Res>
    extends _$CancelRouteEventCopyWithImpl<$Res, _$CancelRouteEventFetchImpl>
    implements _$$CancelRouteEventFetchImplCopyWith<$Res> {
  __$$CancelRouteEventFetchImplCopyWithImpl(_$CancelRouteEventFetchImpl _value,
      $Res Function(_$CancelRouteEventFetchImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? routeId = null,
    Object? cancelBody = null,
  }) {
    return _then(_$CancelRouteEventFetchImpl(
      routeId: null == routeId
          ? _value.routeId
          : routeId // ignore: cast_nullable_to_non_nullable
              as int,
      cancelBody: null == cancelBody
          ? _value.cancelBody
          : cancelBody // ignore: cast_nullable_to_non_nullable
              as CancelRouteBody,
    ));
  }
}

/// @nodoc

class _$CancelRouteEventFetchImpl implements CancelRouteEventFetch {
  const _$CancelRouteEventFetchImpl(
      {required this.routeId, required this.cancelBody});

  @override
  final int routeId;
  @override
  final CancelRouteBody cancelBody;

  @override
  String toString() {
    return 'CancelRouteEvent.fetch(routeId: $routeId, cancelBody: $cancelBody)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$CancelRouteEventFetchImpl &&
            (identical(other.routeId, routeId) || other.routeId == routeId) &&
            (identical(other.cancelBody, cancelBody) ||
                other.cancelBody == cancelBody));
  }

  @override
  int get hashCode => Object.hash(runtimeType, routeId, cancelBody);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$CancelRouteEventFetchImplCopyWith<_$CancelRouteEventFetchImpl>
      get copyWith => __$$CancelRouteEventFetchImplCopyWithImpl<
          _$CancelRouteEventFetchImpl>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(int routeId, CancelRouteBody cancelBody) fetch,
  }) {
    return fetch(routeId, cancelBody);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(int routeId, CancelRouteBody cancelBody)? fetch,
  }) {
    return fetch?.call(routeId, cancelBody);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(int routeId, CancelRouteBody cancelBody)? fetch,
    required TResult orElse(),
  }) {
    if (fetch != null) {
      return fetch(routeId, cancelBody);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(CancelRouteEventFetch value) fetch,
  }) {
    return fetch(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(CancelRouteEventFetch value)? fetch,
  }) {
    return fetch?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(CancelRouteEventFetch value)? fetch,
    required TResult orElse(),
  }) {
    if (fetch != null) {
      return fetch(this);
    }
    return orElse();
  }
}

abstract class CancelRouteEventFetch implements CancelRouteEvent {
  const factory CancelRouteEventFetch(
      {required final int routeId,
      required final CancelRouteBody cancelBody}) = _$CancelRouteEventFetchImpl;

  @override
  int get routeId;
  @override
  CancelRouteBody get cancelBody;
  @override
  @JsonKey(ignore: true)
  _$$CancelRouteEventFetchImplCopyWith<_$CancelRouteEventFetchImpl>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
mixin _$CancelRouteState {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() loading,
    required TResult Function() loaded,
    required TResult Function() error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? loading,
    TResult? Function()? loaded,
    TResult? Function()? error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? loading,
    TResult Function()? loaded,
    TResult Function()? error,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(CancelRouteStateLoading value) loading,
    required TResult Function(CancelRouteStateLoaded value) loaded,
    required TResult Function(CancelRouteStateError value) error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(CancelRouteStateLoading value)? loading,
    TResult? Function(CancelRouteStateLoaded value)? loaded,
    TResult? Function(CancelRouteStateError value)? error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(CancelRouteStateLoading value)? loading,
    TResult Function(CancelRouteStateLoaded value)? loaded,
    TResult Function(CancelRouteStateError value)? error,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $CancelRouteStateCopyWith<$Res> {
  factory $CancelRouteStateCopyWith(
          CancelRouteState value, $Res Function(CancelRouteState) then) =
      _$CancelRouteStateCopyWithImpl<$Res, CancelRouteState>;
}

/// @nodoc
class _$CancelRouteStateCopyWithImpl<$Res, $Val extends CancelRouteState>
    implements $CancelRouteStateCopyWith<$Res> {
  _$CancelRouteStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$CancelRouteStateLoadingImplCopyWith<$Res> {
  factory _$$CancelRouteStateLoadingImplCopyWith(
          _$CancelRouteStateLoadingImpl value,
          $Res Function(_$CancelRouteStateLoadingImpl) then) =
      __$$CancelRouteStateLoadingImplCopyWithImpl<$Res>;
}

/// @nodoc
class __$$CancelRouteStateLoadingImplCopyWithImpl<$Res>
    extends _$CancelRouteStateCopyWithImpl<$Res, _$CancelRouteStateLoadingImpl>
    implements _$$CancelRouteStateLoadingImplCopyWith<$Res> {
  __$$CancelRouteStateLoadingImplCopyWithImpl(
      _$CancelRouteStateLoadingImpl _value,
      $Res Function(_$CancelRouteStateLoadingImpl) _then)
      : super(_value, _then);
}

/// @nodoc

class _$CancelRouteStateLoadingImpl implements CancelRouteStateLoading {
  const _$CancelRouteStateLoadingImpl();

  @override
  String toString() {
    return 'CancelRouteState.loading()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$CancelRouteStateLoadingImpl);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() loading,
    required TResult Function() loaded,
    required TResult Function() error,
  }) {
    return loading();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? loading,
    TResult? Function()? loaded,
    TResult? Function()? error,
  }) {
    return loading?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? loading,
    TResult Function()? loaded,
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
    required TResult Function(CancelRouteStateLoading value) loading,
    required TResult Function(CancelRouteStateLoaded value) loaded,
    required TResult Function(CancelRouteStateError value) error,
  }) {
    return loading(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(CancelRouteStateLoading value)? loading,
    TResult? Function(CancelRouteStateLoaded value)? loaded,
    TResult? Function(CancelRouteStateError value)? error,
  }) {
    return loading?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(CancelRouteStateLoading value)? loading,
    TResult Function(CancelRouteStateLoaded value)? loaded,
    TResult Function(CancelRouteStateError value)? error,
    required TResult orElse(),
  }) {
    if (loading != null) {
      return loading(this);
    }
    return orElse();
  }
}

abstract class CancelRouteStateLoading implements CancelRouteState {
  const factory CancelRouteStateLoading() = _$CancelRouteStateLoadingImpl;
}

/// @nodoc
abstract class _$$CancelRouteStateLoadedImplCopyWith<$Res> {
  factory _$$CancelRouteStateLoadedImplCopyWith(
          _$CancelRouteStateLoadedImpl value,
          $Res Function(_$CancelRouteStateLoadedImpl) then) =
      __$$CancelRouteStateLoadedImplCopyWithImpl<$Res>;
}

/// @nodoc
class __$$CancelRouteStateLoadedImplCopyWithImpl<$Res>
    extends _$CancelRouteStateCopyWithImpl<$Res, _$CancelRouteStateLoadedImpl>
    implements _$$CancelRouteStateLoadedImplCopyWith<$Res> {
  __$$CancelRouteStateLoadedImplCopyWithImpl(
      _$CancelRouteStateLoadedImpl _value,
      $Res Function(_$CancelRouteStateLoadedImpl) _then)
      : super(_value, _then);
}

/// @nodoc

class _$CancelRouteStateLoadedImpl implements CancelRouteStateLoaded {
  const _$CancelRouteStateLoadedImpl();

  @override
  String toString() {
    return 'CancelRouteState.loaded()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$CancelRouteStateLoadedImpl);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() loading,
    required TResult Function() loaded,
    required TResult Function() error,
  }) {
    return loaded();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? loading,
    TResult? Function()? loaded,
    TResult? Function()? error,
  }) {
    return loaded?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? loading,
    TResult Function()? loaded,
    TResult Function()? error,
    required TResult orElse(),
  }) {
    if (loaded != null) {
      return loaded();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(CancelRouteStateLoading value) loading,
    required TResult Function(CancelRouteStateLoaded value) loaded,
    required TResult Function(CancelRouteStateError value) error,
  }) {
    return loaded(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(CancelRouteStateLoading value)? loading,
    TResult? Function(CancelRouteStateLoaded value)? loaded,
    TResult? Function(CancelRouteStateError value)? error,
  }) {
    return loaded?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(CancelRouteStateLoading value)? loading,
    TResult Function(CancelRouteStateLoaded value)? loaded,
    TResult Function(CancelRouteStateError value)? error,
    required TResult orElse(),
  }) {
    if (loaded != null) {
      return loaded(this);
    }
    return orElse();
  }
}

abstract class CancelRouteStateLoaded implements CancelRouteState {
  const factory CancelRouteStateLoaded() = _$CancelRouteStateLoadedImpl;
}

/// @nodoc
abstract class _$$CancelRouteStateErrorImplCopyWith<$Res> {
  factory _$$CancelRouteStateErrorImplCopyWith(
          _$CancelRouteStateErrorImpl value,
          $Res Function(_$CancelRouteStateErrorImpl) then) =
      __$$CancelRouteStateErrorImplCopyWithImpl<$Res>;
}

/// @nodoc
class __$$CancelRouteStateErrorImplCopyWithImpl<$Res>
    extends _$CancelRouteStateCopyWithImpl<$Res, _$CancelRouteStateErrorImpl>
    implements _$$CancelRouteStateErrorImplCopyWith<$Res> {
  __$$CancelRouteStateErrorImplCopyWithImpl(_$CancelRouteStateErrorImpl _value,
      $Res Function(_$CancelRouteStateErrorImpl) _then)
      : super(_value, _then);
}

/// @nodoc

class _$CancelRouteStateErrorImpl implements CancelRouteStateError {
  const _$CancelRouteStateErrorImpl();

  @override
  String toString() {
    return 'CancelRouteState.error()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$CancelRouteStateErrorImpl);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() loading,
    required TResult Function() loaded,
    required TResult Function() error,
  }) {
    return error();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? loading,
    TResult? Function()? loaded,
    TResult? Function()? error,
  }) {
    return error?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? loading,
    TResult Function()? loaded,
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
    required TResult Function(CancelRouteStateLoading value) loading,
    required TResult Function(CancelRouteStateLoaded value) loaded,
    required TResult Function(CancelRouteStateError value) error,
  }) {
    return error(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(CancelRouteStateLoading value)? loading,
    TResult? Function(CancelRouteStateLoaded value)? loaded,
    TResult? Function(CancelRouteStateError value)? error,
  }) {
    return error?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(CancelRouteStateLoading value)? loading,
    TResult Function(CancelRouteStateLoaded value)? loaded,
    TResult Function(CancelRouteStateError value)? error,
    required TResult orElse(),
  }) {
    if (error != null) {
      return error(this);
    }
    return orElse();
  }
}

abstract class CancelRouteStateError implements CancelRouteState {
  const factory CancelRouteStateError() = _$CancelRouteStateErrorImpl;
}
