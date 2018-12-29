import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Form'

class App extends Component {
  state = {
    fileds: {}
  };
  onSubmit = fileds => {
    this.setState({ fileds });
    // console.log("App component :" , fileds);
  };

  // onChange = updateValue =>{
  //   this.setState( {fileds:
  //     {...this.state.fileds,
  //     ...updateValue}})
  // }
  render() {
    return (
      <div className="App">
        <Form onSubmit={fileds => this.onSubmit(fileds)} />
        <p>
          {/* {JSON.stringify(this.state.fileds, null, 2)} */}
        </p>
      </div>
    );
  }
}

export default App;
