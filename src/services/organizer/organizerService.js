import {
  apiOrganizer
} from 'utils/config'
import request from 'utils/request'

// Untuk Detail organizer dimiliki oleh user pada halaman /user-profile/information.js
const getMyData = async () => {
  return request({
    url: `${apiOrganizer}/detail/counter`,
    auth: true,
    method: 'get'
  })
}

// Detail organizer dimiliki oleh user
const getOne = async (id, auth = true) => {
  return request({
    url: `${apiOrganizer}/${id}`,
    auth,
    method: 'get'
  })
}

// Daftar organizer
const getAll = async (data) => {
  return request({
    url: `${apiOrganizer}`,
    data,
    method: 'get'
  })
}

// Daftar organizer user
const getList = async (data, type, auth = true) => {
  return request({
    url: `${apiOrganizer}/list/${type}`,
    auth,
    data,
    method: 'get'
  })
}

// Edit organizer yang dimiliki oleh user
const editOrganize = async (data, organizeId) => {
  return request({
    url: `${apiOrganizer}/edit/${organizeId}`,
    auth: true,
    data,
    method: 'put'
  })
}

const addOrganize = async (data) => {
  return request({
    url: `${apiOrganizer}/add`,
    auth: true,
    data,
    method: 'post'
  })
}

const addMemberOrganize = async (data, organizerId) => {
  return request({
    url: `${apiOrganizer}/${organizerId}member/add`,
    auth: true,
    data,
    method: 'post'
  })
}

const deleteMemberOrganize = async (data, id) => {
  return request({
    url: `${apiOrganizer}/${id}/member`,
    auth: true,
    data,
    method: 'delete'
  })
}

export {
  getMyData,
  getOne,
  getAll,
  getList,
  editOrganize,
  addOrganize,
  addMemberOrganize,
  deleteMemberOrganize
}
