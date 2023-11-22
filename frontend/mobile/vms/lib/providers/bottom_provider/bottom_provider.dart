import 'package:flutter/material.dart';
import 'package:vms/constants/enums.dart';

class BottomProvider extends ChangeNotifier {
  Pages _currentPage = Pages.home;

  get currentPage => _currentPage;

  void changePage(Pages newPage) {
    _currentPage = newPage;
    
    notifyListeners();
  }
}