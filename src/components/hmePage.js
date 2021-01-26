import React from 'react';
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div className="container">
      <h1>Home page</h1>
      <ul>
        <li>
          <Link to="/fetch">fetch Api</Link>
        </li>
        <li>
          <Link to="/get">axios Api </Link>
        </li>
        <li>
          <Link to="/post">post api</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;