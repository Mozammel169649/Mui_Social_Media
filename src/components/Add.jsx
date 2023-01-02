import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, PlayCircle} from '@mui/icons-material'
import { Box, Fab, Modal, styled, Tooltip, Typography, Avatar, TextField, ButtonGroup, Button } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'

const Add = () => {
  const [open, setOpen]=useState(false)
  const StyleModal =styled(Modal)({
    display:"flex",
    alignItems:'center',
    justifyContent:"center",
  })

  const UserBox =styled(Box)({
    display:"flex",
    alignItems:'center',
    gap:"10px",
    marginBottom:"20px"
  })


  return (
    <>
        <Tooltip onClick={()=>setOpen(true)} title="Add" aria-label="add" sx={{position:"fixed", bottom:20, left:{xs:"calc(48%)", md:30}}}>
            <Fab color="primary">
                <AddIcon/>
            </Fab>
        </Tooltip>

         <StyleModal
            open={open}
            onClose={()=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box height={280} width={400} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
              <Typography variant='h6' color='gray' textAlign="center">Create post</Typography>

              <UserBox>
                <Avatar sx={{width:30, height:30}} 
                alt="Travis Howard"
                src="https://www.copeman.nz/wp-content/gallery/professional-profile-pictures/Business-portraits-3351.jpg" />
                <Typography fontWeight={500} variant="span">John Don</Typography>
            </UserBox>

            <TextField
              sx={{width:"100%"}}
              multiline
              rows={3}
              placeholder="What's on your minde..?"
              variant="standard"
            />

            <Stack direction='row' gap={1} mt={2} mb={3}>
               <EmojiEmotions color='primary'/>
               <Image color='secondary'/>
               <PlayCircle color='success'/>
               <PersonAdd color='error'/>
            </Stack>

            <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
              <Button >Post</Button>
              <Button sx={{width:'100px'}}><DateRange/></Button>
            </ButtonGroup>

            </Box>
          </StyleModal>
   </>
  )
}
export default Add
