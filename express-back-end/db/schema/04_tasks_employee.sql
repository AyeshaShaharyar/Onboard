-- Drop and recreate tasks_employee table

DROP TABLE IF EXISTS tasks_employee CASCADE;

CREATE TABLE tasks_employee (
  id SERIAL PRIMARY KEY NOT NULL,
  completion BOOLEAN DEFAULT FALSE,
  rating INTEGER NOT NULL DEFAULT 0,
  employee_id INTEGER REFERENCES employees(id) ON DELETE CASCADE,
  task_id INTEGER REFERENCES tasks(id) ON DELETE CASCADE
);
