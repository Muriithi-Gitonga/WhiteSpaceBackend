import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";

const theme = createTheme();

export default function CreateTaskForm({ setSuccess, handleClose }) {
  const [student, setStudent] = React.useState("");
  const [error, setError] = React.useState(null);
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    fetch("/students")
      .then((res) => res.json())
      .then(setStudents);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const supervisorId = localStorage.getItem("user_id");

    fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.get("title"),
        student_id: data.get("student"),
        supervisor_id: supervisorId,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log(data);
          setSuccess(`Sucess! Task ${data.id} Created`);
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
  };

  const handleChange = (event) => {
    setStudent(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ borderRadius: "5px", backgroundColor: "white" }}
      >
        <CssBaseline />

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
            Create Task
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
                  id="title"
                  label="Title"
                  name="title"
                  autoComplete="title"
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel id="Student">Student</InputLabel>
                <Select
                  value={student}
                  labelId="Student"
                  name="student"
                  onChange={handleChange}
                  sx={{ minWidth: 1 }}
                >
                  {students.map((each) => {
                    return (
                      <MenuItem key={each.id} value={each.id}>
                        {each.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create Task
                </Button>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mb: 2 }}
                  onClick={handleGoBack}
                >
                  Back to tasks
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
