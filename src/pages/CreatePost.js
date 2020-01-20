import React, { Component } from 'react';
import {Field,reduxForm} from 'redux-form'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {CreatePost} from '../actions';

class AddPost extends Component{
  constructor(props) {
    super(props);
    this.state = { Iamge: ''};
  }

  renderField(field){
    return (
      <div className={`form-group ${field.meta.touched&&field.meta.error?'has-error':''}`}>
        <label> {field.lable} </label>
        <input className="form-control" {...field.input}/>
        <p className="text-danger">{field.meta.touched?field.meta.error:''}</p>
      </div>
    )
  }

onSubmit(vals){
  vals.logo=this.state.logo
  this.props.CreatePost(vals,()=>{
    window.location.pathname= "/Posts";
  })
}
  render(){
    const {handleSubmit}=this.props;
    return(
      <div className="card">
      <h1 className="card-title">Add Post : </h1>
        <form className="card-body" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <label className={'btn '+(this.state.logo?'btn-primary':'btn-secondary')} htmlFor="ChoseImg">{this.state.logo?'Change Image':'Upload Image'}</label>
          <input id="ChoseImg" type="file"  style={{display: 'none'}} accept="'image/*'" onChange={(e) => this.changeTo64(e.target.files)}/>
          <Field name="name" lable="name" component={this.renderField}  />
          <Field name="tags" lable="tags" component={this.renderField} />
          <Field name="content" lable="content" component={this.renderField} />
          <Link to="/" className="btn btn-outline-danger" style={{float: 'right'}} >Cancel</Link>
          <button type="submit" className="btn btn-outline-primary" style={{float: 'right','marginRight': '10px'}}>Add</button>
        </form>
       </div>
    )
  }

  changeTo64(files){
    this.readAsDataURL(files,(r)=>{
      this.setState({logo:r});
    });
  }

  readAsDataURL(files,cb){
    let Myimg = files[0];
    let myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => { if(cb){cb(myReader.result);} }
    myReader.readAsDataURL(Myimg);
  }
}

function validate(values){
  const errors={}
  if(!values.name){errors.name="Enter a title";}
  if(!values.tags){errors.tags="Enter a tags";}
  if(!values.content){errors.content="Enter a content";}
  return errors;
}

export default reduxForm({
  validate,
  form:'AddNewForm'
})(
  connect(null,{CreatePost})(AddPost)
)
