import express from 'express'
import renderAndCache from '../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    .get('/user-profile/:id', (req, res) => renderAndCache(app, req, res, '/user-profile'))
}

export default routes
