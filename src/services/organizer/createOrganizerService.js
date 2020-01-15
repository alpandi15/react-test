import request from 'utils/request'
import {
  apiOrganizer
} from 'utils/config'

const apiCreateOrganizer = async (data) => {
  return request({
    url: apiOrganizer,
    auth: true,
    data,
    method: 'post'
  })
}

export {
  apiCreateOrganizer
}
