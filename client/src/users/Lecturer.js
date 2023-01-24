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
import LecturerStudents from "../components/lecturer_components/LecturerStudents";
import { Drawer } from "../components/common/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Lecturer({ setPerson }) {
  const [students, setStudents] = React.useState([]);

  const user_id = localStorage.getItem("user_id");
  console.log(user_id);

  React.useEffect(() => {
    fetch(`/lecturers/${user_id}`)
      .then((r) => r.json())
      .then((data) => setStudents(data.students));
  }, []);

  const mdTheme = createTheme();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const avatar = (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText>Lecturer 1</ListItemText>
      </ListItemButton>
    </React.Fragment>
  );

  const drawerButtons = (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="My Students" />
      </ListItemButton>

      <Divider sx={{ my: 1 }} />

      <ListItemButton
        onClick={() => {
          localStorage.removeItem("role");
          setPerson(null);
        }}
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </React.Fragment>
  );

  return (
    <ThemeProvider theme={mdTheme}>
      {/* Main surface for displayed items */}
      <Box sx={{ display: "flex" }}>
        {/* Left hand side drawer  */}
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [2.3],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              {" "}
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}{" "}
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
              <LecturerStudents students={students} />
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Lecturer;
