import axios from 'axios';

export const AUTHENTICAT = 'authenticat_user';
export const REGISTER = 'register_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

export const Root_URL = 'http://localhost:3500';
// const Root_URL = 'http://www.sample-website.com';
export function signInAction(vals,cb) {
  window.showLoader();
  const request = axios.post(`${Root_URL}/auth`,vals).then((d)=>{window.hideLoader();cb(d.data);return d;}).catch((e)=>{cb(e);window.hideLoader();})
    return {
      type:AUTHENTICAT,
      payload:request
    }
}

export function RegisterAction(vals,cb) {
  console.log(vals)
  const request = axios.post(`${Root_URL}/register`,vals).then((d)=>cb(d))
    return {
      type:REGISTER,
      payload:request
    }
}
