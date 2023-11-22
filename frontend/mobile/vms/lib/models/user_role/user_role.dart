import 'package:freezed_annotation/freezed_annotation.dart';

part 'user_role.freezed.dart';
part 'user_role.g.dart';

@freezed
class UserRole with _$UserRole {
  const factory UserRole({
    required int userId,

    @JsonKey(name: 'user_role')
    required String userRole,
  }) = _UserRole;

  factory UserRole.fromJson(Map<String, dynamic> json) =>
      _$UserRoleFromJson(json);
}