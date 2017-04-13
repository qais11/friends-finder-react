import React from "react";
import {Switch , Route } from "react-router-dom";
import Landing from "./components/Landing"
import PossibleFriends from "./components/PossibleFriends";
import friendDetails from "./components/friendDetails";
export default (
  <Switch>
      <Route
          component={Landing}
          exact
          path="/"
        />
      <Route
          component={PossibleFriends}
          exact path="/posible-freinds"
        />
      <Route
          component={friendDetails}
          path="/posible-freinds/:friendId"
        />
  </Switch>
);
