import request from 'utils/request'
import {
  apiAuth
} from 'utils/config'

const apiChangePassword = async (data) => {
  return request({
    url: `${apiAuth}/change-password`,
    auth: true,
    data,
    method: 'post'
  })
}

export {
  apiChangePassword
}
