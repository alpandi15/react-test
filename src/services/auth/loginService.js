import {
  apiAuth
} from '../../utils/config'
import request from '../../utils/request'

const loginApi = async (data) => {
  return request({
    url: `${apiAuth}/login`,
    auth: false,
    data,
    method: 'post'
  })
}
const loginSosmed = async (data) => {
  return request({
    url: `${apiAuth}/sosmed/login`,
    auth: false,
    data,
    method: 'post'
  })
}

export {
  loginApi,
  loginSosmed
}
