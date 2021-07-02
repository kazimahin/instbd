import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import List from "./list"
import Single from "./single"

export default function Admin(props) {
 

  return (
    <div>
      <Switch>
        <Route path="/d/academic/class/:id"><Single></Single></Route>
        <Route path="/d/academic/class/"> <List></List></Route>
      </Switch>
    </div>
  );
}
