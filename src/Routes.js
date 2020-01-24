import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "./Home/Home";
import Confirm from "./Confirm/Confirm";
const Routes =() => {

  return (
    <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route exact path="/confirm">
    <Confirm/>
    </Route>
    </Switch>

  );
}

export default Routes;