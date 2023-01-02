import React, { useState } from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader,
   CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

  

const Post = ({post}) => {
  const {desc, photo, date, profilePicture, username, like, comment}=post
  

  const [Like, setlike]=useState(like);
  const [isLiked,setIsLiked]=useState(false);

  const likeHandler = ()=>{
    setlike(isLiked ? Like-1 : Like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div>
    <Card sx={{margin:5,}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" sx={{width:30, height:30, objectFit:'cover'}} src={profilePicture}/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={username}
        subheader={date}
      />
     

       <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
         {desc}
        </Typography>
      </CardContent>
      
      <CardMedia
        component='img'
        height='20%'
        image={photo}
        title="Paella dish"
      />
     
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={likeHandler}>
          <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} name="checkedH" />
        </IconButton>
        <span>{Like}</span>
        <IconButton aria-label="share" sx={{ml:2}}>
          <Share />
        </IconButton>
        <Typography variant='span' sx={{ml:"calc(60%)", cursor:"pointer" }}>{comment} Coments</Typography>
      </CardActions>

      

    </Card>
    </div>
  )
}

export default Post
