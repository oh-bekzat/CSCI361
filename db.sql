CREATE TYPE role_type AS ENUM ('client', 'driver', 'maintenance_person', 'fuelling_person')

CREATE TYPE task_type AS ENUM ('maintenance', 'fuelling')

CREATE TYPE task_status_type AS ENUM ('assigned', 'taken', 'completed')

CREATE TABLE users (
  	user_id serial PRIMARY KEY,
  	email varchar(255) UNIQUE NOT NULL, -- Validation is redundant as admin is responsible
	password_hashed text NOT NULL, -- Password is hashed - it can be very long; no need for length check
  	firstname varchar(255) NOT NULL,
	middlename varchar(255),
  	lastname varchar(255) NOT NULL,
  	address varchar(255),
  	phone_number char(11) CHECK (phone_number ~ '^[0-9]{11}$') NOT NULL,
  	iin char(12) CHECK (iin ~ '^[0-9]{12}$') NOT NULL, -- Can have leading 0 so has to be a string
	user_role role_type NOT NULL
)

CREATE TABLE administrators (
  	admin_id serial PRIMARY KEY,
  	email varchar(255) UNIQUE NOT NULL, -- email and password are credentials
	password_hashed text NOT NULL,
  	firstname varchar(255) NOT NULL,
  	lastname varchar(255) NOT NULL
)

CREATE TABLE vehicles (
  	license_plate varchar(255) PRIMARY KEY,
	vehicle_image bytea NOT NULL,
  	make varchar(255) NOT NULL,
  	model varchar(255) NOT NULL, 
  	manufacture_year int CHECK (manufacture_year >= date_part('year', CURRENT_DATE) - 30 AND
    	manufacture_year <= date_part('year', CURRENT_DATE)) NOT NULL, -- no older than 30 years from now
  	capacity int NOT NULL,
  	fuel_volume real NOT NULL,
  	tank_volume real NOT NULL,
  	mileage int NOT NULL,
  	last_fueled_date date NOT NULL,
  	last_maintained_date date NOT NULL
)

CREATE TABLE drivers ( -- without active tasks attribute first
  	user_id int REFERENCES users(user_id) UNIQUE NOT NULL, -- no need for driver_id, relationship is 1 to 1
  	license_code char(6) CHECK (license_code ~ '^[0-9]{6}$') UNIQUE NOT NULL
)

CREATE TABLE clients (
  	user_id int REFERENCES users(user_id) UNIQUE NOT NULL -- cannot have two or more roles
)

CREATE TABLE maintenance_persons (
  	user_id int REFERENCES users(user_id) UNIQUE NOT NULL
)

CREATE TABLE fuelling_persons (
  	user_id int REFERENCES users(user_id) UNIQUE NOT NULL
)

CREATE TABLE tasks (
  	task_id serial PRIMARY KEY,
  	description text NOT NULL,
  	task_type task_type NOT NULL,
  	assignee_id int REFERENCES users(user_id) NOT NULL, -- task_type specifies whether task is maintaining/fuelling
  	date timestamp NOT NULL,
  	status task_status_type NOT NULL,
	vehicle_id varchar(255) REFERENCES vehicles(license_plate)
)

CREATE TABLE routes (
  	route_id serial PRIMARY KEY,
  	client_id int REFERENCES clients(user_id) NOT NULL,
	driver_id int REFERENCES drivers(user_id),
  	vehicle_id varchar(255) REFERENCES vehicles(license_plate),
  	start_point varchar(255) NOT NULL,
  	finish_point varchar(255) NOT NULL,
  	distance int NOT NULL, -- derivable but costly performance-wise
  	start_time timestamp,
  	finish_time timestamp -- total time is derivable
	status route_status_type DEFAULT 'awaiting'
)

CREATE TABLE fuelling_details (
	fuelling_id serial PRIMARY KEY,
  	vehicle_id varchar(255) REFERENCES vehicles(license_plate) NOT NULL,
  	task_id int REFERENCES tasks(task_id) NOT NULL, -- i.e. finished task at this point
  	user_id int REFERENCES users(user_id) NOT NULL,
  	fuelling_date timestamp Not NULL,
  	fuel_amount real NOT NULL,
  	fuel_cost int NOT NULL,
  	gas_station_name varchar(255) NOT NULL
)

