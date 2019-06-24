import React from "react";
import Image from "./image";
import DriverForm from "./driverform";
import MotherForm from "./motherform";
import Data from "./existingData"
import "./App.css";
import { Route, Switch} from "react-router-dom";
import Login from "./components/login";

class App extends React.Component {
  render() {
    return (
      <div className="login">
        <Route exact path="/" render={props => <Login {...props}/>}
      />
        <div className="row">
          <div className="column-one one">
            <Image />
          </div>

          <div className="column-two two">
            <Switch>
              <Route exact path="/drivers" render={props => <DriverForm {...props} />} />
              <Route
                exact
                path="/mothers"
                render={props => <MotherForm {...props} />}
              />
              <Route path="/data" exact render={props => <Data {...props} />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
