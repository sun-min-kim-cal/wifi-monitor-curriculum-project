import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

import * as React from 'react';
import Box from '@mui/material/Box';
//import InputLabel from '@mui/material/InputLabel';




function App() {

  
  // const handleChange = (event: React.ChangeEvent) => {
  //   setAge(event.target.value as string);
  // };

  return (
    <div className="App">
      <div style={{
        height: '70vh',
        marginBottom: '1rem',
        borderRadius: '1.5rem',
        borderStyle: 'solid',
        borderWidth: 'thin',
        borderColor: '#25B4E7'
      }}>
        <MapContainer center={[37.8719, -122.2585]} zoom={17} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>


        <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={10}>MLK</MenuItem>
            <MenuItem value={20}>not MLK</MenuItem>
            <MenuItem value={30}>not MLK</MenuItem>
          </Select>
        </FormControl>

        <Button variant="outlined">RESET LOCATION</Button>

        <Button variant="outlined">Submit Feedback</Button>

        <Button variant="outlined">Clear Response</Button>

      </Box>

    </div>

    


    

    


  </div>
  );

 
    
  






}

export default App;
