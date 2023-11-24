import 'dart:convert';
import 'package:flutter/cupertino.dart';
import 'package:vms/constants/constants.dart';
import 'package:http/http.dart' as http;
import 'package:vms/models/cancel_route_body/cancel_route_body.dart';
import 'package:vms/models/finish_route_body/finish_route_body.dart';
import 'package:vms/models/routes/routes.dart';
import 'package:vms/models/start_route_body/start_route_body.dart';

class RoutesRepo {
  Future<Routes> getAssignedRoutes(int userId) async {
    try {
      final uri = Uri.parse('$localhost/routes/assigned/$userId');

      var headers = {"content-type": "application/json"};

      final response = await http.get(uri, headers: headers);

      return Routes.fromJson(json.decode(response.body));
    } catch (e) {
      throw Exception(e.toString());
    }
  }

  Future<void> startRoute(StartRouteBody startBody, int routeId) async {
    try {
      final uri = Uri.parse('$localhost/routes/start/$routeId');

      var headers = {"content-type": "application/json"};

      Map<String, dynamic> body = {
        "driver_id": startBody.driverId,
        "start_time": startBody.startTime,
      };

      final response =
          await http.put(uri, body: jsonEncode(body), headers: headers);

      if (response.statusCode != 200) {
        throw Exception('Some error with Start assigned route occured');
      } else {
        debugPrint('SUCCESS START');
      }
    } catch (e) {
      throw Exception(e.toString());
    }
  }

  Future<void> finishRoute(FinishRouteBody finishBody, int routeId) async {
    try {
      final uri = Uri.parse('$localhost/routes/finish/$routeId');

      var headers = {"content-type": "application/json"};

      Map<String, dynamic> body = {
        "driver_id": finishBody.driverId,
        "finish_time": finishBody.finishTime,
      };

      final response =
          await http.put(uri, body: jsonEncode(body), headers: headers);

      if (response.statusCode != 200) {
        throw Exception('Some error with Finish assigned route occured');
      } else {
        debugPrint('SUCCESS FINISH');
      }
    } catch (e) {
      throw Exception(e.toString());
    }
  }

  Future<void> cancelRoute(CancelRouteBody cancelBody, int routeId) async {
    try {
      final uri = Uri.parse('$localhost/routes/cancel/$routeId');

      var headers = {"content-type": "application/json"};

      Map<String, dynamic> body = {
        "driver_id": cancelBody.driverId,
      };

      final response =
          await http.put(uri, body: jsonEncode(body), headers: headers);

      if (response.statusCode != 200) {
        throw Exception('Some error with Cancel assigned route occured');
      } else {
        debugPrint('SUCCESS CANCEL');
      }
    } catch (e) {
      throw Exception(e.toString());
    }
  }
}
