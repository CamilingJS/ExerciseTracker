import React from 'react';
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from '../src/Components/Navbar';
import ExercisesList from './Components/ExercisesList';
import EditExercises from './Components/EditExercises';
import CreateExercise from './Components/CreateExercise';
import CreateUser from './Components/CreateUser';

const App = () => {
  return (
    <div className="App-Container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercises} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />

    </div>
  );
}

export default App;
