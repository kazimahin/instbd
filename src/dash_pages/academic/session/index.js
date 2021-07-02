import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import List from "./list"
import Single from "./single"

export default function Admin(props) {
 

  return (
    <div>
      <Switch>
        <Route path="/d/academic/session/:id"><Single></Single></Route>
        <Route path="/d/academic/session/"> <List></List></Route>
      </Switch>
    </div>
  );
}
