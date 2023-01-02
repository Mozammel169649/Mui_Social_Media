

import { AccountBox, Group, Home, ModeNight, Pages, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

function Sideber({mode,setMode}) {
  return (
    <Box flex={1}  p={2}  sx={{display:{xs:'none', sm:'block'}}}>
      <Box position='fixed' >
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton component="a" href='#home'>
          <ListItemIcon>
             <Home/>
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>

        <ListItemButton component="a" href='#pages'>
          <ListItemIcon>
             <Pages/>
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>

        <ListItemButton component="a" href='#group'>
          <ListItemIcon>
             <Group/>
          </ListItemIcon>
          <ListItemText primary="Group" />
        </ListItemButton>


        <ListItemButton component="a" href='#marketplace'>
          <ListItemIcon>
             <Storefront/>
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>

        <ListItemButton component="a" href='#friends'>
          <ListItemIcon>
             <Person/>
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>

        <ListItemButton component="a" href='#setting'>
          <ListItemIcon>
             <Settings/>
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItemButton>

        <ListItemButton component="a" href='#profile'>
          <ListItemIcon>
             <AccountBox/>
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>

        <ListItemButton component="a" href='#profile'>
          <ListItemIcon>
             <ModeNight/>
          </ListItemIcon>
          <Switch onClick={()=>setMode (mode === "light" ? "dark" : "light")}/>
        </ListItemButton>
      </List>
     </Box>
    </Box>
  )
}

export default Sideber
