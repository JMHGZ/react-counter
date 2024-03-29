import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrease } = this.props;

    return (
      <div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrease={onDecrease}
            counter={counter}
          />
        ))}
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
