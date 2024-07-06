import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from 'axios';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Logo from '../main-logo.png'
import { Link } from 'react-router-dom';




const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let requestPayload = {
        userName,
        email,
        password
      };


      await axios.post('http://localhost:3200/app/register', requestPayload);
      alert('Registered successfully');
      navigate('/Login');
    } catch (error) {
      console.log(error);
      alert('Unable to register');
    }


    setUserName('');
    setEmail('');
    setPassword('');

  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img className="Main-logo" src={Logo} alt="Logo" style={{ width: '100%', height: '100%' }} />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="Name"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root.Mui-focused': {
                        '& fieldset': {
                          borderColor: '#f57024',
                        },
                      },
                      '&:focus-within label': {
                        color: '#f57024',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    sx={{
                      '& .MuiOutlinedInput-root.Mui-focused': {
                        '& fieldset': {
                          borderColor: '#f57024',
                        },
                      },
                      '&:focus-within label': {
                        color: '#f57024',
                      },
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    sx={{
                      '& .MuiOutlinedInput-root.Mui-focused': {
                        '& fieldset': {
                          borderColor: '#f57024',
                        },
                      },
                      '&:focus-within label': {
                        color: '#f57024',
                      },
                    }}
                    autoComplete="current-password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleTogglePassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                color='primary'
                variant="contained"
                sx={{
                  mt: 3, mb: 2, backgroundColor: '#f57024', '&:hover': {
                    backgroundColor: 'black',
                  }
                }}
              >
                Sign Up
              </Button>
            </Grid>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/Login" variant="body2">
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider >
  );
}