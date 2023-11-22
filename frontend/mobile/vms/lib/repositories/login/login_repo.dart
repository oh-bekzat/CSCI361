import 'package:flutter/material.dart';
import 'package:vms/constants/constants.dart';
import 'package:vms/models/user/user.dart';
import 'package:vms/models/user_role/user_role.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class LoginRepo {
  Future<UserRole> login(User user) async {
    try {
      final uri = Uri.parse('$localhost/users/login');

      var headers = {"content-type": "application/json"};

      Map<String, dynamic> body = {
        "username": user.username,
        "password": user.password,
      };

      final response =
          await http.post(uri, body: jsonEncode(body), headers: headers);

      if (response.statusCode == 201) {
        return UserRole.fromJson(json.decode(response.body));
      } else {
        return const UserRole(userId: 404, userRole: 'none');
      }
    } catch (e) {
      debugPrint(e.toString());
      return const UserRole(userId: 404, userRole: 'none');
    }
  }
}
