import request from '../../utils/request'
import { apiAuth } from '../../utils/config'

const verificationCode = async (data) => {
  return request({
    url: `${apiAuth}/verification`,
    auth: false,
    data,
    method: 'post'
  })
}

const resendVerificationCode = async (data) => {
  return request({
    url: `${apiAuth}/resend/verification`,
    auth: false,
    data,
    method: 'post'
  })
}

// cek email ada di database
const verification = async (data) => {
  return request({
    url: `${apiAuth}/verification`,
    auth: false,
    data,
    method: 'post'
  })
}

export {
  verificationCode,
  resendVerificationCode,
  verification
}
