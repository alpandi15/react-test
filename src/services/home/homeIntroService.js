import {
  apiHomeIntro
} from 'utils/config'
import request from 'utils/request'

const findAll = async (data) => {
  return request({
    url: apiHomeIntro,
    auth: false,
    data,
    method: 'get'
  })
}

export {
  findAll
}
