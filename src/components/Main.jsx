
import { Stack } from '@mui/material';
import React from 'react';
import Feed from './Feed';
import Rightber from './Rightber';
import Sideber from './Sideber';
import FackData from '../FackData'



const Main = ({mode,setMode}) => {
  return (
  <Stack direction='row' spacing={2} justifyContent='space-between'>
       <Sideber mode={mode} setMode={setMode}/>
       <Feed FackData={FackData}/>
       <Rightber FackData={FackData}/>
  </Stack>
  )
}

export default Main


