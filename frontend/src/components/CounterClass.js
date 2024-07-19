import React from "react";


class CounterClass extends React.Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);//bind the function with class
    this.state ={
        number: 0
    }
  }

  increment() {
    this.setState({
        number: this.state.number + 1
        //number: ++this.state.number
    })
  }

  render() {
    return (
      <div>
        <h1>Counter = {this.state.number}</h1>
        <button onClick={this.increment}>Increment</button>
        <hr/>
      </div>
    );
  }
}


export default CounterClass;