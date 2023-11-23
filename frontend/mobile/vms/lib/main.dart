import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:vms/providers/bottom_provider/bottom_provider.dart';
import 'package:vms/routes/app_router.dart';
import 'package:vms/routes/router_constants.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown,
  ]);

  SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle.light);
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => BottomProvider()),
      ],
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  MyApp({super.key});

  final lightTheme = ThemeData(
    fontFamily: 'Montserrat',
    scaffoldBackgroundColor: Colors.white,
  );

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: RouterName.preloaderRoute,
      onGenerateRoute: AppRouter.generateRoute,
      theme: lightTheme,
      darkTheme: lightTheme,
    );
  }
}
