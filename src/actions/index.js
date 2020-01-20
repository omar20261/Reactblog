import axios from 'axios';
import {getToken} from '../services/Auth';
if(getToken()){axios.defaults.headers.common['Authorization'] = getToken();}

export * from './Auth.action';
export * from './Posts.actions';
