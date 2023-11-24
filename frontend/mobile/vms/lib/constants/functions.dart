import 'package:flutter/cupertino.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:vms/constants/enums.dart';
import 'package:vms/providers/bottom_provider/bottom_provider.dart';
import 'package:vms/routes/router_constants.dart';

void showAlertDialog(BuildContext context) {
  showCupertinoModalPopup<void>(
    context: context,
    builder: (BuildContext context) => CupertinoAlertDialog(
      title: const Text('Sign out'),
      content: const Text('Do you really want to sign out from your account?'),
      actions: <CupertinoDialogAction>[
        CupertinoDialogAction(
          isDefaultAction: true,
          onPressed: () {
            Navigator.pop(context);
          },
          child: const Text('No'),
        ),
        CupertinoDialogAction(
          isDestructiveAction: true,
          onPressed: () async {
            Navigator.pop(context);
            Navigator.pop(context);
            Navigator.pushNamed(context, RouterName.loginRoute);

            final SharedPreferences prefs =
                await SharedPreferences.getInstance();

            await prefs.remove('user_id');

            await prefs.remove('loginned');

            context.read<BottomProvider>().changePage(Pages.home);
          },
          child: const Text('Yes'),
        ),
      ],
    ),
  );
}
