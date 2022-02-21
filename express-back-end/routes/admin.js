const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/new-tasks", (req, res) => {
    const taskFormData = req.body;
    console.log("taskFormData", taskFormData);
    db.query(
      `INSERT INTO tasks(name, description, image, content, link, url, zoom) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING * `,
      [
        req.body.taskday,
        req.body.taskname,
        req.body.img,
        req.body.description,
        req.body.link,
        req.body.video,
        req.body.zoom,
      ]
    )
    .then((data) => {
      const tasks = data.rows;
      const tasks_id = tasks[0].id;
      const employees_id = req.body.selectedEmployees.forEach((employee) => {
        db.query(
          `INSERT INTO tasks_employee(task_id, employee_id) VALUES($1, $2) RETURNING *`,
          [tasks_id, employee.employeesid]
        )
          .then((data) => {
            res.json("Table Updated");
          })
          .catch((err) => {
            res.status(500).json({ error: err.message });
          });
      });
    });
  });
  router.get("/tasks", (req, res) => {
    const employeeId = req.params.employee_id;
    const completion = req.query.completion;

    let query = `SELECT employees.id AS employeesID, employees.first_name AS fName , employees.last_name AS lName, tasks.name , tasks.id, tasks.description, tasks.due_date, due_date - CURRENT_DATE AS pending_days, tasks_employee.completion, tasks_employee.rating FROM tasks
      JOIN tasks_employee ON tasks.id =tasks_employee.task_id
      JOIN employees ON employees.id = tasks_employee.employee_id
    `;

    if (completion) {
      query = query + ` AND completion = ${completion}`;
    }
    query = query + ` ORDER BY name;`;

    console.log(query);

    db.query(query)

      .then((data) => {
        const employeesTasks = data.rows;
        console.log(employeesTasks);
        res.json({ employeesTasks });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/new-tasks", (req, res) => {
    let query = `SELECT employees.id AS employeesID, employees.first_name AS fName, employees.last_name AS lName FROM employees
    JOIN users ON users.id = employees.user_id
    WHERE job_role = 'Employee'`;
    console.log(query);
    db.query(query)
      .then((data) => {
        const employeesNames = data.rows;
        res.json({ employeesNames });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  router.get("/:employee_id/tasks/:task_id", (req, res) => {
    const employeeId = req.params.employee_id;
    const taskId = req.params.task_id;

    let query = `SELECT name, description, image, content, link, zoom, tasks_employee.id, tasks.id, rating, url, completion FROM tasks_employee
    JOIN tasks ON task_id = tasks.id
    JOIN employees ON employee_id = employees.id
    WHERE employee_id = $1 AND task_id = $2;`;

    db.query(query, [employeeId, taskId])
      .then((data) => {
        const task = data.rows;
        res.json({ task });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
