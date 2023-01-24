import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StudentTasks from "../components/student_components/StudentTasks"
import StudentSupervisors from "../components/student_components/StudentSupervisors";
import { Drawer } from "../components/common/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StudentLecturers from "../components/student_components/StudentLecturers"

function Student({ setPerson }) {
  const [tasks, setTasks] = React.useState([]);
  const [supervisors, setSupervisors] = React.useState([]);
  const [lecturers, setLecturers] = React.useState([]);
  // const [studentName, setStudentName] = React.useState([])

  const user_id = localStorage.getItem("user_id");

  React.useEffect(() => {
    fetch(`/students/${user_id}`)
      .then((r) => r.json())
      .then((data) => {
        setTasks(data.tasks);
        setSupervisors(data.supervisor);
        setLecturers(data.lecturer);
        // setStudentName(data.name)
        // console.log(data)
      });
  }, [tasks]);

  const [drawerClickInfo, setDrawerClickInfo] = React.useState("My Tasks");

  const avatar = (
    <React.Fragment>
      <ListItemButton
        onClick={(event) => setDrawerClickInfo(event.target.textContent)}
      >
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        
        <ListItemText> Student 1</ListItemText>
      </ListItemButton>
    </React.Fragment>
  );

  const drawerButtons = (
    <React.Fragment>
      <ListItemButton
        onClick={(event) => setDrawerClickInfo(event.target.textContent)}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="My Tasks" />
      </ListItemButton>

      <Divider sx={{ my: 1 }} />

      <ListItemButton
        onClick={(event) => setDrawerClickInfo(event.target.textContent)}
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="My Supervisor" />
      </ListItemButton>

      <Divider sx={{ my: 1 }} />

      <ListItemButton
        onClick={(event) => setDrawerClickInfo(event.target.textContent)}
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Lecturer" />
      </ListItemButton>
      <Divider sx={{ my: 1 }} />

      <ListItemButton
        onClick={() => {
          setPerson(null);
          localStorage.removeItem("role");
        }}
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </React.Fragment>
  );

  const mdTheme = createTheme();

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <Drawer variant="permanent" open={true}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [2.3],
            }}
          >
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <List component="nav"> {avatar} </List>
          <Divider sx={{ my: 1 }} />
          <List component="nav"> {drawerButtons} </List>
        </Drawer>

        {/* Table */}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {drawerClickInfo === "My Tasks" ? (
                <StudentTasks tasks={tasks} />
              ) : drawerClickInfo === "My Supervisor" ? (
                <StudentSupervisors supervisors={supervisors} />
              ) : drawerClickInfo === "Lecturer" ? (
                <StudentLecturers lecturers={lecturers} />
              ) : (
                <></>
              )}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Student;
