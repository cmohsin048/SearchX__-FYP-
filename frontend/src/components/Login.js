import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
// import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Logo from '../main-logo.png';
import { Link } from 'react-router-dom';
import { setLoggedIn } from '../Reducer/Authslice'; // Adjust the path accordingly


const defaultTheme = createTheme();

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const setLoggedIn = useSelector((state) => state.isLoggedIn);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let loginData = {
        email,
        password,
      };

      const response = await axios.post("http://localhost:3200/app/login", loginData);
      
      // Store the JWT token in localStorage
      localStorage.setItem('token', response.data.token);

      // Decode the token to get user information (if needed)
      // const decodedToken = jwtDecode(response.data.token);
      

      // Dispatch the setLoggedIn action to update Redux state
     
      dispatch(setLoggedIn());
      localStorage.setItem('isLoggedIn', 'true');

      alert("Login successful");
      navigate('/');
    } catch (error) {
      console.error(error);
      alert("Unable to login", error);
    }

    // Clear the input fields after submission
    setEmail("");
    setPassword("");
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
              autoComplete="current-password"
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='primary'
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#f57024',
                '&:hover': {
                  backgroundColor: 'black',
                },
              }}
            >
              Sign In
            </Button>
            <Link to="/Register" variant="body2">
              {"Don't have an account? Sign up"}
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
