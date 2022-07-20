import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { PrivateRoute } from './auth/PrivateRoute';
import Public from './components/Public';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import './App.scss';

export default function App() {
  return (
    <Router>
    <div className="App">
      <nav className='nav-wrapper'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='login'>Login</Link>
        </li>
        <li>
          <Link to='/friendslist'>Freinds List</Link>
        </li>
      </ul>
      </nav>
      <Route exact path='/' component={Public} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/friendslist' component={FriendsList} />
    </div>
    </Router>
  );
}
