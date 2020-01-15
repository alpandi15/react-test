import {
  apiCategory
} from 'utils/config'
import request from 'utils/request'

const findOne = async (id, data) => {
  return request({
    url: `${apiCategory}/${id}`,
    auth: false,
    data,
    method: 'get'
  })
}

const findAll = async (data) => {
  return request({
    url: apiCategory,
    auth: false,
    data,
    method: 'get'
  })
}

export {
  findOne,
  findAll
}
