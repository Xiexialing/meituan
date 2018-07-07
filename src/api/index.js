/**
 * Created by Administrator on 2018/7/4/004.
 */
import axios from 'axios'

let api = {
  ads: '/api/homead'
}

export const interact = (urlKey, method, params, callback) => {
  axios({
    url: api[urlKey],
    method,
    params
  }).then((res) => {
    callback(res)
  })
};