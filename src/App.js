import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Landing from "./components/Landing";
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path="/"><Landing /></Route>
      </Switch>
    </>
  );
}

export default App;
