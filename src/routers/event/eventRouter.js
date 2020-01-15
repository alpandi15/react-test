import express from 'express'
import renderAndCache from '../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    .get('/event/create/:id', (req, res) => renderAndCache(app, req, res, '/event/create'))
}

export default routes
