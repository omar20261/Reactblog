import React, { Component } from 'react';
import _ from 'lodash'
import {Route,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getPosts,Root_URL} from '../actions/index';

class Posts extends Component {

  componentDidMount(){
    this.props.getPosts(false);
  }

  renderPosts(){
    return _.map(this.props.posts,(v,k)=>{
      return (
        <div key={v._id} className="list-group-item Post">
          <Link to={`/Post/${v._id}`}>
            <img className="PostImg" src={v.logo?Root_URL+'/render/'+v.logo:'/def-img.svg'} />
            <h4>{(k+1)+' - '+v.name}</h4>
          </Link>
        </div>)
    })
  }

  render() {
    return (
      <div >
        <h1>Posts : <Link to={`/newPost`} className='btn btn-primary'>New Post</Link></h1>
        <ul>{this.renderPosts()}</ul>
      </div>
      )
    }
  }

function mapStateToProps(state) {
  return {posts:state.posts}
}
export default connect(mapStateToProps,{getPosts})(Posts)
