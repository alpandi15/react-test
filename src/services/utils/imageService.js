import request from 'utils/request'
import { APIUPLOAD, apiImage } from 'utils/config'

// User
const apiUpload = async (type = 'products', data) => {
  return request({
    url: `${APIUPLOAD}${apiImage}/${type}`,
    fullUrl: true,
    auth: true,
    data,
    method: 'post'
  })
}

export {
  apiUpload
}
