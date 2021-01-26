import React, { Component } from 'react';
import axios from 'axios';
class AxiosApi extends Component {
  state = {
    persons: []
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons })
      })
  }
  render() {
    return (
      <div className="container">
        <h1>Axios Get</h1>
        <ul>
          {this.state.persons.map((element, index) => <li key={index}>{element.username}</li>)}
        </ul>
      </div>
    );
  }
}

export default AxiosApi;