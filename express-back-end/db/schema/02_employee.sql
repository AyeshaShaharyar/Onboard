-- Drop and recreate employees table

DROP TABLE IF EXISTS employees CASCADE;

CREATE TABLE employees (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  middle_name VARCHAR(30),
  last_name VARCHAR(30) NOT NULL,
  date_of_birth DATE NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone_number VARCHAR(15),
  address VARCHAR(100) NOT NULL,
  apartment_unit VARCHAR(20),
  city VARCHAR(60) NOT NULL,
  province VARCHAR(30) NOT NULL,
  postal_code VARCHAR(7) NOT NULL,
  contact_phone_number VARCHAR(15) NOT NULL,
  start_date DATE NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

--date format: YYYY-MM-DD
