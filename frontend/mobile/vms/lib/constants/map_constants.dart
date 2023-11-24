import 'package:vms/constants/enums.dart';

Map<Pages, String> activePageIcon = {
  Pages.home: 'assets/images/home_active.svg',
  Pages.info: 'assets/images/info_active.svg',
  Pages.profile: 'assets/images/profile_active.svg',
};

Map<Pages, String> inActivePageIcon = {
  Pages.home: 'assets/images/home_inactive.svg',
  Pages.info: 'assets/images/info_inactive.svg',
  Pages.profile: 'assets/images/profile_inactive.svg',
};

Map<Pages, String> pageTitle = {
  Pages.home: 'My Routes',
  Pages.info: 'Info',
  Pages.profile: 'Profile',
};

Map<Pages, String> bottomTitle = {
  Pages.home: 'Home',
  Pages.info: 'Info',
  Pages.profile: 'Profile',
};

Map<Services, String> serviceIcon = {
  Services.fueling: 'assets/images/fueling.svg',
  Services.mainten: 'assets/images/maintenance.svg',
};

Map<Services, String> serviceTitle = {
 Services.fueling: 'Fueling',
  Services.mainten: 'Maintenance',
};

Map<Services, String> serviceDescription = {
 Services.fueling: 'Process of supplying vehicles with the necessary fuel to power their engines, enabling them to operate efficiently',
  Services.mainten: 'Actions taken to keep vehicles in optimal condition, preventing issues and extending their lifespan',
};

Map<ProfileTypeInfo, String> profileTypeTitle = {
  ProfileTypeInfo.role: 'Role',
  ProfileTypeInfo.email: 'E-mail',
  ProfileTypeInfo.address: 'Address',
  ProfileTypeInfo.phone: 'Phone number',
  ProfileTypeInfo.iin: 'IIN',
};

Map<ProfileTypeInfo, String> profileTypeIcon = {
  ProfileTypeInfo.role: 'assets/images/car.svg',
  ProfileTypeInfo.email: 'assets/images/email.svg',
  ProfileTypeInfo.address: 'assets/images/address.svg',
  ProfileTypeInfo.phone: 'assets/images/phone.svg',
  ProfileTypeInfo.iin: 'assets/images/iin.svg',
};

Map<RouteStatus, String> routeStatus = {
  RouteStatus.assigned: 'assigned',
  RouteStatus.completed: 'completed',
  RouteStatus.started: 'started',
  RouteStatus.awaiting: 'awaiting',
};

Map<VehicleTypeInfo, String> vehicleTypeTitle = {
  VehicleTypeInfo.licensePlate: 'License Plate',
  VehicleTypeInfo.capacity: 'Capacity',
  VehicleTypeInfo.tankVolume: 'Tank Volume',
  VehicleTypeInfo.mileage: 'Mileage',
  VehicleTypeInfo.lastMaintainedDate: 'Last maintained date',
  VehicleTypeInfo.lastFueledDate: 'Last fueled date',
};

