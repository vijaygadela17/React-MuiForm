import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = ({ target: { name, value } }) => {
    let updatedData = { ...userData };
    updatedData[name] = value;
    setUserData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password === userData.confirmPassword) {
      alert("Registered successfully");
    } else {
      alert("Passwords must match");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ width: '100%', maxWidth: 280, background: "black", padding: 10,paddingTop:3, borderRadius: 3}}>
        <Typography variant="h1" color="primary" fontSize={40} paddingBottom={2} gutterBottom>
          RegisterForm
        </Typography>
        <TextField
          required
          id="outlined-required"
          variant='standard'
          label="Name"
          defaultValue=""
          fullWidth
          size='small'
          sx={{ marginBottom: 2 }}
          onChange={handleChange}
          className="textfield" InputLabelProps={{className: 'textfield'}}
        />

        <TextField
          required
          id="outlined-required"
          variant='standard'
          label="Email"
          defaultValue=""
          type='email'
          fullWidth
          size='small'
          sx={{ marginBottom: 2 }}
          onChange={handleChange}
          className="textfield" InputLabelProps={{className: 'textfield'}}
        />

        <TextField
          required
          id="outlined-required"
          variant='standard'
          label="Password"
          defaultValue=""
          type='password'
          fullWidth
          size='small'
          sx={{ marginBottom: 2 }}
          onChange={handleChange}
          className="textfield" InputLabelProps={{className: 'textfield'}}
        />

        <TextField
          required
          id="outlined-required"
          variant='standard'
          label="Confirm Password"
          defaultValue=""
          type='password'
          fullWidth
          size='small'
          sx={{ marginBottom: 2 }}
          onChange={handleChange}
          className="textfield" InputLabelProps={{className: 'textfield'}}
        />
        <Box sx={{ textAlign: 'left', marginBottom: 2 }}>
          <Checkbox {...label} checked />
          <Typography variant="caption" color="white" gutterBottom>
            Accept Terms and Conditions
          </Typography>
        </Box>
        <Button variant="contained" type='submit' fullWidth>Register</Button>
      </Box>
    </form>
  );
}
