import { Avatar, Box, Button, Fab, IconButton, Modal, styled, TextField, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AddComment, EmojiEmotions, GroupAdd, Image, VideoCall } from '@mui/icons-material';

const SytledModal = styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})
const UserBox = styled(Box)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})

const Add = () => {
  const[open, setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick={e=>setOpen(true)}
        title="create" sx={{top:320 ,right: 20, left: "calc(5%)", md: 30 }}>
        <Fab color='#694F8E' aria-label="add">
          <AddComment sx={{ color: '#694F8E', fontSize: 40, }} />
        </Fab>
      </Tooltip>

      {/* mui modal */}
      
      <SytledModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={'white'} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
             <Avatar
              src="https://media.istockphoto.com/id/188104960/photo/cheerful-young-man.jpg?s=612x612&w=0&k=20&c=UIGjQoMxk5rnYMEDS7UFeTw972F5UoYiRZ8mIccTEbA="
              sx={{width:30, height:30}}
             />
             <Typography fontWeight={500} variant="span">
              John Doe
             </Typography>
          </UserBox>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="outlined"
            margin="normal"
          />
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <Box>
              <IconButton color="primary">
                <EmojiEmotions />
              </IconButton>
              <IconButton color="primary">
                <Image />
              </IconButton>
              <IconButton color="primary">
                <VideoCall />
              </IconButton>
              <IconButton color="primary">
                <GroupAdd />
              </IconButton>
            </Box>
            <Button variant="contained" color="primary">
              Post
            </Button>
          </Box>
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;
