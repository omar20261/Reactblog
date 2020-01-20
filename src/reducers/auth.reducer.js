import { AUTHENTICAT, REGISTER, AUTHENTICATION_ERROR } from '../actions/index';

export default function(state={}, action) {
  switch(action.type) {
    case AUTHENTICAT:
      return { ...state};
    case REGISTER:
      return { ...state};
    case AUTHENTICATION_ERROR:
      return { ...state, [action.payload.data.doc.msg]:action.payload.data.doc};
  }
  return state;
}
