import 'package:flutter/material.dart';
import 'package:vms/constants/enums.dart';
import 'package:vms/widgets/buttons/service_button.dart';

class ServicesScreen extends StatelessWidget {
  const ServicesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height,
      width: MediaQuery.of(context).size.width,
      padding: const EdgeInsets.symmetric(horizontal: 18),
      child: SafeArea(
        bottom: false,
        child: Column(
          children: [
            Container(
              margin: const EdgeInsets.symmetric(vertical: 40),
              alignment: Alignment.topLeft,
              child: const Text(
                'Services',
                style: TextStyle(
                  fontSize: 30,
                  fontWeight: FontWeight.w800,
                  color: Colors.black,
                ),
              ),
            ),
            ServiceButton(
              serviceType: Services.fueling,
              onPressed: () {},
            ),
            const SizedBox(height: 30),
            ServiceButton(
              serviceType: Services.mainten,
              onPressed: () {},
            ),
          ],
        ),
      ),
    );
  }
}
