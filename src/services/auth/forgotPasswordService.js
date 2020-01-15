import request from 'utils/request'
import {
  apiAuth
} from 'utils/config'

const apiForgotPassword = async (type = 'email', data) => {
  return request({
    url: `${apiAuth}/forgot-password/${type}`,
    auth: false,
    data,
    method: 'post'
  })
}

export {
  apiForgotPassword
}
