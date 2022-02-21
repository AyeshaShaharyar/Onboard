import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Chip";
import { useNavigate } from "react-router-dom";


import FormDialog from "./FeedbackForm";

export default function TasksTable(props) {
  const [search, setSearch] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  let navigate = useNavigate();

  function handleClick() {
    // return navigate("/admin/feedback", { replace: true });
    // return <FeedbackForm />;
    setIsOpen(true);
  }

  const tasks = props.tasks;

  const table = tasks
    .filter((task) => task.fname.toLowerCase().includes(search.toLowerCase()))
    .map((task, index) => {
      return (
        <TableRow
          key={index}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell align="left">{task.employeesid}</TableCell>
          <TableCell align="left">
            {task.fname} {task.lname}
          </TableCell>
          <TableCell component="th" scope="row">
            {task.completion ? (
              <Chip
                label={task.name}
                component="a"
                href={`/tasks/${task.id}`}
                style={{ textDecoration: "none" }}
                variant="outlined"
                color="success"
                clickable
                sx={{
                  "&:hover": {
                    color: "#4caf50",
                    backgroundColor: "white",
                  },
                }}
              />
            ) : (
              <Chip
                label={task.name}
                component="a"
                href={`/tasks/${task.id}`}
                style={{ textDecoration: "none" }}
                variant="outlined"
                color="info"
                clickable
                sx={{
                  "&:hover": {
                    color: "#03a9f4",
                    backgroundColor: "white",
                  },
                }}
              />
            )}
          </TableCell>
          <TableCell align="left">{task.description}</TableCell>
          <TableCell align="center">{task.due_date}</TableCell>

          <TableCell align="center">
            {task.completion ? (
              <Chip
                label="COMPLETED"
                variant="contained"
                component="a"
                color="success"
                clickable
                sx={{
                  "&:hover": {
                    color: "#4caf50",
                    backgroundColor: "white",
                  },
                }}
                onClick={handleClick}
              />
            ) : (
              <Chip
                label="PENDING"
                variant="contained"
                component="a"
                color="info"
                sx={{
                  "&:hover": {
                    color: "#03a9f4",
                    backgroundColor: "white",
                  },
                }}
                // clickable
                // onClick={handleClick}
              />
            )}
          </TableCell>
          <TableCell align="left">{task.rating}</TableCell>
          <TableCell>
            
            <FormDialog visible={isOpen} />
          </TableCell>
        </TableRow>
      );
    });

  return (
    <div>
      <h1>Tasks</h1>
      <input type="text" onChange={handleSearch} value={search} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Search</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Task Day</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="center">Due Date</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{table}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
