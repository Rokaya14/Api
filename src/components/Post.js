import React, { Component } from 'react';
import axios from 'axios'
class Post extends Component {
  state = {
    name: ''
  }
  handelChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handelSubmit = async (e) => {
    e.preventDefault();
    const user = { name: this.state.name }
    const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
    console.log(res);
    console.log(res.data);

  }

  render() {
    return (
      <div className="container mt-4">
        <h1>POST</h1>
        <form onSubmit={this.handelSubmit}>
          <div className="row" >
            <input
              className="form-control col-6 "
              type="text"
              onChange={this.handelChange}
            />
            <button className="col-2 offset-1 btn btn-info">Submit</button>
          </div>
        </form>

      </div>
    );
  }
}

export default Post;