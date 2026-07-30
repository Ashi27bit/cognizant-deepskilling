import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  UpdateEntry = () => {
    this.setState(prevState => ({ entrycount: prevState.entrycount + 1 }));
  };

  UpdateExit = () => {
    this.setState(prevState => ({ exitcount: prevState.exitcount + 1 }));
  };

  render() {
    return (
      <div>
        <h1>Mall Entry/Exit Counter</h1>
        <p>Entry Count: {this.state.entrycount}</p>
        <p>Exit Count: {this.state.exitcount}</p>
        <button onClick={this.UpdateEntry}>Login</button>
        <button onClick={this.UpdateExit}>Exit</button>
      </div>
    );
  }
}

export default CountPeople;
