const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post("/new-tasks", (req, res) => {
    const taskFormData = req.body;
    console.log("taskFormData", taskFormData)
    db.query(`INSERT INTO tasks(name, description, image, content, due_date, link, url, zoom) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING * `,
    [
      req.body.taskday,
      req.body.taskname,
      req.body.img,
      req.body.description,
      req.body.duedate,
      req.body.video,
      req.body.link,
      req.body.zoom
    ]
  )
      .then(data => {
        const tasks = data.rows;
        console.log(tasks)

      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  router.get("/tasks", (req, res) => {
    const employeeId = req.params.employee_id
    const completion = req.query.completion

    let query = `SELECT employees.id AS employeesID, employees.first_name AS fName , employees.last_name AS lName, tasks.name , tasks.description, tasks.due_date,tasks_employee.completion, tasks_employee.rating FROM tasks
      JOIN tasks_employee ON tasks.id =tasks_employee.task_id
      JOIN employees ON employees.id = tasks_employee.employee_id
    `;

    if (completion) {
      query = query + ` AND completion = ${completion}`
    }
    query = query + ` ORDER BY name;`

    console.log(query);

    db.query(query)

      .then(data => {

        const employeesTasks = data.rows;
        console.log(employeesTasks)
        res.json({ employeesTasks });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/new-tasks", (req, res) => {
    let query = `SELECT employees.id AS employeesID, employees.first_name AS fName, employees.last_name AS lName FROM employees
    JOIN users ON users.id = employees.user_id
    WHERE job_role = 'Employee'`;
    console.log(query);
    db.query(query)
      .then(data => {
        const employeesNames = data.rows;
        res.json({employeesNames});
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
}


