import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Supervisor from "./components/Supervisor";
import Student from "./components/Student";
import CssBaseline from '@mui/material/CssBaseline';
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {


  
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Switch>
        {/* <Route path="/" element={ <Home user={user} handleLogout={handleLogout} /> } /> */}
        <Route exact path="/" component={ Login } />
        <Route exact path="/home" component={ Login } />
        <Route path="/supervisor" component={ Supervisor } />
      </Switch>
    </Router>
  );
}

export default App;
