// import PropTypes from 'prop-types';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Form, FormikProvider, useFormik } from 'formik';
// // material
// import {
//   Box,
//   Card,
//   Checkbox,
//   CardHeader,
//   // Typography,
//   // FormControlLabel,
//   // Stack
// } from '@mui/material';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Card, CardHeader } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import FolderIcon from "@mui/icons-material/Folder";

export default function InteractiveList(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const URL = "/api/employees/3/tasks";
    try {
      axios.get(URL).then((response) => {
        setTasks(response.data.employeesTasks);
        
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const descriptionp = props.description;
  // const dueDatep = props.dueDate;
  // const completionp = props.completion;
  const taskList = tasks.map((task) => {
    return (
      <ListItem key={task.id}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={task.description}/>
      
      </ListItem>
    );
  });

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-end"
    >
      <Card>
        <CardHeader title="Upcoming Schedule" />
        <Box sx={{ flexGrow: 1 }}>
          <Grid item xs={12} md={12} lg={12}>
            <List>{taskList}</List>
          </Grid>
        </Box>
      </Card>
    </Grid>
  );
}

// // ----------------------------------------------------------------------

// // const TASKS = [];

// // ----------------------------------------------------------------------
// {
//   /*
// // // TaskItem.propTypes = { */
// }
// //   task: PropTypes.string,
// //   checked: PropTypes.bool,
// //   formik: PropTypes.object
// // };

// // function TaskItem({ checked, formik, ...other }) {
// //   const { getFieldProps } = formik;

// //   return (
// //     <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>
// //       <FormControlLabel
// //         control={<Checkbox {...getFieldProps('checked')} checked={checked} {...other} />}
// //         label={
// //           <Typography
// //             variant="body2"
// //             sx={{
// //               ...(checked && {
// //                 color: 'text.disabled',
// //                 textDecoration: 'line-through'
// //               })
// //             }}
// //           >
// //             {/* {tasks.map((task) => { return {task.description}})} */}
// //           </Typography>
// //         }
// //       />
// //     </Stack>
// //   );
// // }

// export default function AppTasks() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const URL = '/api/users/tasks';
//     try {
//       axios.get(URL).then((response) => {
//         setTasks(response.data.users);
//         console.log(response.data.users);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);
//   const formik = useFormik({
//     initialValues: {
//       checked: [tasks]
//     },
//     onSubmit: (values) => {
//       console.log(values);
//     }
//   });

//   const { values, handleSubmit } = formik;

//   return (
//     <Card>
//       <CardHeader title="Tasks" />
//       <Box sx={{ px: 3, py: 1 }}>
//         <FormikProvider value={formik}>
//           {tasks.map((task) => (
//             <TaskItem
//               key={task}
//               task={task}
//               formik={formik}
//               checked={values.checked.includes(task)}
//             />
//           ))}
//         </FormikProvider>
//       </Box>
//     </Card>
//   );
// }
