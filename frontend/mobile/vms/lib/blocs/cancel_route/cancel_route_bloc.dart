import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:vms/models/cancel_route_body/cancel_route_body.dart';
import 'package:vms/repositories/routes/routes_repo.dart';

part 'cancel_route_bloc.freezed.dart';
part 'cancel_route_event.dart';
part 'cancel_route_state.dart';

class CancelRouteBloc extends Bloc<CancelRouteEvent, CancelRouteState> {
  final RoutesRepo routesRepo;

  CancelRouteBloc({required this.routesRepo})
      : super(const CancelRouteState.loading()) {
    on<CancelRouteEventFetch>((event, emit) async {
      emit(const CancelRouteState.loading());
      try {
        await routesRepo.cancelRoute(event.cancelBody, event.routeId);

        emit(const CancelRouteState.loaded());
      } catch (e) {
        emit(const CancelRouteState.error());
      }
    });
  }
}