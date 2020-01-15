import {
  apiAuth
} from 'utils/config'
import request from 'utils/request'

const getMyData = async (data) => {
  return request({
    url: `${apiAuth}/me`,
    auth: true,
    data,
    method: 'get'
  })
}

export {
  getMyData
}
