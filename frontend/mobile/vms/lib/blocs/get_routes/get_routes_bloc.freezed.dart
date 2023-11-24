// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'get_routes_bloc.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$GetRoutesEvent {
  int get userId => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(int userId) fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(int userId)? fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(int userId)? fetch,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(GetRoutesEventFetch value) fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(GetRoutesEventFetch value)? fetch,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(GetRoutesEventFetch value)? fetch,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;

  @JsonKey(ignore: true)
  $GetRoutesEventCopyWith<GetRoutesEvent> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $GetRoutesEventCopyWith<$Res> {
  factory $GetRoutesEventCopyWith(
          GetRoutesEvent value, $Res Function(GetRoutesEvent) then) =
      _$GetRoutesEventCopyWithImpl<$Res, GetRoutesEvent>;
  @useResult
  $Res call({int userId});
}

/// @nodoc
class _$GetRoutesEventCopyWithImpl<$Res, $Val extends GetRoutesEvent>
    implements $GetRoutesEventCopyWith<$Res> {
  _$GetRoutesEventCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? userId = null,
  }) {
    return _then(_value.copyWith(
      userId: null == userId
          ? _value.userId
          : userId // ignore: cast_nullable_to_non_nullable
              as int,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$GetRoutesEventFetchImplCopyWith<$Res>
    implements $GetRoutesEventCopyWith<$Res> {
  factory _$$GetRoutesEventFetchImplCopyWith(_$GetRoutesEventFetchImpl value,
          $Res Function(_$GetRoutesEventFetchImpl) then) =
      __$$GetRoutesEventFetchImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({int userId});
}

/// @nodoc
class __$$GetRoutesEventFetchImplCopyWithImpl<$Res>
    extends _$GetRoutesEventCopyWithImpl<$Res, _$GetRoutesEventFetchImpl>
    implements _$$GetRoutesEventFetchImplCopyWith<$Res> {
  __$$GetRoutesEventFetchImplCopyWithImpl(_$GetRoutesEventFetchImpl _value,
      $Res Function(_$GetRoutesEventFetchImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? userId = null,
  }) {
    return _then(_$GetRoutesEventFetchImpl(
      userId: null == userId
          ? _value.userId
          : userId // ignore: cast_nullable_to_non_nullable
              as int,
    ));
  }
}

/// @nodoc

class _$GetRoutesEventFetchImpl implements GetRoutesEventFetch {
  const _$GetRoutesEventFetchImpl({required this.userId});

  @override
  final int userId;

  @override
  String toString() {
    return 'GetRoutesEvent.fetch(userId: $userId)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$GetRoutesEventFetchImpl &&
            (identical(other.userId, userId) || other.userId == userId));
  }

  @override
  int get hashCode => Object.hash(runtimeType, userId);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$GetRoutesEventFetchImplCopyWith<_$GetRoutesEventFetchImpl> get copyWith =>
      __$$GetRoutesEventFetchImplCopyWithImpl<_$GetRoutesEventFetchImpl>(
          this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(int userId) fetch,
  }) {
    return fetch(userId);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(int userId)? fetch,
  }) {
    return fetch?.call(userId);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(int userId)? fetch,
    required TResult orElse(),
  }) {
    if (fetch != null) {
      return fetch(userId);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(GetRoutesEventFetch value) fetch,
  }) {
    return fetch(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(GetRoutesEventFetch value)? fetch,
  }) {
    return fetch?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(GetRoutesEventFetch value)? fetch,
    required TResult orElse(),
  }) {
    if (fetch != null) {
      return fetch(this);
    }
    return orElse();
  }
}

abstract class GetRoutesEventFetch implements GetRoutesEvent {
  const factory GetRoutesEventFetch({required final int userId}) =
      _$GetRoutesEventFetchImpl;

