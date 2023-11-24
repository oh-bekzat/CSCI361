import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:vms/models/profile/profile.dart';
import 'package:vms/repositories/profile/profile_repo.dart';

part 'profile_bloc.freezed.dart';
part 'profile_event.dart';
part 'profile_state.dart';

class ProfileBloc extends Bloc<ProfileEvent, ProfileState> {
  final ProfileRepo profileRepo;

  ProfileBloc({required this.profileRepo}) : super(const ProfileState.loading()) {
    on<ProfileEventFetch>((event, emit) async {
      emit(const ProfileState.loading());
      try {
        Profile profileLoaded = await profileRepo
            .getProfile(event.userId);

        emit(ProfileState.loaded(profile: profileLoaded));
      } catch (e) {
        emit(const ProfileState.error());
      }
    });
  }
}