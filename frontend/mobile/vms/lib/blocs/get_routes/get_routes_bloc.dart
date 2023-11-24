import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:vms/models/routes/routes.dart';
import 'package:vms/repositories/routes/routes_repo.dart';

part 'get_routes_bloc.freezed.dart';
part 'get_routes_event.dart';
part 'get_routes_state.dart';

class GetRoutesBloc extends Bloc<GetRoutesEvent, GetRoutesState> {
  final RoutesRepo routesRepo;

  GetRoutesBloc({required this.routesRepo}) : super(const GetRoutesState.loading()) {
    on<GetRoutesEventFetch>((event, emit) async {
      emit(const GetRoutesState.loading());
      try {
        Routes routesLoaded = await routesRepo.getAssignedRoutes(event.userId);

        emit(GetRoutesState.loaded(routes: routesLoaded));
      } catch (e) {
        emit(const GetRoutesState.error());
      }
    });
  }
}