  @override
  int get userId;
  @override
  @JsonKey(ignore: true)
  _$$GetRoutesEventFetchImplCopyWith<_$GetRoutesEventFetchImpl> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
mixin _$GetRoutesState {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() loading,
    required TResult Function(Routes routes) loaded,
    required TResult Function() error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? loading,
    TResult? Function(Routes routes)? loaded,
    TResult? Function()? error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? loading,
    TResult Function(Routes routes)? loaded,
    TResult Function()? error,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(GetRoutesStateLoading value) loading,
    required TResult Function(GetRoutesStateLoaded value) loaded,
    required TResult Function(GetRoutesStateError value) error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(GetRoutesStateLoading value)? loading,
    TResult? Function(GetRoutesStateLoaded value)? loaded,
    TResult? Function(GetRoutesStateError value)? error,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(GetRoutesStateLoading value)? loading,
    TResult Function(GetRoutesStateLoaded value)? loaded,
    TResult Function(GetRoutesStateError value)? error,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $GetRoutesStateCopyWith<$Res> {
  factory $GetRoutesStateCopyWith(
          GetRoutesState value, $Res Function(GetRoutesState) then) =
      _$GetRoutesStateCopyWithImpl<$Res, GetRoutesState>;
}

/// @nodoc
class _$GetRoutesStateCopyWithImpl<$Res, $Val extends GetRoutesState>
    implements $GetRoutesStateCopyWith<$Res> {
  _$GetRoutesStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$GetRoutesStateLoadingImplCopyWith<$Res> {
  factory _$$GetRoutesStateLoadingImplCopyWith(
          _$GetRoutesStateLoadingImpl value,
          $Res Function(_$GetRoutesStateLoadingImpl) then) =
      __$$GetRoutesStateLoadingImplCopyWithImpl<$Res>;
}

/// @nodoc
class __$$GetRoutesStateLoadingImplCopyWithImpl<$Res>
    extends _$GetRoutesStateCopyWithImpl<$Res, _$GetRoutesStateLoadingImpl>
    implements _$$GetRoutesStateLoadingImplCopyWith<$Res> {
  __$$GetRoutesStateLoadingImplCopyWithImpl(_$GetRoutesStateLoadingImpl _value,
      $Res Function(_$GetRoutesStateLoadingImpl) _then)
      : super(_value, _then);
}

/// @nodoc

class _$GetRoutesStateLoadingImpl implements GetRoutesStateLoading {
  const _$GetRoutesStateLoadingImpl();

  @override
  String toString() {
    return 'GetRoutesState.loading()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$GetRoutesStateLoadingImpl);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() loading,
    required TResult Function(Routes routes) loaded,
    required TResult Function() error,
  }) {
    return loading();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? loading,
    TResult? Function(Routes routes)? loaded,
    TResult? Function()? error,
  }) {
    return loading?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? loading,
    TResult Function(Routes routes)? loaded,
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
    required TResult Function(GetRoutesStateLoading value) loading,
    required TResult Function(GetRoutesStateLoaded value) loaded,
    required TResult Function(GetRoutesStateError value) error,
  }) {
    return loading(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(GetRoutesStateLoading value)? loading,
    TResult? Function(GetRoutesStateLoaded value)? loaded,
    TResult? Function(GetRoutesStateError value)? error,
  }) {
    return loading?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(GetRoutesStateLoading value)? loading,
    TResult Function(GetRoutesStateLoaded value)? loaded,
    TResult Function(GetRoutesStateError value)? error,
    required TResult orElse(),
  }) {
    if (loading != null) {
      return loading(this);
    }
    return orElse();
  }
}

abstract class GetRoutesStateLoading implements GetRoutesState {
  const factory GetRoutesStateLoading() = _$GetRoutesStateLoadingImpl;
}

/// @nodoc
abstract class _$$GetRoutesStateLoadedImplCopyWith<$Res> {
  factory _$$GetRoutesStateLoadedImplCopyWith(_$GetRoutesStateLoadedImpl value,
          $Res Function(_$GetRoutesStateLoadedImpl) then) =
      __$$GetRoutesStateLoadedImplCopyWithImpl<$Res>;
  @useResult
  $Res call({Routes routes});

  $RoutesCopyWith<$Res> get routes;
}

/// @nodoc
class __$$GetRoutesStateLoadedImplCopyWithImpl<$Res>
    extends _$GetRoutesStateCopyWithImpl<$Res, _$GetRoutesStateLoadedImpl>
    implements _$$GetRoutesStateLoadedImplCopyWith<$Res> {
  __$$GetRoutesStateLoadedImplCopyWithImpl(_$GetRoutesStateLoadedImpl _value,
      $Res Function(_$GetRoutesStateLoadedImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? routes = null,
  }) {
    return _then(_$GetRoutesStateLoadedImpl(
      routes: null == routes
          ? _value.routes
          : routes // ignore: cast_nullable_to_non_nullable
              as Routes,
    ));
  }

  @override
  @pragma('vm:prefer-inline')
  $RoutesCopyWith<$Res> get routes {
    return $RoutesCopyWith<$Res>(_value.routes, (value) {
      return _then(_value.copyWith(routes: value));
    });
  }
}

