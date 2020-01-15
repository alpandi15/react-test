import {
  apiArticle
} from 'utils/config'
import request from 'utils/request'

const findAll = async (data) => {
  return request({
    url: apiArticle,
    auth: false,
    data,
    method: 'get'
  })
}

export {
  findAll
}
