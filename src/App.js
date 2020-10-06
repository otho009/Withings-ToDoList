import React from "react";
import TodoAppClass from "./TodoAppClass";
import TodoAppHooks from "./TodoAppHooks";

import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      {
         <Switch>
         <Route  exact path="/">
           <TodoAppClass />
         </Route>
         <Route exact path="/hooks">
           <TodoAppHooks />
         </Route>

       </Switch>
      }
    </Router>
  );
}
