import React from 'react';
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from '../src/Components/Navbar';
import ExcercisesList from './Components/ExcercisesList';
import EditExcercises from './Components/EditExcercises';
import CreateExcercise from './Components/CreateExcercise';
import CreateUser from './Components/CreateUser';

const App = () => {
  return (
    <div className="App-Container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExcercisesList} />
        <Route path="/edit/:id" component={EditExcercises} />
        <Route path="/create" component={CreateExcercise} />
        <Route path="/user" component={CreateUser} />

    </div>
  );
}

export default App;
