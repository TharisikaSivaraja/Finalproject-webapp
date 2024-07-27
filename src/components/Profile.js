import React, { useState } from 'react';
import { Box, Typography, Avatar, Container, Grid, Paper, TextField, Button } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const Profile = () => {
    const [editMode, setEditMode] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 234 567 890",
        location: "New York, USA",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies, justo ut laoreet laoreet, velit odio fermentum lacus, non hendrerit ipsum mauris sed felis. Praesent sollicitudin velit non tempor scelerisque. In hac habitasse platea dictumst."
    });

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        // Here you can add logic to save user details to a server or local storage
        setEditMode(false);
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Box display="flex" alignItems="center" flexDirection="column">
                    <Avatar
                        alt={userDetails.name}
                        src="/path-to-avatar.jpg"
                        sx={{ width: 120, height: 120, mb: 2 }}
                    />
                    {editMode ? (
                        <TextField
                            name="name"
                            label="Name"
                            value={userDetails.name}
                            onChange={handleChange}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                    ) : (
                        <Typography variant="h4" gutterBottom>
                            {userDetails.name}
                        </Typography>
                    )}
                    {editMode ? (
                        <TextField
                            name="about"
                            label="About Me"
                            value={userDetails.about}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                    ) : (
                        <Typography variant="body1" color="textSecondary" align="center">
                            {userDetails.about}
                        </Typography>
                    )}
                </Box>

                <Box mt={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Box display="flex" alignItems="center">
                                <Email sx={{ mr: 2 }} />
                                {editMode ? (
                                    <TextField
                                        name="email"
                                        label="Email"
                                        value={userDetails.email}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                ) : (
                                    <Typography variant="body1">{userDetails.email}</Typography>
                                )}
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box display="flex" alignItems="center">
                                <Phone sx={{ mr: 2 }} />
                                {editMode ? (
                                    <TextField
                                        name="phone"
                                        label="Phone"
                                        value={userDetails.phone}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                ) : (
                                    <Typography variant="body1">{userDetails.phone}</Typography>
                                )}
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box display="flex" alignItems="center">
                                <LocationOn sx={{ mr: 2 }} />
                                {editMode ? (
                                    <TextField
                                        name="location"
                                        label="Location"
                                        value={userDetails.location}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                ) : (
                                    <Typography variant="body1">{userDetails.location}</Typography>
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box mt={4} display="flex" justifyContent="center">
                    {editMode ? (
                        <Button variant="contained" color="primary" onClick={handleSave}>
                            Save
                        </Button>
                    ) : (
                        <Button variant="contained" color="primary" onClick={() => setEditMode(true)}>
                            Edit
                        </Button>
                    )}
                </Box>
            </Paper>
        </Container>
    );
};

export default Profile;
