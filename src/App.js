import { Grid } from '@mui/material';
import React from 'react';
import Entry from './Entry';
import Exit from './Exit';
import "./App.css";

function App() {
  return (
    <>
    <h1 className='header'>Toll Tax</h1>
<Grid container spacing={2}>
  <Grid xs={6}>
  <Entry/>
  </Grid>
  <Grid xs={6}>
  <Exit/>
  </Grid>
  </Grid>
  </>
  );
}

export default App;
