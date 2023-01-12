import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import GroupsIcon from '@mui/icons-material/Groups';

function Navbar(props) {
  const pages = ['Home', 'About', 'Reviews', 'Contact'];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{justifyContent:"space-evenly"}} >
          {/* Logo and App Name */}
          <Box sx={{display: "flex", flexDirection:"row"}}>
            <GroupsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 5, my:0.5}} />
            <Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}> WHITESPACE </Typography>
          </Box>

          {/* Nav List */}
          <Box sx={{ flexGrow: 1, display: { md: 'flex'}, ml:20}}>
            { pages.map((page) => ( <Button href={page} key={page} sx={{ my: 2, mx:5, color: 'white', display: 'block' }}> {page} </Button> )) }
          </Box>

          { props.props === "login"? 
          null
            :
          <Box >
            <Button href="/login" variant="outlined" sx={{ my: 2, color: 'white', display: 'block', borderColor:"white", mr:2}}> Login </Button> 
          </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;