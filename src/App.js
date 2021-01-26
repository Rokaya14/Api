import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Api from './components/api';
import AxiosApi from './components/axiosApi';
import HomePage from './components/homePage';
import Post from './components/Post';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/fetch" component={Api} />
        <Route path="/get" component={AxiosApi} />
        <Route path="/post" component={Post} />

      </Switch>
    </Router>
  );
}

export default App;