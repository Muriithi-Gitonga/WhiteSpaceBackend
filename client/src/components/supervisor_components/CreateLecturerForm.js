import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";

const theme = createTheme();

export default function CreateLecturerForm({ setSuccess, handleClose }) {
  const [error, setError] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    fetch("/lecturers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.get("name"),
        institution: data.get("institution"),
        email: data.get("email"),
        password: data.get("password"),
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(console.log);
        setSuccess("Success! New Lecturer Enrolled");
        handleClose();
      } else {
        r.json().then((data) => setError(data.errors));
      }
    });
  };

  const handleGoBack = () => {
    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ borderRadius: "5px", backgroundColor: "white" }}
      >
        <Box
          sx={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{ color: "primary.dark" }}
          >
            Enroll New Lecturer
          </Typography>
          {error ? (
            <Alert sx={{ my: 2 }} severity="error">
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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="institution"
                  label="Institution"
                  type="institution"
                  id="institution"
                  autoComplete="institution"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  id="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Lecturer
            </Button>

            <Button
              fullWidth
              variant="contained"
              sx={{ mb: 2 }}
              onClick={handleGoBack}
            >
              Back to Lecturers
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
