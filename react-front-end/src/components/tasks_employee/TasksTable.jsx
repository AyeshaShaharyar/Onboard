import * as React from "react";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Paper, Chip, IconButton } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function TasksTable(props) {
  const tasks = props.tasks;

  const table = tasks.map((task) => {
  
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
                  color: '#4caf50', borderColor:'sucess', backgroundColor: "white", fontWeight:'bolder',
                },
              }} /> 
          : 
            <Chip label={task.name}
              component="a"
              href={`/task/${task.id}`}
              style={{ textDecoration: 'none' }}
              variant="contained"
              color="info"
              clickable sx={
                {
                  '&:hover': {
                    color: "#03a9f4", backgroundColor: 'white', fontWeight:'bolder',
                  },
                }} />
          }
        </TableCell>

        <TableCell align="left">{task.description}</TableCell>
        <TableCell align="center">{Math.max(task.pending_days.days, 0)} days</TableCell>
        <TableCell align="center">
          { task.completion ? 
            <IconButton>
              <CheckCircleOutlineIcon color="success"/>
            </IconButton>
          : <IconButton>
              <ErrorOutlineIcon color="info"/>
            </IconButton> }
        </TableCell>

      </TableRow>
    )
  })
  
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: 'bold'}} align="left"></TableCell>
              <TableCell sx={{fontWeight: 'bold'}} align="left">Description</TableCell>
              <TableCell sx={{fontWeight: 'bold'}} align="center">Due Date</TableCell>
              <TableCell sx={{fontWeight: 'bold'}} align="center">Status</TableCell>
            </TableRow>
          </TableHead>
        
          <TableBody>
            {table}
          </TableBody>

        </Table>
      </TableContainer>
    </div>
  )
};