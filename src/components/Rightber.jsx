import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function Rightber({FackData}) {
  const topItem = FackData.slice(3,6);
  const Conversation =FackData.slice(7,10);
  return (
    <Box flex={2} p={2} sx={{display:{xs:'none', sm:'block'}}}>
      <Box position="fixed" width={300} >
         <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Online Friends</Typography>

       <AvatarGroup max={7}>
        {
          FackData.map(data => <Avatar alt="Remy Sharp" src={data.profilePicture} />)
        }
         
       </AvatarGroup>

       <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>

       <ImageList cols={3} rowHeight={100} gap={5}>

       {
        topItem.map(item => {
          return (
            <ImageListItem>
                 <img src={item.photo} alt="" />
            </ImageListItem>
         )
        })
       }
        
      
       </ImageList>
       <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversation</Typography>

        <List>
          {
             Conversation.map( item =>{
              return (
                    <div>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar alt="Remy Sharp" src={item.profilePicture} />
                            </ListItemAvatar>
                            <ListItemText
                              primary={item.username}
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    
                                    color="textPrimary"
                                  >
                                    Ali Connors
                                  </Typography>
                                  {" — I'll be in your…"}
                                </React.Fragment>
                              }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </div>
            )})}
        
        </List>

      </Box>
    </Box>
  )
}
export default Rightber
