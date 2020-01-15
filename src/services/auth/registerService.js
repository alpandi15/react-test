import {
  apiAuth
} from '../../utils/config'
import request from '../../utils/request'

const registerApi = async (data) => {
  return request({
    url: `${apiAuth}/register`,
    auth: false,
    data,
    method: 'post'
  })
}

export {
  registerApi
}
