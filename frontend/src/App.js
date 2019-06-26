import React from "react";
import Image from "./image";
import DriverForm from "./driverform";
import MotherForm from "./motherform";
import Data from "./existingData"
import "./App.css";
import { Route, Switch} from "react-router-dom";
import Login from "./components/login";
import LandingPage from './landingPage'
import LearnMore from "./components/LearnMore";

class App extends React.Component {
  render() {
    return (
      
      <div>
        <Route exact path="/" render={props => <LandingPage {...props}/>}
        />
        {/* <Route path="/learnmore" exact render={props => <LearnMore {...props} />} /> */}
        <div className="row">
          <div className="column-one one">
            <Image />
          </div>
          <div className="column-two two">

              <Route exact path="/drivers" render={props => <DriverForm {...props} />} />
              <Route
                exact
                path="/mothers"
                render={props => <MotherForm {...props} />}
              />
              <Route path="/data" exact render={props => <Data {...props} />} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
