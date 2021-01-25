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
        <ul>
          {this.state.data.map((element, index) => <li key={index}>{element.name}</li>
          )

          }
          {/* <li>{this.state.data.name}</li> */}
        </ul>
      </div>
    );
  }
}

export default Api;