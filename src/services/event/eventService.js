import {
  apiEvent
} from 'utils/config'
import request from 'utils/request'

const apiGetById = async (eventId, data) => {
  return request({
    url: `${apiEvent}/${eventId}`,
    auth: false,
    data,
    method: 'get'
  })
}

const apiGet = async (data) => {
  return request({
    url: apiEvent,
    auth: false,
    data,
    method: 'get'
  })
}

export {
  apiGetById,
  apiGet
}
