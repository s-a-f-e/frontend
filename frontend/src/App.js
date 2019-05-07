import React from "react";
import Image from "./image";
import DriverForm from "./driverform";
import MotherForm from "./motherform";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="column-one one">
          <Image />
        </div>

        <div class="column-two two">
          <Switch>
            <Route path="/" exact render={props => <DriverForm {...props} />} />
            <Route
              path="/mothers"
              exact
              render={props => <MotherForm {...props} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
