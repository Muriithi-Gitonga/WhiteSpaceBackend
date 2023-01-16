import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../components/Navbar';
import { CssBaseline } from '@mui/material';


function Copyright() { return <Typography variant="body2" color="text.secondary" align="center"> {'Copyright © '} {"2023."} </Typography> }

const theme = createTheme();

export default function Login() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    fetch('/login', {
      method: "POST",
      headers: { "Content-Type": "application/json "},
      body: JSON.stringify({
        email: data.get('email'),
        password: data.get('password'),
      })
    })
    .then((r) => r.json())
    .then(console.log)
    };



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Navbar props="login" /> */}
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.grey[50],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
        </Grid>

        {/* Sign in form on right side */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
            <Avatar sx={{ m: 1, bgColor: 'primary.dark' }}> <LockOutlinedIcon /> </Avatar>
            <Typography component="h1" variant="h5"> Sign in </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
              <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} > Sign In </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      
    </ThemeProvider>
  );
}