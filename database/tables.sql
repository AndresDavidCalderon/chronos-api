CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(50) NOT NULL UNIQUE,
	password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE events (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	date date NOT NULL,
	start_time time,
	end_time time,
	location VARCHAR(100),
	description TEXT,
	repetition_type repeat_frequency,
	weekdays_for_repetition week_days[],
	months_for_repetition months[],
	day_of_month_for_repetition INTEGER[],
	owner INTEGER REFERENCES users(id) ON DELETE CASCADE
);