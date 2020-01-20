import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signInAction} from '../actions/index';
import { connect } from 'react-redux';
import {Route,Link,Redirect} from 'react-router-dom';
import {ToastContainer} from "react-toastr"
let container;
class login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signInAction(this.state,(d)=>{
      if(!d.success){return container.error(<em>{d.msg}</em>,<strong>Login Error</strong>,{closeButton: true});}
      container.success('',<strong>Login Success</strong>,{  closeButton: true});
      localStorage.setItem("token",d.token);
      window.location.pathname= "/profile";
     });
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3 card mt-4 pt-4">
        <ToastContainer ref={ref => container = ref} className="toast-top-right" />
        <h2>Login</h2>
          <form name="form" onSubmit={this.handleSubmit.bind(this)}>
              <div className={'form-group'}>
                  <label htmlFor="email">Email</label>
                  <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
              </div>
              <div className={'form-group'}>
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} />
              </div>
              <div className="form-group">
                  <button className="btn btn-primary">Login</button>
                  <Link to="/register" className="btn btn-link">Register</Link>
              </div>
          </form>
      </div>
    );
  }
}

export default connect(null, {signInAction})(login);
