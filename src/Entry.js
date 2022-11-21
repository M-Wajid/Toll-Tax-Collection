import React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import DatePicker from 'react-date-picker';
import { useState } from 'react';
import axios from 'axios';
const API = 'https://crudcrud.com/api/ad4d2984ac1148c39cdd81540d988694/user'

function Entry() {

    const [station, setStation] = useState('');
  
    const handleChange = (event) => {
      setStation(event.target.value);
    };

    const [number_plate, setNumberPlate] = useState('');
  
    const handleChange2 = (event) => {
      setNumberPlate(event.target.value);
    };


    const [date, setDate] = useState(new Date());

    const postData = async () => {
      const body = {
        station: station,
        number_plate: number_plate,
        date: date
        }
        await axios.post(API, body)
        alert("Data Sent")
        }

    return (
      <div>
    <Box sx={{ margin: 15, width: '50%'}}>
    <h2>Entry</h2>
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
    <FormControl>
    <InputLabel id="demo-simple-select-label">Station</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Station"
      value={station}
      onChange={handleChange}
    >
      <MenuItem value="PIMS">PIMS</MenuItem>
      <MenuItem value="Ibn e Sina">Ibn e Sina</MenuItem>
      <MenuItem value="Kashmir Highway">Kashmir Highway</MenuItem>
      <MenuItem value="Faizabad">Faizabad</MenuItem>
      <MenuItem value="Chandani Chowk">Chandani Chowk</MenuItem>
      <MenuItem value="Saddar">Saddar</MenuItem>
    </Select>
  </FormControl>
  <TextField maxWidth="350" 
  id="outlined-basic"
  label="Number Plate" 
  value={number_plate} 
  variant="outlined"
  onChange={handleChange2} />
  <DatePicker onChange={setDate} value={date} />
  <Button
  onClick={postData}
>
  Submit
</Button>
  </Box>
  </Box>
      </div>
    );
  }
  
  export default Entry;