import {
  apiSlider
} from '../../utils/config'
import request from '../../utils/request'

const getSlider = async (data) => {
  return request({
    url: apiSlider,
    auth: false,
    data,
    method: 'get'
  })
}

export {
  getSlider
}
