// import * as React from 'react';
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import MuiDrawer from '@mui/material/Drawer';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { mainListItems2, secondaryListItems2, avatar2 } from './ListItems';
// import Navbar from './Navbar';

// const drawerWidth = 240;


// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     '& .MuiDrawer-paper': {
//       position: 'relative',
//       whiteSpace: 'nowrap',
//       width: drawerWidth,
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       boxSizing: 'border-box',
//       ...(!open && {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//           width: theme.spacing(9),
//         },
//       }),
//     },
//   }),
// );

// const mdTheme = createTheme();

// function DashboardContent() {
//   const [open, setOpen] = React.useState(true);
//   const toggleDrawer = () => { setOpen(!open) };

//   return (
//     <ThemeProvider theme={mdTheme}>
//       <Navbar user="student"/>
//       <Box sx={{ display: 'flex' }}>
//         <Drawer variant="permanent" open={open}>
//           <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [2.3] }} >

//             <IconButton onClick={toggleDrawer}>
//             {open? <ChevronLeftIcon /> : <ChevronRightIcon />}
//             </IconButton>
//           </Toolbar>
          
//           <List component="nav">
//             {avatar2}
//           </List>
//           <Divider />

//           <List component="nav">
//             {mainListItems2}
//             <Divider sx={{ my: 1 }} />
//             {secondaryListItems2}
//           </List>
//         </Drawer>


//         <Box
//           component="main"
//           sx={{
//             backgroundColor: (theme) =>
//               theme.palette.mode === 'light'
//                 ? theme.palette.grey[100]
//                 : theme.palette.grey[900],
//             flexGrow: 1,
//             height: '100vh',
//             overflow: 'auto',
//           }}
//         >
//           <Toolbar />
//           <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//             <Grid container spacing={3}>
//               {/* Chart */}
//               <Grid item xs={12} md={8} lg={9}>
//                 <Paper
//                   sx={{
//                     p: 2,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     height: 240,
//                   }}
//                 >
//                   {/* <Chart /> */}
//                 </Paper>
//               </Grid>
//               {/* Recent Deposits */}
//               <Grid item xs={12} md={4} lg={3}>
//                 <Paper
//                   sx={{
//                     p: 2,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     height: 240,
//                   }}
//                 >
//                   {/* <Deposits /> */}
//                 </Paper>
//               </Grid>
//               {/* Students */}
//               <Grid item xs={12}>
//                 <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
//                   {/* <Orders /> */}
//                 </Paper>
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default function Student() {
//   return <DashboardContent />;
// }


        {/* Drawer on left side */}
        {/* <Drawer variant="permanent" open={open}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [2.3] }} >

            <IconButton onClick={toggleDrawer}>
            {open? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Toolbar>
          
          <List component="nav">
            {avatar}
          </List>
          <Divider />

          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer> */}