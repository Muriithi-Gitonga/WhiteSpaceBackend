import * as React from 'react';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
// import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { mainListItems2, avatar2 } from './ListItems';
import Navbar from './Navbar';
import  MyTasks  from './MyTasks';
import { Drawer } from "./Drawer";



const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => { setOpen(!open) };

  return (
    <ThemeProvider theme={mdTheme}>
      {/* Navigation Bar */}
      <Navbar user="student"/>

      {/* Main items for displayed items */}
      <Box sx={{ display: 'flex' }}>
        {/* Left hand side drawer */}
        <Drawer variant="permanent" open={open}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [2.3] }} >
            <IconButton onClick={toggleDrawer}> {open? <ChevronLeftIcon /> : <ChevronRightIcon />} </IconButton>
          </Toolbar>
          <List component="nav"> {avatar2} </List>
          <Divider sx={{ my: 1 }} />
          <List component="nav">{mainListItems2}</List>
        </Drawer>

        {/* Tasks Table*/}
        <Box component="main" sx={{ backgroundColor: (theme) => theme.palette.grey[100], flexGrow: 1, eight: '100vh', overflow: 'auto' }}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}> 

            
              <MyTasks /> 
              </Grid>
          </Container>
        </Box>
      </Box>

    
    </ThemeProvider>
  );
}

export default function Student() {
  return <DashboardContent />;
}