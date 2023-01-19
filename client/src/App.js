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
import Lecturer from "./components/Lecturer";

function App() {

 const [person, setPerson] = React.useState('')
//  const [displayedItem, setDisplayedItem] = React.useState()


 React.useEffect(()=>{
  const y = localStorage.getItem("role")
  console.log(y)

},[person])



const signedInUser = localStorage.getItem("role")
console.log(signedInUser)




  

  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Switch>
        
        {/* <Route path="/" element={ <Home user={user} handleLogout={handleLogout} /> } /> */}
        {/* <Route exact path="/"> <Login setUser={setUser}></Login></Route> */}
        {/* <Route exact path="/home"> <Login setUser={setUser}></Login></Route> */}
        <Route path="/">
            {signedInUser==="supervisor"? <Supervisor setPerson={setPerson}></Supervisor> : signedInUser==="lecturer"? <Lecturer setPerson={setPerson}></Lecturer> : signedInUser==="student"? <Student setPerson={setPerson}></Student> : <Login setPerson={setPerson} ></Login>}
            </Route>

        </Switch>
    </Router>
  );
}

export default App;
