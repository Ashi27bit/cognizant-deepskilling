import React, { Component } from 'react';

class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: '',
      complaint: ''
    };
  }

  handleNameChange = (event) => {
    this.setState({ employeeName: event.target.value });
  };

  handleComplaintChange = (event) => {
    this.setState({ complaint: event.target.value });
  };

  generateReferenceNumber = () => {
    return 'REF-' + Math.floor(100000 + Math.random() * 900000);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const refNumber = this.generateReferenceNumber();
    alert(
      `Complaint registered successfully!\nEmployee: ${this.state.employeeName}\nReference Number: ${refNumber}`
    );
    this.setState({ employeeName: '', complaint: '' });
  };

  render() {
    return (
      <div>
        <h2>Complaint Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Employee Name: </label>
            <input
              type="text"
              value={this.state.employeeName}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            <label>Complaint: </label>
            <textarea
              value={this.state.complaint}
              onChange={this.handleComplaintChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ComplaintRegister;
