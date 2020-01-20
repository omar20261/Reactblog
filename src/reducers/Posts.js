import _ from 'lodash'
import {FETCH_POSTS,FETCH_POST} from '../actions';

export default function (state={},action) {
  switch (action.type) {
    case FETCH_POST:
      return {...state,[action.payload.data.doc._id]:action.payload.data.doc}
    case FETCH_POSTS:
      return _.get(action.payload,'data.doc',[])//_.mapKeys(_.get(action.payload,'data.doc',[{'_id':'pp',name:'pppp'}]),'_id')
  }
  return state
}
