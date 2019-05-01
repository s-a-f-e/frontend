import React from 'react';
import Image from './image';
import Form from './form';
import './App.css';
 
class App extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="column one">
        <Image />
        </div>

        <div class="column two">
        <Form />
        </div>
      </div>

    );
  }
}
 
export default App;