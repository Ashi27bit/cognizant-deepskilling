import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = { rupees: '', euro: null };
  }

  handleChange = (event) => {
    this.setState({ rupees: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const conversionRate = 0.011; // approx INR to EUR
    const euro = (this.state.rupees * conversionRate).toFixed(2);
    this.setState({ euro });
  };

  render() {
    return (
      <div>
        <h2>Currency Convertor (INR to EUR)</h2>
        <input
          type="number"
          value={this.state.rupees}
          onChange={this.handleChange}
          placeholder="Enter amount in Rupees"
        />
        <button onClick={this.handleSubmit}>Convert</button>
        {this.state.euro !== null && (
          <p>{this.state.rupees} INR = {this.state.euro} EUR</p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