/// @nodoc

class _$GetRoutesStateLoadedImpl implements GetRoutesStateLoaded {
  const _$GetRoutesStateLoadedImpl({required this.routes});

  @override
  final Routes routes;

  @override
  String toString() {
    return 'GetRoutesState.loaded(routes: $routes)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$GetRoutesStateLoadedImpl &&
            (identical(other.routes, routes) || other.routes == routes));
  }

  @override
  int get hashCode => Object.hash(runtimeType, routes);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$GetRoutesStateLoadedImplCopyWith<_$GetRoutesStateLoadedImpl>
      get copyWith =>
          __$$GetRoutesStateLoadedImplCopyWithImpl<_$GetRoutesStateLoadedImpl>(
              this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() loading,
    required TResult Function(Routes routes) loaded,
    required TResult Function() error,
  }) {
    return loaded(routes);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? loading,
    TResult? Function(Routes routes)? loaded,
    TResult? Function()? error,
  }) {
    return loaded?.call(routes);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? loading,
    TResult Function(Routes routes)? loaded,
    TResult Function()? error,
    required TResult orElse(),
  }) {
    if (loaded != null) {
      return loaded(routes);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(GetRoutesStateLoading value) loading,
    required TResult Function(GetRoutesStateLoaded value) loaded,
    required TResult Function(GetRoutesStateError value) error,
  }) {
    return loaded(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(GetRoutesStateLoading value)? loading,
    TResult? Function(GetRoutesStateLoaded value)? loaded,
    TResult? Function(GetRoutesStateError value)? error,
  }) {
    return loaded?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(GetRoutesStateLoading value)? loading,
    TResult Function(GetRoutesStateLoaded value)? loaded,
    TResult Function(GetRoutesStateError value)? error,
    required TResult orElse(),
  }) {
    if (loaded != null) {
      return loaded(this);
    }
    return orElse();
  }
}

abstract class GetRoutesStateLoaded implements GetRoutesState {
  const factory GetRoutesStateLoaded({required final Routes routes}) =
      _$GetRoutesStateLoadedImpl;

  Routes get routes;
  @JsonKey(ignore: true)
  _$$GetRoutesStateLoadedImplCopyWith<_$GetRoutesStateLoadedImpl>
      get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$GetRoutesStateErrorImplCopyWith<$Res> {
  factory _$$GetRoutesStateErrorImplCopyWith(_$GetRoutesStateErrorImpl value,
          $Res Function(_$GetRoutesStateErrorImpl) then) =
      __$$GetRoutesStateErrorImplCopyWithImpl<$Res>;
}

/// @nodoc
class __$$GetRoutesStateErrorImplCopyWithImpl<$Res>
    extends _$GetRoutesStateCopyWithImpl<$Res, _$GetRoutesStateErrorImpl>
    implements _$$GetRoutesStateErrorImplCopyWith<$Res> {
  __$$GetRoutesStateErrorImplCopyWithImpl(_$GetRoutesStateErrorImpl _value,
      $Res Function(_$GetRoutesStateErrorImpl) _then)
      : super(_value, _then);
}

/// @nodoc

class _$GetRoutesStateErrorImpl implements GetRoutesStateError {
  const _$GetRoutesStateErrorImpl();

  @override
  String toString() {
    return 'GetRoutesState.error()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$GetRoutesStateErrorImpl);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() loading,
    required TResult Function(Routes routes) loaded,
    required TResult Function() error,
  }) {
    return error();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? loading,
    TResult? Function(Routes routes)? loaded,
    TResult? Function()? error,
  }) {
    return error?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? loading,
    TResult Function(Routes routes)? loaded,
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
    required TResult Function(GetRoutesStateLoading value) loading,
    required TResult Function(GetRoutesStateLoaded value) loaded,
    required TResult Function(GetRoutesStateError value) error,
  }) {
    return error(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(GetRoutesStateLoading value)? loading,
    TResult? Function(GetRoutesStateLoaded value)? loaded,
    TResult? Function(GetRoutesStateError value)? error,
  }) {
    return error?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(GetRoutesStateLoading value)? loading,
    TResult Function(GetRoutesStateLoaded value)? loaded,
    TResult Function(GetRoutesStateError value)? error,
    required TResult orElse(),
  }) {
    if (error != null) {
      return error(this);
    }
    return orElse();
  }
}

abstract class GetRoutesStateError implements GetRoutesState {
  const factory GetRoutesStateError() = _$GetRoutesStateErrorImpl;
}
