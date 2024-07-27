import { Mail, Notifications } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: '#694F8E',
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [logout, setLogout] = useState(false);

  React.useEffect(() =>{
    if(!localStorage.getItem('auth')) {

    }
  },[]);

  const handleClose = () => {
    setOpen(false);
  };

  const logoutHandle = () => {
    localStorage.removeItem('auth');
    setLogout(true);
  };
  if(logout) {
    return <Navigate to="/login" />
  }

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          Vibe
          <span style={{ color: '#FFDFD6'  }}>Hub</span>
        </Typography>
        <ListIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder='search..' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>


          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>


          <Avatar sx={{ width: 30, height: 30 }}
            src="https://img.freepik.com/free-photo/portrait-happy-young-man-white-suit-eyeglasses_1142-51365.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717977600&semt=ais_user"
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} src="https://img.freepik.com/free-photo/portrait-happy-young-man-white-suit-eyeglasses_1142-51365.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717977600&semt=ais_user" />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/profile">Profile</MenuItem>
        {/* <MenuItem onClick={handleClose} component={Link} to="/login">My account</MenuItem> */}
        <MenuItem onClick={logoutHandle} component={Link} to="/logout">Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
