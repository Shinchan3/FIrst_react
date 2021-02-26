import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className=" button.btn.danger.btn-danger btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDel}
            onIncrement={this.props.onInc}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
