import './App.css';
import Navber from './components/Navber';
import Main from './components/Main';
import Add from './components/Add';
import { useState } from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';



function App() {

  const [mode, setMode]=useState("light");

  const darkTheme = createTheme({
    palette:{
      mode: mode,
    },
  });

  return (
    
      <ThemeProvider theme={darkTheme} >
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navber/>
          <Main mode={mode} setMode={setMode}/>
          <Add/>
        </Box>
      </ThemeProvider>
   
  );
}

export default App;
