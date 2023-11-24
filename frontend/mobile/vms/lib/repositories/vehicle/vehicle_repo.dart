import 'dart:convert';
import 'package:vms/constants/constants.dart';
import 'package:http/http.dart' as http;
import 'package:vms/models/vehicle/vehicle.dart';

class VehicleRepo {
  Future<Vehicle> getVehicleInfo(String licensePlate) async {
    try {
      final uri = Uri.parse('$localhost/vehicles/$licensePlate');

      var headers = {"content-type": "application/json"};

      final response = await http.get(uri, headers: headers);

      return Vehicle.fromJson(json.decode(response.body));
    } catch (e) {
      throw Exception(e.toString());
    }
  }
}