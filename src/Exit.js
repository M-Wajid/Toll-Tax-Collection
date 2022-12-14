import React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import DatePicker from 'react-date-picker';
import { useState } from 'react';
import axios from 'axios';
const API = 'https://crudcrud.com/api/ad4d2984ac1148c39cdd81540d988694/user'

const distance = {
    "PIMS": 0,
    "Ibn e Sina": 10,
    "Kashmir Highway": 25,
    "Faizabad": 40,
    "Chandani Chowk": 60,
    "Saddar": 80
};

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function Exit() {
    
    const [bill, setBill] = useState('');

    const [newstation, setNewStation] = useState('');
  
    const handleChange = (event) => {
      setNewStation(event.target.value);
    };

    const [number_plate, setNumberPlate] = useState('');
  
    const handleChange2 = (event) => {
      setNumberPlate(event.target.value);
    };

    const [date, setDate] = useState(new Date());

    const getData = async () =>
    {
      const currentDay = weekdays[date.getDay()];
      await axios.get(API)
      .then (res => {
        console.log(number_plate);
        var index = res.data.findIndex(item => item.number_plate === number_plate);
        console.log(res.data[index].number_plate)
        console.log(index);
        console.log(res.data[index].station);
        let oldStation = res.data[index].station;

        // why set Previous Station was running after printing bill.
        if (["Saturday", "Sunday"].includes(currentDay)) {
          setBill(20 + (1.5 * 0.2 * Math.abs(distance[newstation]-distance[oldStation])));
          // why console.log(bill); show previous bill result here?
        }
        else{
          setBill(20 + 0.2 * Math.abs(distance[newstation]-distance[oldStation]));
        }
        // for delete
        //let x = res.data[index]._id.toString();
        //let id_url = API + '/' + x ;
        //axios.delete(id_url);
      }).catch(err => {
        console.log(err);
      })
      }

    return (
      <div>
    <Box sx={{margin: 15, width: '50%'}}>
    <h2>Exit</h2>
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
      value={newstation}
      label="Station"
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
  value={number_plate} 
  label="Number Plate" 
  variant="outlined"
  onChange={handleChange2} />
  <DatePicker onChange={setDate} value={date} />
  <Button
  onClick={getData}
>
  Get Bill
</Button>
  </Box>
  <h3>***Your Tax is***</h3>
  <p>Base rate:     Rs 20</p>
  <p>Total Tax:     Rs {bill}</p>
  </Box>
      </div>
    );
  }
  
  export default Exit;