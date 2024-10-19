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
<<<<<<< HEAD
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: 3/10,
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
          <p>Where are you located?</p>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select current location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>MLK</MenuItem>
              <MenuItem value={20}>Moffitt</MenuItem>
              <MenuItem value={30}>MainStacks</MenuItem>
            </Select>
          </FormControl>
          </Box>
=======
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
          <InputLabel id="demo-simple-select-label">Select Current Location</InputLabel>
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
>>>>>>> afb73d9008000839da3839ef831b8e5dfeebc2d7

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: 7/10,
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
          <p>How is the campus wifi at your current location?</p>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select your response</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>Stable</MenuItem>
              <MenuItem value={20}>Unstable</MenuItem>
              <MenuItem value={30}>Non-connectable</MenuItem>
            </Select>
          </FormControl>
          </Box>
        </Box>
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width: 1/3,
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          > 
            <Button variant="outlined">RESET LOCATION</Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width: 1/3,
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          > 
            <Button variant="outlined">Submit Feedback</Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width: 1/3,
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          > 
            <Button variant="outlined">Clear Response</Button>
          </Box>
        </Box>
      </div>
    </div>
  );

 
    
  






}

export default App;
