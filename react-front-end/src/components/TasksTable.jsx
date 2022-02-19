import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import dayjs from 'dayjs';


export default function TasksTable(props) {
  const tasks = props.tasks;
 
  const table = tasks.map((task) => {
    // const end_date = dayjs(task.start_date).add
    return (

      <TableRow
        key={task.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >

        <TableCell component="th" scope="row">
          {task.completion ?
            <Chip label={task.name}
              component="a"
              href={`/task/${task.id}`}
              style={{ textDecoration: 'none' }}
              variant="contained"
              color="success"

              clickable
              sx={{
                '&:hover': {
                  color: '#4caf50', backgroundColor: "white"
                },
              }} /> : <Chip label={task.name}
                component="a"
                href={`/task/${task.id}`}
                style={{ textDecoration: 'none' }}
                variant="contained"
                color="info"
                clickable sx={
                  {
                    '&:hover': {
                      color: "#03a9f4", backgroundColor: 'white'
                    },
                  }} />
          }

        </TableCell>
        <TableCell align="left">{task.description}</TableCell>
        <TableCell align="center">{task.due_date}</TableCell>
        <TableCell align="center">

          {task.completion ?
            <Chip label="COMPLETED" variant="outlined" component="a" color="success" /> : <Chip label="PENDING" variant="outlined" component="a" color="info" />}

        </TableCell>

      </TableRow>

    )
  })
  return (
    <div><h1>Tasks</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="center">Due Date</TableCell>
              <TableCell align="center">Status</TableCell>
          
            </TableRow>
          </TableHead>
          <TableBody>
            {table}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}