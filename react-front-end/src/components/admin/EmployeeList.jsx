import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { useEffect } from 'react';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



export default function EmployeeList(props) {
  const [selectedNames, setSelectedNames] = React.useState([]);
  const [names, setNames] = React.useState([]);
//   let userFullnames = names.map(function(element){
//     return {}
// })


const userFullnames = names.map(element => {
  return {
      ...element,
      userFullname: `${element.fname} ${element.lname}`
  }
})
  useEffect(() => {
  try {
    axios
    .get("/api/admin/new-tasks")
    .then(function (response) {
      
      setNames(response.data.employeesNames)
      console.log(response.data.employeesNames)
    })
  } catch (error) {
    console.log(error);
  }
}, []);



  const handleChange = (event) => {
     try {
    axios
    .get("/api/admin/new-tasks")
    .then(function (response) {
      
      setNames(response.data.employeesNames)
      console.log(response.data.employeesNames)
    })
  } catch (error) {
    console.log(error);
  }
    const {
      target: { value },
    } = event;
    
    setSelectedNames(
      // updatedNameListState
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
      
    );
   
    
  
  };

  useEffect(()=>{
    const updatedListNames = userFullnames.filter((user)=> selectedNames.includes(user.userFullname))
    console.log("upadted", updatedListNames)
    props.setInputs(prevVal => ({
      ...prevVal, 
      selectedEmployees: updatedListNames
    }))
  }, [selectedNames])
 

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedNames}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {userFullnames.map((user,index) => (
            <MenuItem key={index} value={user.userFullname}>
              <Checkbox checked={selectedNames.indexOf(user.userFullname) > -1} />
              <ListItemText primary={user.userFullname} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
