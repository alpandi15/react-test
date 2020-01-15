import request from 'utils/request'
import {
  apiEvent
} from 'utils/config'

const apiCreateEvent = async (data) => {
  return request({
    url: apiEvent,
    auth: true,
    data,
    method: 'post'
  })
}

export {
  apiCreateEvent
}
