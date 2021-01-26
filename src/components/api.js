import React, { Component } from 'react';

class Api extends Component {
  state = {
    data: []
  }
  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const Data = await response.json()
    this.setState({ data: Data })
  }
  render() {
    return (
      <div className="container">
        <h1>Fetch </h1>
        <ul>
          {
            this.state.data.map((element, index) => {
              return <li key={index}>{element.name}</li>
            }
            )}

        </ul>
      </div>
    );
  }
}

export default Api;