/**
 * Created by Administrator on 2018/7/3/003.
 */
import {SET_USER_INFO} from '../constants';

export default  (state = {}, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return Object.assign({}, state, action.data);
    default:
      return state
  }
}