import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters.jsx";
import React, { Component } from 'react';
// import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };
  handleEvent = (counterid) => {
    console.log("event handler called", counterid);
    this.setState({ value: this.state.counters.value - 1 });
    const counters = this.state.counters.filter((c) => c.id != counterid);
    this.setState({ counters });
    // const counters = [...this.state.counters];
    // counters[counterid - 1].value -= 1;
    // console.log(counters[counterid - 1]);
    // this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    console.log("increment from counters");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  render(){
    return(
      <React.Fragment>
      <Navbar totalnum={this.state.counters.filter(c=> c.value>0).length}/>
      <main className="container">
      <Counters
        onReset={this.handleReset}
        onInc={this.handleIncrement}
        onDel={this.handleEvent}
        counters={this.state.counters}
      />
      </main>
      </React.Fragment>
    );
  }
  }

export default App;
