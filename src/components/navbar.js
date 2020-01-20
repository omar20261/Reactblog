import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import {loggedIn,logout} from '../services/Auth';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

        <Link to="/" className="navbar-brand">Website Logo</Link>

        <ul className="navbar-nav">
          <Route path="/" exact >
            {({ match }) => <li className={(match ? 'active' : undefined)+' nav-item'}><Link className="nav-link" to="/">Home</Link></li>}
          </Route>

          {loggedIn()?<Route path="/profile" exact>
            {({ match }) => <li className={(match ? 'active' : undefined)+' nav-item'}><Link className="nav-link" to="/profile">Profile</Link></li>}
          </Route>: ''}

          {loggedIn()?<Route path="/Posts" exact>
            {({ match }) => <li className={(match ? 'active' : undefined)+' nav-item'}><Link className="nav-link" to="/Posts">Posts</Link></li>}
          </Route>: ''}

        </ul>

        <ul className="navbar-nav ml-auto">
          {!loggedIn()?<Route path="/login" exact>
            {({ match }) => <li className={(match ? 'active' : undefined)+' nav-item'}><Link className="nav-link" to="/login">login</Link></li>}
          </Route>: ''}

          {!loggedIn()?<Route path="/register" exact>
            {({ match }) => <li className={(match ? 'active' : undefined)+' nav-item'}><Link className="nav-link" to="/register">register</Link></li>}
          </Route>: ''}

          {loggedIn()?<li className={'nav-item'}><a className="nav-link" href="javascript:void(0)" onClick={()=>logout()}>Logout</a></li>: ''}

        </ul>
      </nav>

      )
  }
}
