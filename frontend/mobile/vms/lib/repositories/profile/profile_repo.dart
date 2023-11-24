import 'dart:convert';
import 'package:vms/constants/constants.dart';
import 'package:vms/models/profile/profile.dart';
import 'package:http/http.dart' as http;

class ProfileRepo {
  Future<Profile> getProfile(int userId) async {
    try {
      final uri = Uri.parse('$localhost/users/$userId');

      var headers = {"content-type": "application/json"};

      final response = await http.get(uri, headers: headers);

      print(response.toString());

      return Profile.fromJson(json.decode(response.body));

    } catch (e) {
      throw Exception(e.toString());
    }
  }
}
