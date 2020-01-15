import request from 'utils/request'
import {
  apiAuth
} from 'utils/config'

const apiResetPassword = async (type = 'email', data) => {
  return request({
    url: `${apiAuth}/reset-password/${type}`,
    auth: false,
    data,
    method: 'post'
  })
}

export {
  apiResetPassword
}
