import axios from 'axios';

export const FETCH_POSTS='fetch_posts';
export const FETCH_POST='fetch_post';
export const CREATE_POSTS='cteate_post';
const Root_URL = 'http://localhost:3500';
// const Root_URL = 'http://www.sample-website.com';
export function getPosts(cb) {
  window.showLoader();console.log('===showLoader===');
  const request = axios.get(`${Root_URL}/api`).then((d)=>{window.hideLoader(); if(cb){cb(d.data)} return d;}).catch(()=>{window.hideLoader();})
    return {
      type:FETCH_POSTS,
      payload:request
    }
}

export function CreatePost(vals,cb) {  window.showLoader();
  const request = axios.post(`${Root_URL}/api`,vals).then((d)=>{window.hideLoader();cb(d.data)}).catch(()=>{window.hideLoader();})
    return {
      type:CREATE_POSTS,
      payload:request
    }
}
