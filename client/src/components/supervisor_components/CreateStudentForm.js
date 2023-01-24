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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";



const theme = createTheme();

export default function CreateStudentForm( {setSuccess, handleClose}) {
  const [lecturer, setLecturer] = React.useState("");
  const [error, setError] = React.useState(null);
  const [lecturers, setLecturers] = React.useState([]);

  React.useEffect(() => {
    fetch("/lecturers")
      .then((res) => res.json())
      .then(setLecturers);
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const supervisorId = localStorage.getItem("user_id");


    fetch("/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.get("name"),
        course: data.get("course"),
        start_date: data.get("start_date"),
        end_date: data.get("end_date"),
        department: data.get("department"),
        institution: data.get("institution"),
        email: data.get("email"),
        password: data.get("password"),
        lecturer_id: data.get("lecturer"),
        supervisor_id: supervisorId
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log(data);
          setSuccess("Success! Student Created");
          handleClose();
        });
      } else {
        r.json().then((data) => setError(data.errors));
      }
    });

  };

  const handleGoBack = () => {
    handleClose();
    setError(null);
  }

  const handleChange = (event) => {
    setLecturer(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ borderRadius: "5px", backgroundColor: "white" }}>
        <Box
          sx={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >

          <Typography component="h1" variant="h5"             sx={{ color: "primary.dark" }}
>
            Enroll New Student
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
                  name="course"
                  label="Course"
                  type="course"
                  id="course"
                  autoComplete="course"
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="start_date"
                label="Start_date"
                type="start_date"
                id="start_date"
                autoComplete="start_date"
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="end_date"
              label="End_date"
              type="end_date"
              id="end_date"
              autoComplete="end_date"
            />
          </Grid>
          <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="department"
            label="Department"
            type="department"
            id="department"
            autoComplete="department"
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


      <Grid item xs={12}>
                <InputLabel id="Lecturer">Lecturer</InputLabel>
                <Select
                  value={lecturer}
                  labelId="Lecturer"
                  name="lecturer"
                  onChange={handleChange}
                  sx={{ minWidth: 1 }}
                >
                  {lecturers.map((each) => {
                    return (
                      <MenuItem key={each.id} value={each.id}>
                        {each.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enroll New Student
            </Button>

            <Button
              fullWidth
              variant="contained"
              sx={{ mb: 2 }}
              onClick={ handleGoBack   
              }
            >
              Back to Students
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
