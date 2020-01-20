import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth.reducer';
import posts from './Posts';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  posts:posts,
});

export default rootReducer;
