import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>

        <AvatarGroup max={8}>
          <Avatar alt="Remy Sharp"
            src="https://www.shutterstock.com/image-photo/adult-female-avatar-image-on-260nw-2419909229.jpg" />
          <Avatar alt="Travis Howard"
            src="https://img.freepik.com/free-photo/close-up-portrait-handsome-smiling-young-man-white-t-shirt-blurry-outdoor-nature_176420-6305.jpg?t=st=1721403408~exp=1721407008~hmac=b10f357cdc25131b01777f37ecbea62292d8fe58710e8a5f9e5c371031c1e6a9&w=360" />
          <Avatar alt="Cindy Baker"
            src="https://img.freepik.com/free-photo/guy-plaid-shirt_158595-125.jpg?ga=GA1.2.363554457.1673938939&semt=ais_user" />
          <Avatar alt="Agnes Walker"
            src="https://img.freepik.com/free-photo/handsome-sensitive-red-head-man-smiling_23-2149509798.jpg?ga=GA1.2.363554457.1673938939&semt=ais_user" />
          <Avatar alt="Trevor Henderson"
            src="https://img.freepik.com/free-photo/close-up-portrait-man-looking-camera-outdoors_23-2148283854.jpg?uid=R67043950&ga=GA1.1.363554457.1673938939&semt=ais_user" />
          <Avatar alt="Trevor Henderson"
            src="https://img.freepik.com/free-photo/close-up-smiley-woman-outdoors_23-2149002410.jpg?uid=R67043950&ga=GA1.1.363554457.1673938939&semt=ais_user" />
          <Avatar alt="Trevor Henderson"
            src="https://img.freepik.com/free-photo/close-up-smiley-woman-outdoors_23-2149002410.jpg?uid=R67043950&ga=GA1.1.363554457.1673938939&semt=ais_user" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://img.freepik.com/free-photo/close-up-smiley-woman-outdoors_23-2149002410.jpg?uid=R67043950&ga=GA1.1.363554457.1673938939&semt=ais_user"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/free-photo/close-up-smiley-woman-outdoors_23-2149002410.jpg?uid=R67043950&ga=GA1.1.363554457.1673938939&semt=ais_user"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/free-photo/close-up-smiley-woman-outdoors_23-2149002410.jpg?uid=R67043950&ga=GA1.1.363554457.1673938939&semt=ais_user"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/free-photo/close-up-smiley-woman-outdoors_23-2149002410.jpg?uid=R67043950&ga=GA1.1.363554457.1673938939&semt=ais_user"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} >
          Latest Conversation
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/close-up-smiley-woman-outdoors_23-2149002410.jpg?uid=R67043950&ga=GA1.1.363554457.1673938939&semt=ais_user" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>

      </Box>
    </Box>
  )
}

export default Rightbar