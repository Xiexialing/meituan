/**
 * Created by Administrator on 2018/7/3/003.
 */
import {SET_USER_INFO} from '../constants'

export const setUserInfo = (data) => {
  return {
    type: SET_USER_INFO,
    data
  }
}