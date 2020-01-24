import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "./Home/Home";
import CarList from "./CarList/CarList";
import Confirm from "./Confirm/Confirm";
import Driving from "./Driving/Driving";
import StartCar from "./StartCar/StartCar";

  const Routes =() => {
  return (
    <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route exact path="/carlist">
    <CarList/>
    </Route>
    <Route exact path="/confirm">
    <Confirm/>
    </Route>
    <Route exact path="/driving">
    <Driving/>
    </Route>

    <Route exact path="/startcar">
    <StartCar/>
    </Route>


    </Switch>

  );
}

export default Routes;