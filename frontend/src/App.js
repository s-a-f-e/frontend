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
import ClinicForm from './clinicForm'

class App extends React.Component {
  render() {
    return (
      
      <div>
        <Route exact path="/" render={props => <LandingPage />}
        />
        <Route path="/learnmore" exact render={props => <LearnMore {...props} />} />
        <div className="row">

          

              <Route exact path="/drivers" render={props => <DriverForm {...props} />} />
              <Route exact path="/mothers" render={props => <MotherForm {...props} />}/>
              <Route path="/data" exact render={props => <Data {...props} />} />
              <Route exact path="/clinic" render={props => <ClinicForm {...props} />}/>

          
        </div>
      </div>
    );
  }
}

export default App;
