import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:vms/models/start_route_body/start_route_body.dart';
import 'package:vms/repositories/routes/routes_repo.dart';

part 'start_route_bloc.freezed.dart';
part 'start_route_event.dart';
part 'start_route_state.dart';

class StartRouteBloc extends Bloc<StartRouteEvent, StartRouteState> {
  final RoutesRepo routesRepo;

  StartRouteBloc({required this.routesRepo})
      : super(const StartRouteState.loading()) {
    on<StartRouteEventFetch>((event, emit) async {
      emit(const StartRouteState.loading());
      try {
        await routesRepo.startRoute(event.startBody, event.routeId);

        emit(const StartRouteState.loaded());
      } catch (e) {
        emit(const StartRouteState.error());
      }
    });
  }
}
