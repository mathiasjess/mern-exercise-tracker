import React from 'react';
import {BrowserRouter as Router , Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';

function App() {
  return (
    //This custom tag, creates routes for various urls sepcified
    <Router>
      <Navbar />
        <br/>
          <Route path = "/" exact component = {ExerciseList}></Route>
          <Route path = "/edit/:id" component = {EditExercise}></Route>
          <Route path = "/create" component = {CreateExercise}></Route>
          <Route path = "/user" component = {CreateUser}></Route>  
    </Router>
  );
}

export default App;
