import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signInAction,RegisterAction } from '../actions/index';
import { connect } from 'react-redux';
import {Route,Link} from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { FName: '', LName: '', Email: '', 'Password': '', Password2: '' };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.RegisterAction(this.state, (d)=>{console.log(d)});
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3 card mt-4 pt-4">
          <h2>Create new account</h2>
          <form name="form" onSubmit={this.handleSubmit.bind(this)}>
            <div className='row'>
              <div className='form-group col-md-6'>
                  <label htmlFor="username">First Name</label>
                  <input type="text" className="form-control" name="FName" value={this.state.FName} onChange={this.handleChange.bind(this)} />
              </div>
              <div className='form-group col-md-6'>
                  <label htmlFor="username">Last Name</label>
                  <input type="text" className="form-control" name="LName" value={this.state.LName} onChange={this.handleChange.bind(this)} />
              </div>
            </div>
            <div className={'form-group'}>
                <label htmlFor="username">Email</label>
                <input type="text" className="form-control" name="Email" value={this.state.Email} onChange={this.handleChange.bind(this)} />
            </div>
              <div className={'form-group'}>
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" name="Password" value={this.state.Password} onChange={this.handleChange.bind(this)} />
              </div>
              <div className={'form-group'}>
                  <label htmlFor="password">Repeat Password</label>
                  <input type="password" className="form-control" name="Password2" value={this.state.Password2} onChange={this.handleChange.bind(this)} />
              </div>
              <div className="form-group">
                  <button className="btn btn-primary">Register</button>
              </div>
          </form>
      </div>
    );
  }
}
// function mapStateToProps(state) {
//
// }
export default connect(null, {signInAction,RegisterAction})(Signup);
