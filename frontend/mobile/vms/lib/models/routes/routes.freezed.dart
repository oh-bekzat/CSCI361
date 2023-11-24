// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'routes.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

Routes _$RoutesFromJson(Map<String, dynamic> json) {
  return _Routes.fromJson(json);
}

/// @nodoc
mixin _$Routes {
  List<Route> get routes => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $RoutesCopyWith<Routes> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $RoutesCopyWith<$Res> {
  factory $RoutesCopyWith(Routes value, $Res Function(Routes) then) =
      _$RoutesCopyWithImpl<$Res, Routes>;
  @useResult
  $Res call({List<Route> routes});
}

/// @nodoc
class _$RoutesCopyWithImpl<$Res, $Val extends Routes>
    implements $RoutesCopyWith<$Res> {
  _$RoutesCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? routes = null,
  }) {
    return _then(_value.copyWith(
      routes: null == routes
          ? _value.routes
          : routes // ignore: cast_nullable_to_non_nullable
              as List<Route>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$RoutesImplCopyWith<$Res> implements $RoutesCopyWith<$Res> {
  factory _$$RoutesImplCopyWith(
          _$RoutesImpl value, $Res Function(_$RoutesImpl) then) =
      __$$RoutesImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({List<Route> routes});
}

/// @nodoc
class __$$RoutesImplCopyWithImpl<$Res>
    extends _$RoutesCopyWithImpl<$Res, _$RoutesImpl>
    implements _$$RoutesImplCopyWith<$Res> {
  __$$RoutesImplCopyWithImpl(
      _$RoutesImpl _value, $Res Function(_$RoutesImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? routes = null,
  }) {
    return _then(_$RoutesImpl(
      routes: null == routes
          ? _value._routes
          : routes // ignore: cast_nullable_to_non_nullable
              as List<Route>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$RoutesImpl implements _Routes {
  const _$RoutesImpl({required final List<Route> routes}) : _routes = routes;

  factory _$RoutesImpl.fromJson(Map<String, dynamic> json) =>
      _$$RoutesImplFromJson(json);

  final List<Route> _routes;
  @override
  List<Route> get routes {
    if (_routes is EqualUnmodifiableListView) return _routes;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_routes);
  }

  @override
  String toString() {
    return 'Routes(routes: $routes)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$RoutesImpl &&
            const DeepCollectionEquality().equals(other._routes, _routes));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode =>
      Object.hash(runtimeType, const DeepCollectionEquality().hash(_routes));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$RoutesImplCopyWith<_$RoutesImpl> get copyWith =>
      __$$RoutesImplCopyWithImpl<_$RoutesImpl>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$RoutesImplToJson(
      this,
    );
  }
}

abstract class _Routes implements Routes {
  const factory _Routes({required final List<Route> routes}) = _$RoutesImpl;

  factory _Routes.fromJson(Map<String, dynamic> json) = _$RoutesImpl.fromJson;

  @override
  List<Route> get routes;
  @override
  @JsonKey(ignore: true)
  _$$RoutesImplCopyWith<_$RoutesImpl> get copyWith =>
      throw _privateConstructorUsedError;
}

Route _$RouteFromJson(Map<String, dynamic> json) {
  return _Route.fromJson(json);
}

/// @nodoc
mixin _$Route {
  @JsonKey(name: 'route_id')
  int get routeId => throw _privateConstructorUsedError;
  @JsonKey(name: 'client_id')
  int get clientId => throw _privateConstructorUsedError;
  @JsonKey(name: 'driver_id')
  int get driverId => throw _privateConstructorUsedError;
  @JsonKey(name: 'vehicle_id')
  String get vehicleId => throw _privateConstructorUsedError;
  @JsonKey(name: 'start_point')
  String get startPoint => throw _privateConstructorUsedError;
  @JsonKey(name: 'finish_point')
  String get finishPoint => throw _privateConstructorUsedError;
  int get distance => throw _privateConstructorUsedError;
  @JsonKey(name: 'start_time')
  String? get startTime => throw _privateConstructorUsedError;
  @JsonKey(name: 'finish_time')
  String? get finishTime => throw _privateConstructorUsedError;
  String get status => throw _privateConstructorUsedError;
  @JsonKey(name: 'requested_time')
  String get requestedTime => throw _privateConstructorUsedError;
  @JsonKey(name: 'requested_date')
  String get requestedDate => throw _privateConstructorUsedError;
  double? get rate => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $RouteCopyWith<Route> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $RouteCopyWith<$Res> {
  factory $RouteCopyWith(Route value, $Res Function(Route) then) =
      _$RouteCopyWithImpl<$Res, Route>;
  @useResult
  $Res call(
      {@JsonKey(name: 'route_id') int routeId,
      @JsonKey(name: 'client_id') int clientId,
      @JsonKey(name: 'driver_id') int driverId,
      @JsonKey(name: 'vehicle_id') String vehicleId,
      @JsonKey(name: 'start_point') String startPoint,
      @JsonKey(name: 'finish_point') String finishPoint,
      int distance,
      @JsonKey(name: 'start_time') String? startTime,
      @JsonKey(name: 'finish_time') String? finishTime,
      String status,
      @JsonKey(name: 'requested_time') String requestedTime,
      @JsonKey(name: 'requested_date') String requestedDate,
      double? rate});
}

/// @nodoc
class _$RouteCopyWithImpl<$Res, $Val extends Route>
    implements $RouteCopyWith<$Res> {
  _$RouteCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? routeId = null,
    Object? clientId = null,
    Object? driverId = null,
    Object? vehicleId = null,
    Object? startPoint = null,
    Object? finishPoint = null,
    Object? distance = null,
    Object? startTime = freezed,
    Object? finishTime = freezed,
    Object? status = null,
    Object? requestedTime = null,
    Object? requestedDate = null,
    Object? rate = freezed,
  }) {
    return _then(_value.copyWith(
      routeId: null == routeId
          ? _value.routeId
          : routeId // ignore: cast_nullable_to_non_nullable
              as int,
      clientId: null == clientId
          ? _value.clientId
          : clientId // ignore: cast_nullable_to_non_nullable
              as int,
      driverId: null == driverId
          ? _value.driverId
          : driverId // ignore: cast_nullable_to_non_nullable
              as int,
      vehicleId: null == vehicleId
          ? _value.vehicleId
          : vehicleId // ignore: cast_nullable_to_non_nullable
              as String,
      startPoint: null == startPoint
          ? _value.startPoint
          : startPoint // ignore: cast_nullable_to_non_nullable
              as String,
      finishPoint: null == finishPoint
          ? _value.finishPoint
          : finishPoint // ignore: cast_nullable_to_non_nullable
              as String,
      distance: null == distance
          ? _value.distance
          : distance // ignore: cast_nullable_to_non_nullable
              as int,
      startTime: freezed == startTime
          ? _value.startTime
          : startTime // ignore: cast_nullable_to_non_nullable
              as String?,
      finishTime: freezed == finishTime
          ? _value.finishTime
          : finishTime // ignore: cast_nullable_to_non_nullable
              as String?,
      status: null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as String,
      requestedTime: null == requestedTime
          ? _value.requestedTime
          : requestedTime // ignore: cast_nullable_to_non_nullable
              as String,
      requestedDate: null == requestedDate
          ? _value.requestedDate
          : requestedDate // ignore: cast_nullable_to_non_nullable
              as String,
      rate: freezed == rate
          ? _value.rate
          : rate // ignore: cast_nullable_to_non_nullable
              as double?,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$RouteImplCopyWith<$Res> implements $RouteCopyWith<$Res> {
  factory _$$RouteImplCopyWith(
          _$RouteImpl value, $Res Function(_$RouteImpl) then) =
      __$$RouteImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {@JsonKey(name: 'route_id') int routeId,
      @JsonKey(name: 'client_id') int clientId,
      @JsonKey(name: 'driver_id') int driverId,
      @JsonKey(name: 'vehicle_id') String vehicleId,
      @JsonKey(name: 'start_point') String startPoint,
      @JsonKey(name: 'finish_point') String finishPoint,
      int distance,
      @JsonKey(name: 'start_time') String? startTime,
      @JsonKey(name: 'finish_time') String? finishTime,
      String status,
      @JsonKey(name: 'requested_time') String requestedTime,
      @JsonKey(name: 'requested_date') String requestedDate,
      double? rate});
}

/// @nodoc
class __$$RouteImplCopyWithImpl<$Res>
    extends _$RouteCopyWithImpl<$Res, _$RouteImpl>
    implements _$$RouteImplCopyWith<$Res> {
  __$$RouteImplCopyWithImpl(
      _$RouteImpl _value, $Res Function(_$RouteImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? routeId = null,
    Object? clientId = null,
    Object? driverId = null,
    Object? vehicleId = null,
    Object? startPoint = null,
    Object? finishPoint = null,
    Object? distance = null,
    Object? startTime = freezed,
    Object? finishTime = freezed,
    Object? status = null,
    Object? requestedTime = null,
    Object? requestedDate = null,
    Object? rate = freezed,
  }) {
    return _then(_$RouteImpl(
      routeId: null == routeId
          ? _value.routeId
          : routeId // ignore: cast_nullable_to_non_nullable
              as int,
      clientId: null == clientId
          ? _value.clientId
          : clientId // ignore: cast_nullable_to_non_nullable
              as int,
      driverId: null == driverId
          ? _value.driverId
          : driverId // ignore: cast_nullable_to_non_nullable
              as int,
      vehicleId: null == vehicleId
          ? _value.vehicleId
          : vehicleId // ignore: cast_nullable_to_non_nullable
              as String,
      startPoint: null == startPoint
          ? _value.startPoint
          : startPoint // ignore: cast_nullable_to_non_nullable
              as String,
      finishPoint: null == finishPoint
          ? _value.finishPoint
          : finishPoint // ignore: cast_nullable_to_non_nullable
              as String,
      distance: null == distance
          ? _value.distance
          : distance // ignore: cast_nullable_to_non_nullable
              as int,
      startTime: freezed == startTime
          ? _value.startTime
          : startTime // ignore: cast_nullable_to_non_nullable
              as String?,
      finishTime: freezed == finishTime
          ? _value.finishTime
          : finishTime // ignore: cast_nullable_to_non_nullable
              as String?,
      status: null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as String,
      requestedTime: null == requestedTime
          ? _value.requestedTime
          : requestedTime // ignore: cast_nullable_to_non_nullable
              as String,
      requestedDate: null == requestedDate
          ? _value.requestedDate
          : requestedDate // ignore: cast_nullable_to_non_nullable
              as String,
      rate: freezed == rate
          ? _value.rate
          : rate // ignore: cast_nullable_to_non_nullable
              as double?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$RouteImpl implements _Route {
  const _$RouteImpl(
      {@JsonKey(name: 'route_id') required this.routeId,
      @JsonKey(name: 'client_id') required this.clientId,
      @JsonKey(name: 'driver_id') required this.driverId,
      @JsonKey(name: 'vehicle_id') required this.vehicleId,
      @JsonKey(name: 'start_point') required this.startPoint,
      @JsonKey(name: 'finish_point') required this.finishPoint,
      required this.distance,
      @JsonKey(name: 'start_time') required this.startTime,
      @JsonKey(name: 'finish_time') required this.finishTime,
      required this.status,
      @JsonKey(name: 'requested_time') required this.requestedTime,
      @JsonKey(name: 'requested_date') required this.requestedDate,
      required this.rate});

  factory _$RouteImpl.fromJson(Map<String, dynamic> json) =>
      _$$RouteImplFromJson(json);

  @override
  @JsonKey(name: 'route_id')
  final int routeId;
  @override
  @JsonKey(name: 'client_id')
  final int clientId;
  @override
  @JsonKey(name: 'driver_id')
  final int driverId;
  @override
  @JsonKey(name: 'vehicle_id')
  final String vehicleId;
  @override
  @JsonKey(name: 'start_point')
  final String startPoint;
  @override
  @JsonKey(name: 'finish_point')
  final String finishPoint;
  @override
  final int distance;
  @override
  @JsonKey(name: 'start_time')
  final String? startTime;
  @override
  @JsonKey(name: 'finish_time')
  final String? finishTime;
  @override
  final String status;
  @override
  @JsonKey(name: 'requested_time')
  final String requestedTime;
  @override
  @JsonKey(name: 'requested_date')
  final String requestedDate;
  @override
  final double? rate;

  @override
  String toString() {
    return 'Route(routeId: $routeId, clientId: $clientId, driverId: $driverId, vehicleId: $vehicleId, startPoint: $startPoint, finishPoint: $finishPoint, distance: $distance, startTime: $startTime, finishTime: $finishTime, status: $status, requestedTime: $requestedTime, requestedDate: $requestedDate, rate: $rate)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$RouteImpl &&
            (identical(other.routeId, routeId) || other.routeId == routeId) &&
            (identical(other.clientId, clientId) ||
                other.clientId == clientId) &&
            (identical(other.driverId, driverId) ||
                other.driverId == driverId) &&
            (identical(other.vehicleId, vehicleId) ||
                other.vehicleId == vehicleId) &&
            (identical(other.startPoint, startPoint) ||
                other.startPoint == startPoint) &&
            (identical(other.finishPoint, finishPoint) ||
                other.finishPoint == finishPoint) &&
            (identical(other.distance, distance) ||
                other.distance == distance) &&
            (identical(other.startTime, startTime) ||
                other.startTime == startTime) &&
            (identical(other.finishTime, finishTime) ||
                other.finishTime == finishTime) &&
            (identical(other.status, status) || other.status == status) &&
            (identical(other.requestedTime, requestedTime) ||
                other.requestedTime == requestedTime) &&
            (identical(other.requestedDate, requestedDate) ||
                other.requestedDate == requestedDate) &&
            (identical(other.rate, rate) || other.rate == rate));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      routeId,
      clientId,
      driverId,
      vehicleId,
      startPoint,
      finishPoint,
      distance,
      startTime,
      finishTime,
      status,
      requestedTime,
      requestedDate,
      rate);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$RouteImplCopyWith<_$RouteImpl> get copyWith =>
      __$$RouteImplCopyWithImpl<_$RouteImpl>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$RouteImplToJson(
      this,
    );
  }
}

abstract class _Route implements Route {
  const factory _Route(
      {@JsonKey(name: 'route_id') required final int routeId,
      @JsonKey(name: 'client_id') required final int clientId,
      @JsonKey(name: 'driver_id') required final int driverId,
      @JsonKey(name: 'vehicle_id') required final String vehicleId,
      @JsonKey(name: 'start_point') required final String startPoint,
      @JsonKey(name: 'finish_point') required final String finishPoint,
      required final int distance,
      @JsonKey(name: 'start_time') required final String? startTime,
      @JsonKey(name: 'finish_time') required final String? finishTime,
      required final String status,
      @JsonKey(name: 'requested_time') required final String requestedTime,
      @JsonKey(name: 'requested_date') required final String requestedDate,
      required final double? rate}) = _$RouteImpl;

  factory _Route.fromJson(Map<String, dynamic> json) = _$RouteImpl.fromJson;

  @override
  @JsonKey(name: 'route_id')
  int get routeId;
  @override
  @JsonKey(name: 'client_id')
  int get clientId;
  @override
  @JsonKey(name: 'driver_id')
  int get driverId;
  @override
  @JsonKey(name: 'vehicle_id')
  String get vehicleId;
  @override
  @JsonKey(name: 'start_point')
  String get startPoint;
  @override
  @JsonKey(name: 'finish_point')
  String get finishPoint;
  @override
  int get distance;
  @override
  @JsonKey(name: 'start_time')
  String? get startTime;
  @override
  @JsonKey(name: 'finish_time')
  String? get finishTime;
  @override
  String get status;
  @override
  @JsonKey(name: 'requested_time')
  String get requestedTime;
  @override
  @JsonKey(name: 'requested_date')
  String get requestedDate;
  @override
  double? get rate;
  @override
  @JsonKey(ignore: true)
  _$$RouteImplCopyWith<_$RouteImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
