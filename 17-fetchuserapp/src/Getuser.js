import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        this.setState({ user: data.results[0], loading: false });
      })
      .catch(error => {
        console.error('Error fetching user:', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { user, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (!user) {
      return <p>Failed to load user.</p>;
    }

    return (
      <div>
        <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
        <img src={user.picture.large} alt="user avatar" />
      </div>
    );
  }
}

export default Getuser;
