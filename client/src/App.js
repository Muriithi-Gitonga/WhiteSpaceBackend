import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Supervisor from "./users/Supervisor";
import Student from "./users/Student";
import Lecturer from "./users/Lecturer";

function App() {
  const [person, setPerson] = React.useState();

  const signedInUser = localStorage.getItem("role");

  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/">
          {signedInUser === "supervisor" ? (
            <Supervisor setPerson={setPerson}></Supervisor>
          ) : signedInUser === "student" ? (
            <Student setPerson={setPerson}></Student>
          ) : signedInUser === "lecturer" ? (
            <Lecturer setPerson={setPerson}></Lecturer>
          ) : (
            <Login setPerson={setPerson}></Login>
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
