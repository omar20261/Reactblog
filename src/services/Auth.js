import decode from 'jwt-decode';
import { EventEmitter } from 'events'

  export function getTokenExpirationDate(){
    const token = getToken()?decode(getToken()):false;
    if(!token || !token.exp) {return false}
    const date = new Date(0) // The 0 here is the key, which sets the date to the epoch
    return date.setUTCSeconds(token.exp)
  }

  export function TokenNotExpired(){
    const date = getTokenExpirationDate()
    return (date && date.valueOf() > new Date().valueOf())
  }

  export function loggedIn(){return TokenNotExpired(); }

  export function logout(){localStorage.removeItem('token');window.location.pathname= "/login";
    /*this.router.navigate(['/login']);*/}

  export function storeToken(token){localStorage.setItem("token",token);}

  export function getToken(){return localStorage.getItem("token"); }

  export function getUser(){let token = this.getToken();return token?decode(token):{};}
