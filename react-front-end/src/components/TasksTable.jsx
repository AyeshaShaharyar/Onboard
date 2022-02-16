import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import TaskOfDay from './TaskOfDay';

export default function TasksTable(props) {
  const tasks = props.tasks;
  // const descriptionp = props.description;
  // const dueDatep = props.dueDate;
  // const completionp = props.completion;
  // taskOfDay={task}
  const table = tasks.map((task) => {
return (

   <TableRow
    hover role="checkbox"
    key={task.name}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
  
    <TableCell component="th" scope="row">
    {task.completion ? 
      <Chip label={task.name}
        component="a"
        href= {`/task/${task.id}`}
        style={{ textDecoration: 'none' }}
        variant="outlined"
        color="success"
        clickable/> : <Chip label={task.name}
        component="a"
        href= {`/task/${task.id}`}
        style={{ textDecoration: 'none' }}
        variant="outlined"
        color="info"
        clickable/>
        }
        
    </TableCell>
    <TableCell align="left">{task.description}</TableCell>
    <TableCell align="center">{task.due_date}</TableCell>
    <TableCell align="center"> 

      {task.completion ? 
      <Chip label="COMPLETED" component="a" color="success"/> : <Chip label="PENDING" component="a" color="info"/>}
      
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