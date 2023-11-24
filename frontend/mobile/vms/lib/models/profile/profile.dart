import 'package:freezed_annotation/freezed_annotation.dart';

part 'profile.freezed.dart';
part 'profile.g.dart';

@freezed
class Profile with _$Profile {
  const factory Profile({
    required String email,
    required String firstname,
    required String lastname,
    @JsonKey(name: 'phone_number')
    required String phoneNumber,

    required String iin,

    @JsonKey(name: 'user_role')
    required String userRole,
  }) = _Profile;

  factory Profile.fromJson(Map<String, dynamic> json) =>
      _$ProfileFromJson(json);
  
}