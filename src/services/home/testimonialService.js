import {
  apiTestimonial
} from 'utils/config'
import request from 'utils/request'

const findAll = async (data) => {
  return request({
    url: apiTestimonial,
    auth: false,
    data,
    method: 'get'
  })
}

export {
  findAll
}
