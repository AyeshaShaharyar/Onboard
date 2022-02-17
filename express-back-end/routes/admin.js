const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post("/tasks", (req, res) => {
    const taskFormData = req.body;
    console.log("taskFormData", taskFormData)
    db.query(`INSERT INTO tasks(name, description, image, content, due_date, url, zoom) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING * `,
    [
      req.body.taskday,
      req.body.name,
      req.body.img,
      req.body.description,
      req.body.duedate,
      req.body.video,
      req.body.zoom
    ]
  )
      .then(data => {
        const tasks = data.rows;
        console.log(tasks)
        res.redirect("/tasks");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
}


