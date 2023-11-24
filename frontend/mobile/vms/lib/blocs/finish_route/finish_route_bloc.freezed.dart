// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'finish_route_bloc.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$FinishRouteEvent {
  int get routeId => throw _privateConstructorUsedError;
  FinishRouteBody get finishBody => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(int routeId, FinishRouteBody finishBody) fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(int routeId, FinishRouteBody finishBody)? fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(int routeId, FinishRouteBody finishBody)? fetch,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(FinishRouteEventFetch value) fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(FinishRouteEventFetch value)? fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(FinishRouteEventFetch value)? fetch,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;

  @JsonKey(ignore: true)
  $FinishRouteEventCopyWith<FinishRouteEvent> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $FinishRouteEventCopyWith<$Res> {
  factory $FinishRouteEventCopyWith(
          FinishRouteEvent value, $Res Function(FinishRouteEvent) then) =
      _$FinishRouteEventCopyWithImpl<$Res, FinishRouteEvent>;
  @useResult
  $Res call({int routeId, FinishRouteBody finishBody});

  $FinishRouteBodyCopyWith<$Res> get finishBody;
}

/// @nodoc
class _$FinishRouteEventCopyWithImpl<$Res, $Val extends FinishRouteEvent>
    implements $FinishRouteEventCopyWith<$Res> {
  _$FinishRouteEventCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? routeId = null,
    Object? finishBody = null,
  }) {
    return _then(_value.copyWith(
      routeId: null == routeId
          ? _value.routeId
          : routeId // ignore: cast_nullable_to_non_nullable
              as int,
      finishBody: null == finishBody
          ? _value.finishBody
          : finishBody // ignore: cast_nullable_to_non_nullable
              as FinishRouteBody,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $FinishRouteBodyCopyWith<$Res> get finishBody {
    return $FinishRouteBodyCopyWith<$Res>(_value.finishBody, (value) {
      return _then(_value.copyWith(finishBody: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$FinishRouteEventFetchImplCopyWith<$Res>
    implements $FinishRouteEventCopyWith<$Res> {
  factory _$$FinishRouteEventFetchImplCopyWith(
          _$FinishRouteEventFetchImpl value,
          $Res Function(_$FinishRouteEventFetchImpl) then) =
      __$$FinishRouteEventFetchImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({int routeId, FinishRouteBody finishBody});

  @override
  $FinishRouteBodyCopyWith<$Res> get finishBody;
}

/// @nodoc
class __$$FinishRouteEventFetchImplCopyWithImpl<$Res>
    extends _$FinishRouteEventCopyWithImpl<$Res, _$FinishRouteEventFetchImpl>
    implements _$$FinishRouteEventFetchImplCopyWith<$Res> {
  __$$FinishRouteEventFetchImplCopyWithImpl(_$FinishRouteEventFetchImpl _value,
      $Res Function(_$FinishRouteEventFetchImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? routeId = null,
    Object? finishBody = null,
  }) {
    return _then(_$FinishRouteEventFetchImpl(
      routeId: null == routeId
          ? _value.routeId
          : routeId // ignore: cast_nullable_to_non_nullable
              as int,
      finishBody: null == finishBody
          ? _value.finishBody
          : finishBody // ignore: cast_nullable_to_non_nullable
              as FinishRouteBody,
    ));
  }
}

/// @nodoc

class _$FinishRouteEventFetchImpl implements FinishRouteEventFetch {
  const _$FinishRouteEventFetchImpl(
      {required this.routeId, required this.finishBody});

  @override
  final int routeId;
  @override
  final FinishRouteBody finishBody;

  @override
  String toString() {
    return 'FinishRouteEvent.fetch(routeId: $routeId, finishBody: $finishBody)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$FinishRouteEventFetchImpl &&
            (identical(other.routeId, routeId) || other.routeId == routeId) &&
            (identical(other.finishBody, finishBody) ||
                other.finishBody == finishBody));
  }

  @override
  int get hashCode => Object.hash(runtimeType, routeId, finishBody);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$FinishRouteEventFetchImplCopyWith<_$FinishRouteEventFetchImpl>
      get copyWith => __$$FinishRouteEventFetchImplCopyWithImpl<
          _$FinishRouteEventFetchImpl>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(int routeId, FinishRouteBody finishBody) fetch,
  }) {
    return fetch(routeId, finishBody);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(int routeId, FinishRouteBody finishBody)? fetch,
  }) {
    return fetch?.call(routeId, finishBody);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(int routeId, FinishRouteBody finishBody)? fetch,
    required TResult orElse(),
  }) {
    if (fetch != null) {
      return fetch(routeId, finishBody);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(FinishRouteEventFetch value) fetch,
  }) {
    return fetch(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(FinishRouteEventFetch value)? fetch,
  }) {
    return fetch?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(FinishRouteEventFetch value)? fetch,
    required TResult orElse(),
  }) {
    if (fetch != null) {
      return fetch(this);
    }
    return orElse();
  }
}

abstract class FinishRouteEventFetch implements FinishRouteEvent {
  const factory FinishRouteEventFetch(
      {required final int routeId,
      required final FinishRouteBody finishBody}) = _$FinishRouteEventFetchImpl;

  @override
  int get routeId;
  @override
  FinishRouteBody get finishBody;
  @override
  @JsonKey(ignore: true)
  _$$FinishRouteEventFetchImplCopyWith<_$FinishRouteEventFetchImpl>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
mixin _$FinishRouteState {
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
    required TResult Function(FinishRouteStateLoading value) loading,
    required TResult Function(FinishRouteStateLoaded value) loaded,
    required TResult Function(FinishRouteStateError value) error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(FinishRouteStateLoading value)? loading,
    TResult? Function(FinishRouteStateLoaded value)? loaded,
    TResult? Function(FinishRouteStateError value)? error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(FinishRouteStateLoading value)? loading,
    TResult Function(FinishRouteStateLoaded value)? loaded,
    TResult Function(FinishRouteStateError value)? error,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $FinishRouteStateCopyWith<$Res> {
  factory $FinishRouteStateCopyWith(
          FinishRouteState value, $Res Function(FinishRouteState) then) =
      _$FinishRouteStateCopyWithImpl<$Res, FinishRouteState>;
}

/// @nodoc
class _$FinishRouteStateCopyWithImpl<$Res, $Val extends FinishRouteState>
    implements $FinishRouteStateCopyWith<$Res> {
  _$FinishRouteStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$FinishRouteStateLoadingImplCopyWith<$Res> {
  factory _$$FinishRouteStateLoadingImplCopyWith(
          _$FinishRouteStateLoadingImpl value,
          $Res Function(_$FinishRouteStateLoadingImpl) then) =
      __$$FinishRouteStateLoadingImplCopyWithImpl<$Res>;
}

/// @nodoc
class __$$FinishRouteStateLoadingImplCopyWithImpl<$Res>
    extends _$FinishRouteStateCopyWithImpl<$Res, _$FinishRouteStateLoadingImpl>
    implements _$$FinishRouteStateLoadingImplCopyWith<$Res> {
  __$$FinishRouteStateLoadingImplCopyWithImpl(
      _$FinishRouteStateLoadingImpl _value,
      $Res Function(_$FinishRouteStateLoadingImpl) _then)
      : super(_value, _then);
}

/// @nodoc

class _$FinishRouteStateLoadingImpl implements FinishRouteStateLoading {
  const _$FinishRouteStateLoadingImpl();

  @override
  String toString() {
    return 'FinishRouteState.loading()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$FinishRouteStateLoadingImpl);
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
    required TResult Function(FinishRouteStateLoading value) loading,
    required TResult Function(FinishRouteStateLoaded value) loaded,
    required TResult Function(FinishRouteStateError value) error,
  }) {
    return loading(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(FinishRouteStateLoading value)? loading,
    TResult? Function(FinishRouteStateLoaded value)? loaded,
    TResult? Function(FinishRouteStateError value)? error,
  }) {
    return loading?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(FinishRouteStateLoading value)? loading,
    TResult Function(FinishRouteStateLoaded value)? loaded,
    TResult Function(FinishRouteStateError value)? error,
    required TResult orElse(),
  }) {
    if (loading != null) {
      return loading(this);
    }
    return orElse();
  }
}

abstract class FinishRouteStateLoading implements FinishRouteState {
  const factory FinishRouteStateLoading() = _$FinishRouteStateLoadingImpl;
}

/// @nodoc
abstract class _$$FinishRouteStateLoadedImplCopyWith<$Res> {
  factory _$$FinishRouteStateLoadedImplCopyWith(
          _$FinishRouteStateLoadedImpl value,
          $Res Function(_$FinishRouteStateLoadedImpl) then) =
      __$$FinishRouteStateLoadedImplCopyWithImpl<$Res>;
}

/// @nodoc
class __$$FinishRouteStateLoadedImplCopyWithImpl<$Res>
    extends _$FinishRouteStateCopyWithImpl<$Res, _$FinishRouteStateLoadedImpl>
    implements _$$FinishRouteStateLoadedImplCopyWith<$Res> {
  __$$FinishRouteStateLoadedImplCopyWithImpl(
      _$FinishRouteStateLoadedImpl _value,
      $Res Function(_$FinishRouteStateLoadedImpl) _then)
      : super(_value, _then);
}

/// @nodoc

class _$FinishRouteStateLoadedImpl implements FinishRouteStateLoaded {
  const _$FinishRouteStateLoadedImpl();

  @override
  String toString() {
    return 'FinishRouteState.loaded()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$FinishRouteStateLoadedImpl);
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
    required TResult Function(FinishRouteStateLoading value) loading,
    required TResult Function(FinishRouteStateLoaded value) loaded,
    required TResult Function(FinishRouteStateError value) error,
  }) {
    return loaded(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(FinishRouteStateLoading value)? loading,
    TResult? Function(FinishRouteStateLoaded value)? loaded,
    TResult? Function(FinishRouteStateError value)? error,
  }) {
    return loaded?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(FinishRouteStateLoading value)? loading,
    TResult Function(FinishRouteStateLoaded value)? loaded,
    TResult Function(FinishRouteStateError value)? error,
    required TResult orElse(),
  }) {
    if (loaded != null) {
      return loaded(this);
    }
    return orElse();
  }
}

abstract class FinishRouteStateLoaded implements FinishRouteState {
  const factory FinishRouteStateLoaded() = _$FinishRouteStateLoadedImpl;
}

/// @nodoc
abstract class _$$FinishRouteStateErrorImplCopyWith<$Res> {
  factory _$$FinishRouteStateErrorImplCopyWith(
          _$FinishRouteStateErrorImpl value,
          $Res Function(_$FinishRouteStateErrorImpl) then) =
      __$$FinishRouteStateErrorImplCopyWithImpl<$Res>;
}

/// @nodoc
class __$$FinishRouteStateErrorImplCopyWithImpl<$Res>
    extends _$FinishRouteStateCopyWithImpl<$Res, _$FinishRouteStateErrorImpl>
    implements _$$FinishRouteStateErrorImplCopyWith<$Res> {
  __$$FinishRouteStateErrorImplCopyWithImpl(_$FinishRouteStateErrorImpl _value,
      $Res Function(_$FinishRouteStateErrorImpl) _then)
      : super(_value, _then);
}

/// @nodoc

class _$FinishRouteStateErrorImpl implements FinishRouteStateError {
  const _$FinishRouteStateErrorImpl();

  @override
  String toString() {
    return 'FinishRouteState.error()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$FinishRouteStateErrorImpl);
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
    required TResult Function(FinishRouteStateLoading value) loading,
    required TResult Function(FinishRouteStateLoaded value) loaded,
    required TResult Function(FinishRouteStateError value) error,
  }) {
    return error(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(FinishRouteStateLoading value)? loading,
    TResult? Function(FinishRouteStateLoaded value)? loaded,
    TResult? Function(FinishRouteStateError value)? error,
  }) {
    return error?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(FinishRouteStateLoading value)? loading,
    TResult Function(FinishRouteStateLoaded value)? loaded,
    TResult Function(FinishRouteStateError value)? error,
    required TResult orElse(),
  }) {
    if (error != null) {
      return error(this);
    }
    return orElse();
  }
}

abstract class FinishRouteStateError implements FinishRouteState {
  const factory FinishRouteStateError() = _$FinishRouteStateErrorImpl;
}
