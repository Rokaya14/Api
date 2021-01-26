import React, { Component } from 'react';
import axios from 'axios'
class Delete extends Component {
  state = {
    id: ""
  }
  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)

    console.log(res);
    console.log(res.data);

  }
  render() {
    return (
      <div className="container mt-4">
        <form onSubmit={this.handleSubmit}>
          <div className="row" >
            <label>
              Person ID:
            </label>
            <input
              className="form-control col-4 "
              type="text"
              name="id"
              onChange={this.handleChange} />
            <button
              className="col-2 offset-1 btn btn-danger"
              type="submit">Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Delete;