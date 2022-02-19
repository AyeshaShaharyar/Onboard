/*
 * All routes for Employees are defined here
 * Since this file is loaded in server.js into api/employees,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM employees;`)
      .then(data => {
        const employees = data.rows;
        console.log(employees)
        res.json({ employees });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:employee_id/tasks", (req, res) => {
    const employeeId = req.params.employee_id
    const completion = req.query.completion

    let query = `SELECT first_name as fName, name, description, due_date, tasks_employee.id, tasks.id, rating, completion FROM tasks_employee
    JOIN tasks ON task_id = tasks.id
    JOIN employees ON employee_id = employees.id
    WHERE employee_id = $1`;

    if (completion) {
      query = query + ` AND completion = ${completion}`
    }
    query = query + ` ORDER BY name;`

    console.log(query);

    db.query(query, [employeeId])

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

  router.get("/:employee_id/tasks/:task_id", (req, res) => {
    const employeeId = req.params.employee_id
    const taskId = req.params.task_id

    let query = `SELECT name, description, image, content, link, due_date, tasks_employee.id, tasks.id, rating, url, completion FROM tasks_employee
    JOIN tasks ON task_id = tasks.id
    JOIN employees ON employee_id = employees.id
    WHERE employee_id = $1 AND task_id = $2;`;

    db.query(query, [employeeId, taskId])
      .then(data => {
        const task = data.rows;
        res.json({ task })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.patch("/:employee_id/tasks/:task_id", (req, res) => {
    const rating = req.body.rating;
    const employeeId = req.params.employee_id;
    const taskId = req.params.task_id;

    let query = `UPDATE tasks_employee
    SET completion=true, rating=$1
    WHERE employee_id=$2 AND task_id=$3;`;
    db.query(query, [rating, employeeId, taskId])

      .then(data => {
        res.send("update");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  return router;
};
