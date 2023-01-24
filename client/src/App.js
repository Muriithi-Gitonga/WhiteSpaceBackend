import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/common/Navbar";
import Login from "./components/common/Login";
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
