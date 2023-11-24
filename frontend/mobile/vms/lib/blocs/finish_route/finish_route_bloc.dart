import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:vms/models/finish_route_body/finish_route_body.dart';
import 'package:vms/repositories/routes/routes_repo.dart';

part 'finish_route_bloc.freezed.dart';
part 'finish_route_event.dart';
part 'finish_route_state.dart';

class FinishRouteBloc extends Bloc<FinishRouteEvent, FinishRouteState> {
  final RoutesRepo routesRepo;

  FinishRouteBloc({required this.routesRepo})
      : super(const FinishRouteState.loading()) {
    on<FinishRouteEventFetch>((event, emit) async {
      emit(const FinishRouteState.loading());
      try {
        await routesRepo.finishRoute(event.finishBody, event.routeId);

        emit(const FinishRouteState.loaded());
      } catch (e) {
        emit(const FinishRouteState.error());
      }
    });
  }
}