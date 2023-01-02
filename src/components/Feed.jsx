import { Box,} from '@mui/material'
import React from 'react'
import Post from './Post'

function Feed({FackData}) {
  return (
    <Box flex={4}  p={2} >
    { FackData.map(e=><Post post={e}/>)}
    </Box>
  )
}

export default Feed
