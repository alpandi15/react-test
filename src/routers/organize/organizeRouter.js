import express from 'express'
import renderAndCache from '../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    .get('/organizer/detail/:id', (req, res) => renderAndCache(app, req, res, '/organizer/detail'))
}

export default routes
