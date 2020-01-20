import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route ,Switch,Redirect} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Profile from './pages/profile';
import Login from './pages/login';
import Posts from './pages/Posts';
import AddPost from './pages/CreatePost';
import Signup from './pages/signup';
import reducers from './reducers';
import {loggedIn} from './services/Auth';
import promise from 'redux-promise';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise/*reduxThunk*/)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" render={()=>loggedIn()?<Redirect to="/"/>:<Login/>}/>
          <Route path="/register" component={Signup} />
          <Route path="/profile" render={()=>loggedIn()?<Profile/>:<Redirect to="/login"/>}/>
          <Route path="/Posts" render={()=>loggedIn()?<Posts/>:<Redirect to="/login"/>}/>
          <Route path="/newPost" render={()=>loggedIn()?<AddPost/>:<Redirect to="/login"/>}/>
          <Route path="*" exact render={()=>{ return (<h1 className="notFound" >Page not found </h1>)} }/>
        </Switch>
      </div>
      </Router>
  </Provider>, document.querySelector('#root'));

registerServiceWorker();
