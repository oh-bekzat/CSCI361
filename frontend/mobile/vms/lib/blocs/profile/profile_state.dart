part of 'profile_bloc.dart';

@freezed
class ProfileState with _$ProfileState {
  const factory ProfileState.loading() = ProfileStateLoading;
  const factory ProfileState.loaded({required Profile profile}) =
      ProfileStateLoaded;
  const factory ProfileState.error() = ProfileStateError;
}