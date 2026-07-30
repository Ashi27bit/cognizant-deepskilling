import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.sayHello();
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  sayHello = () => {
    console.log('Hello, the counter was incremented!');
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handlePress = (event) => {
    alert('I was clicked');
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={() => this.sayWelcome('welcome')}>Say Welcome</button>
        <button onClick={this.handlePress}>Synthetic OnPress</button>
      </div>
    );
  }
}

export default Counter;
