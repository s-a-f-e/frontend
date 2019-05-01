import React from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
 
class App extends React.Component {
  render() {
    return (
      <SplitterLayout>
        <div>Pane 1</div>
        <div>Pane 2</div>
      </SplitterLayout>
    );
  }
}
 
export default App;