import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Alert from "@mui/material/Alert";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {" "}
      {"Copyright © "} {"2023."}{" "}
    </Typography>
  );
}

const theme = createTheme();

export default function Login({ setPerson }) {
  const [error, setError] = React.useState(null);
  //When radio buttons are clicked,  role is stored in state
  const [role, setRole] = React.useState("");
  function handleChange(e) {
    setRole(e.target.value);
  }

  // When Login form is submitted, role is passed to backend as part of headers, and the form content as body
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json ",
        role: role,
      },
      body: JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          // If login is successful, we store user's data in localStorage, and call setRole to re-render App.js
          // (this time the component will have information in LocalStorage, therefore will render dashboard instead of Login)
          localStorage.setItem("token", data.token);
          localStorage.setItem("user_id", data.user.id);
          localStorage.setItem("role", role)

          setPerson(role);
        });
      } else {
        r.json().then((data) => {
          setError(data.error);
        });
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/*Image on the left */}
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) => t.palette.grey[50],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>

        {/* Sign in form on right  */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.dark" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {error ? (
              <Alert sx={{ mt: 2 }} severity="error">
                {error}
              </Alert>
            ) : (
              <></>
            )}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              {/* User type selection */}
              <FormControl sx={{ mt: 2, ml: 1 }}>
                <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  sx={{ display: "flex", flexDirection: "row" }}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="supervisor"
                    control={<Radio />}
                    label="Supervisor"
                  />
                  <FormControlLabel
                    value="lecturer"
                    control={<Radio />}
                    label="Lecturer"
                  />
                  <FormControlLabel
                    value="student"
                    control={<Radio />}
                    label="Student"
                  />
                </RadioGroup>
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
