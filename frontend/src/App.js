import React from "react";
import Image from "./image";
import DriverForm from "./driverform";
import MotherForm from "./motherform";
import Data from "./existingData"
import "./App.css";
import { Route, Switch} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="column-one one">
          <Image />
        </div>

        <div className="column-two two">
          <Switch>
            <Route path="/" exact render={props => <DriverForm {...props} />} />
            <Route
              path="/mothers"
              exact
              render={props => <MotherForm {...props} />}
            />
            <Route path="/data" exact render={props => <Data {...props} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