CREATE TABLE maintenance_details (
  	maintenance_id serial PRIMARY KEY,
  	task_id int REFERENCES tasks(task_id) NOT NULL,
  	user_id int REFERENCES users(user_id) NOT NULL,
  	vehicle_id varchar(255) REFERENCES vehicles(license_plate) NOT NULL,
  	description text Not NULL,
  	maintenance_date timestamp NOT NULL,
  	maintenance_cost int NOT NULL
)

CREATE TABLE auctioned_vehicles (
    auctioned_vehicle_id varchar(255) NOT NULL PRIMARY KEY,
    vehicle_cost int NOT NULL,
    description text NOT NULL,
    FOREIGN KEY (auctioned_vehicle_id) REFERENCES vehicles(license_plate) ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE TABLE photos (
    photo_id serial PRIMARY KEY,
    photo_data bytea NOT NULL,
	task_id INT REFERENCES tasks(task_id)
)

CREATE TABLE auctioned_vehicles_photos (
    auctioned_vehicle_id varchar(255) REFERENCES auctioned_vehicles(auctioned_vehicle_id) ON DELETE CASCADE,  -- Cascade delete if referenced auctioned vehicle is deleted
    photo_id int REFERENCES photos(photo_id) ON DELETE CASCADE,  -- Cascade delete if referenced photo is deleted
    PRIMARY KEY (auctioned_vehicle_id, photo_id)
)

CREATE TABLE reports (
  	report_id serial PRIMARY KEY,
    driver_id int REFERENCES drivers(user_id) NOT NULL,
  	total_distance int NOT NUll,
  	total_time int NOT NULL, -- seconds for instance
  	total_maintenance_cost int NOT NULL,
  	total_fuel real NOT NULL
)


INSERT INTO users (email, password_hashed, firstname, lastname, address, phone_number, iin, user_role) VALUES 
('client@example.com', 'hashedpassword1', 'John', 'Doe', '123 Street', '12345678901', '123456789012', 'client'),
('driver@example.com', 'hashedpassword2', 'Jane', 'Smith', '456 Lane', '23456789012', '234567890123', 'driver'),
('maint@example.com', 'hashedpassword3', 'Bill', 'Gates', '789 Road', '34567890123', '345678901234', 'maintenance_person'),
('fuel@example.com', 'hashedpassword4', 'Elon', 'Musk', '012 Avenue', '45678901234', '456789012345', 'fuelling_person')

INSERT INTO administrators (email, password_hashed, firstname, lastname) VALUES 
('admin@example.com', 'adminhashedpassword', 'Admin', 'User')

INSERT INTO vehicles (license_plate, make, model, manufacture_year, capacity, fuel_volume, tank_volume, mileage, last_fueled_date, last_maintained_date) VALUES 
('ABC123', 'Toyota', 'Corolla', 2020, 5, 40, 50, 10000, '2023-01-01', '2023-01-10')

INSERT INTO drivers (user_id, license_code) VALUES 
((SELECT user_id FROM users WHERE email='driver@example.com'), '123456')

INSERT INTO clients (user_id) VALUES ((SELECT user_id FROM users WHERE email='client@example.com'))

INSERT INTO maintenance_persons (user_id) VALUES ((SELECT user_id FROM users WHERE email='maint@example.com'))

INSERT INTO fuelling_persons (user_id) VALUES ((SELECT user_id FROM users WHERE email='fuel@example.com'))

INSERT INTO tasks (description, task_type, assignee_id, date, status) VALUES 
('Fueling task', 'fuelling', (SELECT user_id FROM users WHERE email='fuel@example.com'), '2023-01-15 10:00:00', 'assigned'),
('Maintenance task', 'maintenance', (SELECT user_id FROM users WHERE email='maint@example.com'), '2023-01-16 09:00:00', 'assigned')

INSERT INTO routes (client_id, driver_id, vehicle_id, start_point, finish_point, distance, start_time, finish_time) VALUES 
((SELECT user_id FROM users WHERE email='client@example.com'), (SELECT user_id FROM users WHERE email='driver@example.com'), 'ABC123', 'Point A', 'Point B', 50, '2023-01-17 08:00:00', '2023-01-17 09:00:00')

INSERT INTO fuelling_details (vehicle_id, task_id, fuelling_person_id, fuelling_date, fuel_amount, fuel_cost, gas_station_name) VALUES 
('ABC123', 1, (SELECT user_id FROM users WHERE email='fuel@example.com'), '2023-01-18 10:00:00', 40, 1000, 'Gas Station 1')

INSERT INTO maintenance_details (task_id, maintenance_person_id, vehicle_id, description, maintenance_date, maintenance_cost) VALUES 
(2, (SELECT user_id FROM users WHERE email='maint@example.com'), 'ABC123', 'General Maintenance', '2023-01-19 09:00:00', 1500)

INSERT INTO auctioned_vehicles (auctioned_vehicle_id, vehicle_cost, description) VALUES
('ABC123', 15000, 'Good condition vehicle')

INSERT INTO photos (photo_data) VALUES ('')

INSERT INTO auctioned_vehicles_photos (auctioned_vehicle_id, photo_id) VALUES ('ABC123', 1)

INSERT INTO reports (driver_id, total_distance, total_time, total_maintenance_cost, total_fuel) VALUES
((SELECT user_id FROM users WHERE email='driver@example.com'), 50, 3600, 1500, 40)


SELECT * FROM users

SELECT * FROM administrators

SELECT * FROM vehicles

SELECT * FROM drivers

SELECT * FROM clients

SELECT * FROM maintenance_persons

SELECT * FROM fuelling_persons

SELECT * FROM tasks

SELECT * FROM routes

SELECT * FROM fuelling_details

SELECT * FROM maintenance_details

SELECT * FROM auctioned_vehicles

SELECT * FROM photos

SELECT * FROM auctioned_vehicles_photos

SELECT * FROM reports

-- Fetch all tasks assigned to a specific user (e.g., 'Elon Musk'):
SELECT tasks.* FROM tasks JOIN users ON tasks.assignee_id = users.user_id 
WHERE users.firstname = 'Elon' AND users.lastname = 'Musk'

-- Fetch all drivers along with their vehicle details:
SELECT users.firstname, users.lastname, vehicles.* FROM drivers
JOIN users ON drivers.user_id = users.user_id
JOIN routes ON drivers.user_id = routes.driver_id
JOIN vehicles ON routes.vehicle_id = vehicles.license_plate

-- Fetch all vehicles that were auctioned along with their associated photos:
SELECT auctioned_vehicles.*, photos.photo_data FROM auctioned_vehicles
JOIN auctioned_vehicles_photos ON auctioned_vehicles.auctioned_vehicle_id = auctioned_vehicles_photos.auctioned_vehicle_id
JOIN photos ON auctioned_vehicles_photos.photo_id = photos.photo_id

-- Fetch the total maintenance cost and total fuel for a specific driver (e.g., 'Jane Smith'):
SELECT 
    SUM(maintenance_details.maintenance_cost) AS total_maintenance_cost, 
    SUM(fuelling_details.fuel_amount) AS total_fuel
FROM reports
JOIN drivers ON reports.driver_id = drivers.user_id
JOIN users ON drivers.user_id = users.user_id
LEFT JOIN routes ON routes.driver_id = drivers.user_id
LEFT JOIN maintenance_details ON maintenance_details.vehicle_id = routes.vehicle_id
LEFT JOIN fuelling_details ON fuelling_details.vehicle_id = routes.vehicle_id
WHERE users.firstname = 'Jane' AND users.lastname = 'Smith'

-- Fetch all maintenance persons along with the tasks assigned to them and the related vehicle:
SELECT users.firstname, users.lastname, tasks.description, vehicles.make, vehicles.model
FROM maintenance_persons
JOIN users ON maintenance_persons.user_id = users.user_id
JOIN tasks ON tasks.assignee_id = users.user_id
JOIN maintenance_details ON maintenance_details.task_id = tasks.task_id
JOIN vehicles ON maintenance_details.vehicle_id = vehicles.license_plate
WHERE tasks.task_type = 'maintenance'

-- Fetch all clients, their routes, and the drivers who drove them:
SELECT clients.user_id, users.firstname AS client_name, routes.start_point, routes.finish_point, u2.firstname AS driver_name
FROM clients
JOIN users ON clients.user_id = users.user_id
JOIN routes ON clients.user_id = routes.client_id
JOIN drivers ON routes.driver_id = drivers.user_id
JOIN users u2 ON drivers.user_id = u2.user_id