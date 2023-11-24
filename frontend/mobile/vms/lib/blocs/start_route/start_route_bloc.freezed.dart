// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'start_route_bloc.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$StartRouteEvent {
  int get routeId => throw _privateConstructorUsedError;
  StartRouteBody get startBody => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(int routeId, StartRouteBody startBody) fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(int routeId, StartRouteBody startBody)? fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(int routeId, StartRouteBody startBody)? fetch,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(StartRouteEventFetch value) fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(StartRouteEventFetch value)? fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(StartRouteEventFetch value)? fetch,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;

  @JsonKey(ignore: true)
  $StartRouteEventCopyWith<StartRouteEvent> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $StartRouteEventCopyWith<$Res> {
  factory $StartRouteEventCopyWith(
          StartRouteEvent value, $Res Function(StartRouteEvent) then) =
      _$StartRouteEventCopyWithImpl<$Res, StartRouteEvent>;
  @useResult
  $Res call({int routeId, StartRouteBody startBody});

  $StartRouteBodyCopyWith<$Res> get startBody;
}

/// @nodoc
class _$StartRouteEventCopyWithImpl<$Res, $Val extends StartRouteEvent>
    implements $StartRouteEventCopyWith<$Res> {
  _$StartRouteEventCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? routeId = null,
    Object? startBody = null,
  }) {
    return _then(_value.copyWith(
      routeId: null == routeId
          ? _value.routeId
          : routeId // ignore: cast_nullable_to_non_nullable
              as int,
      startBody: null == startBody
          ? _value.startBody
          : startBody // ignore: cast_nullable_to_non_nullable
              as StartRouteBody,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $StartRouteBodyCopyWith<$Res> get startBody {
    return $StartRouteBodyCopyWith<$Res>(_value.startBody, (value) {
      return _then(_value.copyWith(startBody: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$StartRouteEventFetchImplCopyWith<$Res>
    implements $StartRouteEventCopyWith<$Res> {
  factory _$$StartRouteEventFetchImplCopyWith(_$StartRouteEventFetchImpl value,
          $Res Function(_$StartRouteEventFetchImpl) then) =
      __$$StartRouteEventFetchImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({int routeId, StartRouteBody startBody});

  @override
  $StartRouteBodyCopyWith<$Res> get startBody;
}

/// @nodoc
class __$$StartRouteEventFetchImplCopyWithImpl<$Res>
    extends _$StartRouteEventCopyWithImpl<$Res, _$StartRouteEventFetchImpl>
    implements _$$StartRouteEventFetchImplCopyWith<$Res> {
  __$$StartRouteEventFetchImplCopyWithImpl(_$StartRouteEventFetchImpl _value,
      $Res Function(_$StartRouteEventFetchImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? routeId = null,
    Object? startBody = null,
  }) {
    return _then(_$StartRouteEventFetchImpl(
      routeId: null == routeId
          ? _value.routeId
          : routeId // ignore: cast_nullable_to_non_nullable
              as int,
      startBody: null == startBody
          ? _value.startBody
          : startBody // ignore: cast_nullable_to_non_nullable
              as StartRouteBody,
    ));
  }
}

/// @nodoc

class _$StartRouteEventFetchImpl implements StartRouteEventFetch {
  const _$StartRouteEventFetchImpl(
      {required this.routeId, required this.startBody});

  @override
  final int routeId;
  @override
  final StartRouteBody startBody;

  @override
  String toString() {
    return 'StartRouteEvent.fetch(routeId: $routeId, startBody: $startBody)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$StartRouteEventFetchImpl &&
            (identical(other.routeId, routeId) || other.routeId == routeId) &&
            (identical(other.startBody, startBody) ||
                other.startBody == startBody));
  }

  @override
  int get hashCode => Object.hash(runtimeType, routeId, startBody);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$StartRouteEventFetchImplCopyWith<_$StartRouteEventFetchImpl>
      get copyWith =>
          __$$StartRouteEventFetchImplCopyWithImpl<_$StartRouteEventFetchImpl>(
              this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(int routeId, StartRouteBody startBody) fetch,
  }) {
    return fetch(routeId, startBody);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(int routeId, StartRouteBody startBody)? fetch,
  }) {
    return fetch?.call(routeId, startBody);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(int routeId, StartRouteBody startBody)? fetch,
    required TResult orElse(),
  }) {
    if (fetch != null) {
      return fetch(routeId, startBody);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(StartRouteEventFetch value) fetch,
  }) {
    return fetch(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(StartRouteEventFetch value)? fetch,
  }) {
    return fetch?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(StartRouteEventFetch value)? fetch,
    required TResult orElse(),
  }) {
    if (fetch != null) {
      return fetch(this);
    }
    return orElse();
  }
}

abstract class StartRouteEventFetch implements StartRouteEvent {
  const factory StartRouteEventFetch(
      {required final int routeId,
      required final StartRouteBody startBody}) = _$StartRouteEventFetchImpl;

  @override
  int get routeId;
  @override
  StartRouteBody get startBody;
  @override
  @JsonKey(ignore: true)
  _$$StartRouteEventFetchImplCopyWith<_$StartRouteEventFetchImpl>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
mixin _$StartRouteState {
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
    required TResult Function(StartRouteStateLoading value) loading,
    required TResult Function(StartRouteStateLoaded value) loaded,
    required TResult Function(StartRouteStateError value) error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(StartRouteStateLoading value)? loading,
    TResult? Function(StartRouteStateLoaded value)? loaded,
    TResult? Function(StartRouteStateError value)? error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(StartRouteStateLoading value)? loading,
    TResult Function(StartRouteStateLoaded value)? loaded,
    TResult Function(StartRouteStateError value)? error,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $StartRouteStateCopyWith<$Res> {
  factory $StartRouteStateCopyWith(
          StartRouteState value, $Res Function(StartRouteState) then) =
      _$StartRouteStateCopyWithImpl<$Res, StartRouteState>;
}

/// @nodoc
class _$StartRouteStateCopyWithImpl<$Res, $Val extends StartRouteState>
    implements $StartRouteStateCopyWith<$Res> {
  _$StartRouteStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$StartRouteStateLoadingImplCopyWith<$Res> {
  factory _$$StartRouteStateLoadingImplCopyWith(
          _$StartRouteStateLoadingImpl value,
          $Res Function(_$StartRouteStateLoadingImpl) then) =
      __$$StartRouteStateLoadingImplCopyWithImpl<$Res>;
}

/// @nodoc
class __$$StartRouteStateLoadingImplCopyWithImpl<$Res>
    extends _$StartRouteStateCopyWithImpl<$Res, _$StartRouteStateLoadingImpl>
    implements _$$StartRouteStateLoadingImplCopyWith<$Res> {
  __$$StartRouteStateLoadingImplCopyWithImpl(
      _$StartRouteStateLoadingImpl _value,
      $Res Function(_$StartRouteStateLoadingImpl) _then)
      : super(_value, _then);
}

/// @nodoc

class _$StartRouteStateLoadingImpl implements StartRouteStateLoading {
  const _$StartRouteStateLoadingImpl();

  @override
  String toString() {
    return 'StartRouteState.loading()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$StartRouteStateLoadingImpl);
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
    required TResult Function(StartRouteStateLoading value) loading,
    required TResult Function(StartRouteStateLoaded value) loaded,
    required TResult Function(StartRouteStateError value) error,
  }) {
    return loading(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(StartRouteStateLoading value)? loading,
    TResult? Function(StartRouteStateLoaded value)? loaded,
    TResult? Function(StartRouteStateError value)? error,
  }) {
    return loading?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(StartRouteStateLoading value)? loading,
    TResult Function(StartRouteStateLoaded value)? loaded,
    TResult Function(StartRouteStateError value)? error,
    required TResult orElse(),
  }) {
    if (loading != null) {
      return loading(this);
    }
    return orElse();
  }
}

abstract class StartRouteStateLoading implements StartRouteState {
  const factory StartRouteStateLoading() = _$StartRouteStateLoadingImpl;
}

/// @nodoc
abstract class _$$StartRouteStateLoadedImplCopyWith<$Res> {
  factory _$$StartRouteStateLoadedImplCopyWith(
          _$StartRouteStateLoadedImpl value,
          $Res Function(_$StartRouteStateLoadedImpl) then) =
      __$$StartRouteStateLoadedImplCopyWithImpl<$Res>;
}

/// @nodoc
class __$$StartRouteStateLoadedImplCopyWithImpl<$Res>
    extends _$StartRouteStateCopyWithImpl<$Res, _$StartRouteStateLoadedImpl>
    implements _$$StartRouteStateLoadedImplCopyWith<$Res> {
  __$$StartRouteStateLoadedImplCopyWithImpl(_$StartRouteStateLoadedImpl _value,
      $Res Function(_$StartRouteStateLoadedImpl) _then)
      : super(_value, _then);
}

/// @nodoc

class _$StartRouteStateLoadedImpl implements StartRouteStateLoaded {
  const _$StartRouteStateLoadedImpl();

  @override
  String toString() {
    return 'StartRouteState.loaded()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$StartRouteStateLoadedImpl);
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
    required TResult Function(StartRouteStateLoading value) loading,
    required TResult Function(StartRouteStateLoaded value) loaded,
    required TResult Function(StartRouteStateError value) error,
  }) {
    return loaded(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(StartRouteStateLoading value)? loading,
    TResult? Function(StartRouteStateLoaded value)? loaded,
    TResult? Function(StartRouteStateError value)? error,
  }) {
    return loaded?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(StartRouteStateLoading value)? loading,
    TResult Function(StartRouteStateLoaded value)? loaded,
    TResult Function(StartRouteStateError value)? error,
    required TResult orElse(),
  }) {
    if (loaded != null) {
      return loaded(this);
    }
    return orElse();
  }
}

abstract class StartRouteStateLoaded implements StartRouteState {
  const factory StartRouteStateLoaded() = _$StartRouteStateLoadedImpl;
}

/// @nodoc
abstract class _$$StartRouteStateErrorImplCopyWith<$Res> {
  factory _$$StartRouteStateErrorImplCopyWith(_$StartRouteStateErrorImpl value,
          $Res Function(_$StartRouteStateErrorImpl) then) =
      __$$StartRouteStateErrorImplCopyWithImpl<$Res>;
}

/// @nodoc
class __$$StartRouteStateErrorImplCopyWithImpl<$Res>
    extends _$StartRouteStateCopyWithImpl<$Res, _$StartRouteStateErrorImpl>
    implements _$$StartRouteStateErrorImplCopyWith<$Res> {
  __$$StartRouteStateErrorImplCopyWithImpl(_$StartRouteStateErrorImpl _value,
      $Res Function(_$StartRouteStateErrorImpl) _then)
      : super(_value, _then);
}

/// @nodoc

class _$StartRouteStateErrorImpl implements StartRouteStateError {
  const _$StartRouteStateErrorImpl();

  @override
  String toString() {
    return 'StartRouteState.error()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$StartRouteStateErrorImpl);
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
    required TResult Function(StartRouteStateLoading value) loading,
    required TResult Function(StartRouteStateLoaded value) loaded,
    required TResult Function(StartRouteStateError value) error,
  }) {
    return error(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(StartRouteStateLoading value)? loading,
    TResult? Function(StartRouteStateLoaded value)? loaded,
    TResult? Function(StartRouteStateError value)? error,
  }) {
    return error?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(StartRouteStateLoading value)? loading,
    TResult Function(StartRouteStateLoaded value)? loaded,
    TResult Function(StartRouteStateError value)? error,
    required TResult orElse(),
  }) {
    if (error != null) {
      return error(this);
    }
    return orElse();
  }
}

abstract class StartRouteStateError implements StartRouteState {
  const factory StartRouteStateError() = _$StartRouteStateErrorImpl;
}
