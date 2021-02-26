import React, { Component } from "react";
class Counter extends Component {
  render() {
    console.log("props", this.props.counter.value);
    return (
      <div>
        <span style={{ fontSize: 20 }} className={this.getBadgeclass()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
                    {this.state.tag.map(lisa=> <li key={lisa}>{lisa}</li>)}
                </ul> */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className=" button.btn.danger.btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeclass = () => {
    let val = "badge badge-";
    val += this.props.counter.value === 0 ? "warning w-2" : "primary  w-2";
    return val;
  };
  formatCount = () => {
    return this.props.counter.value === 0 ? "Haayaa" : this.props.counter.value;
  };
}

export default Counter;
