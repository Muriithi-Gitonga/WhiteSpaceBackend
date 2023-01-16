import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { mainListItems, avatar } from './ListItems';
import Navbar from './Navbar';
import MyTasks from './MyTasks';
import MyStudents from './MyStudents';
import Lecturers from './Lecturers';

// import { Typography } from '@mui/material';
import { Drawer } from "./Drawer"


import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Supervisor() {

  const mdTheme = createTheme();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => { setOpen(!open) };


  const [user, setUser] = React.useState()
  React.useEffect(()=>{ fetch("/supervisors/1").then(res => res.json()).then(setUser)}, [])

  const [drawerClickInfo, setDrawerClickInfo] = React.useState("MyTasks")
  const [displayedItem, setDisplayedItem] = React.useState(<MyTasks props={user} />)

  React.useEffect(()=>{
    if(drawerClickInfo === "My Tasks") { setDisplayedItem(<MyTasks  props={user} />) }
    else if (drawerClickInfo === "My Students") { setDisplayedItem(<MyStudents props={user} />) }
    else if (drawerClickInfo === "Lecturers") { setDisplayedItem(<Lecturers  props={user}/>) }
  },[drawerClickInfo])






const avatar = (
  <React.Fragment>
      <ListItemButton onClick={(event)=>setDrawerClickInfo(event.target.textContent)}>
          <ListItemIcon>
              <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText>
              Supervisor 1
          </ListItemText>
      </ListItemButton>

  </React.Fragment>
)

const drawerButtons = (
  <React.Fragment>
    <ListItemButton onClick={(event)=>setDrawerClickInfo(event.target.textContent)}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="My Tasks" />
    </ListItemButton>

    <Divider sx={{ my: 1 }} />

    <ListItemButton onClick={(event)=>setDrawerClickInfo(event.target.textContent)}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="My Students" />
    </ListItemButton>

    <Divider sx={{ my: 1 }} />
    
    <ListItemButton onClick={(event)=>setDrawerClickInfo(event.target.textContent)}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Lecturers" />
    </ListItemButton>

  </React.Fragment>
);

  return (
    <ThemeProvider theme={mdTheme}>
      
      {/* Main surface for displayed items */}
      <Box sx={{ display: 'flex' }}>
        {/* Left hand side drawer  */}
        <Drawer variant="permanent" open={open}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [2.3] }} >
            <IconButton onClick={toggleDrawer}> {open? <ChevronLeftIcon /> : <ChevronRightIcon />} </IconButton>
          </Toolbar>
          <List component="nav"> {avatar} </List>
          <Divider sx={{ my: 1 }} />
          <List component="nav"> {drawerButtons} </List>
        </Drawer>

        {/* Table */}
        <Box component="main" sx={{  backgroundColor: (theme) => theme.palette.grey[100], flexGrow: 1, height: '100vh', overflow: 'auto'}}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}> 

              { displayedItem }

            </Grid>
          </Container>
        </Box>
      </Box>

    </ThemeProvider>
  );
}

export default Supervisor;

