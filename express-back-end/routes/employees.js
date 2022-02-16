/*
 * All routes for Employees are defined here
 * Since this file is loaded in server.js into api/employees,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM employees;`)
      .then(data => {
        const employees = data.rows;
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

    let query = `SELECT name, description, due_date, tasks_employee.id, completion FROM tasks_employee
    JOIN tasks ON task_id = tasks.id
    JOIN employees ON employee_id = employees.id
    WHERE employee_id = $1`;

    if (completion) {
      query = query + ` AND completion = ${completion}`
    }
    query = query + `;`

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
  return router;
};
