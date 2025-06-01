import React from 'react'
import Box from '@mui/material/Box';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import TextField from '@mui/material/TextField';
import FaceIcon from '@mui/icons-material/Face';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import { Divider, IconButton, Stack, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { AccountCircle } from '@mui/icons-material';


const Chat = (Reciver_Name) => {
  Reciver_Name = "ahmed";

  return (
  
    <Box container  sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
      >
        <Typography variant="h3" component="h3" sx={{ mt: 4 }}>
          Chat Page
        </Typography> 
        <Paper elevation={3}  size="medium"  
        sx={{ mt: 8, p: 4 }}>
   
      <Box sx={{ display: 'flex', flexDirection: 'column', spacing: 2 }}>
        <Box sx={{ mb: 2 }} size="large" fontSize={20}> chat with : {Reciver_Name}</Box>
        <Divider sx={{ mb: 2 }} />
        <TextField sx={{ mb: 2, border: 'none' }}  variant="standard" disabled type="text" placeholder="Hi asmaa" label="Ahmed" slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          },
        }}
        />
       <TextField sx={{ mb: 15, border: 'none' }}  variant="standard" disabled type="text" placeholder="Hi ahmed" label="Asmaa" slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          },
        }}
        />

        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <TextField   type="text" placeholder="Type your message here..." slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AddReactionIcon />
              </InputAdornment>
            ),
          },
         
        }} />
        <IconButton type="submit"><SendIcon color='primary' /></IconButton>
</Stack>

      </Box>
      </Paper>
    </Box>
  )
}

export default Chat