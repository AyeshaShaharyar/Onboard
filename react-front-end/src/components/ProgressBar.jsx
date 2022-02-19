import React, { useState, useEffect } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import axios from "axios";


const MIN = 0;
const MAX = 5;
export default function ProgressBar(props) {
  const [completed, setCompleted] = useState(0)
  const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

  // "/tasks/:task_id/:employee_id"
  useEffect(()=>{
    const URL = "/api/users/tasks/3"
    try {
      axios.get(URL)
      .then((response)=>{
          setCompleted(response.data.users.length)
          console.log(response.data);
      })
    } catch (error) {
      
    }
  })

  return (
    <div>
         <LinearProgress variant="determinate" value={normalise(completed)} />
    </div>
  );
}

// MIN = Minimum expected value
// MAX = Maximium expected value
// Function to normalise the values (MIN / MAX could be integrated)



