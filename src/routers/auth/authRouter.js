import express from 'express'
import renderAndCache from '../../utils/cache'

const router = express.Router()

const routes = (app) => {
  return router
    .get('/auth/register', (req, res) => renderAndCache(app, req, res, '/auth/register'))
    .get('/auth/register/verification', (req, res) => renderAndCache(app, req, res, '/auth/register/verification'))
    .get('/auth/login', (req, res) => renderAndCache(app, req, res, '/auth/login'))

    .get('/search', (req, res) => renderAndCache(app, req, res, '/search', false))
    .get('/location', (req, res) => renderAndCache(app, req, res, '/location'))
    .get('/verification', (req, res) => renderAndCache(app, req, res, '/verification'))
    .get('/auth/forgot-password', (req, res) => renderAndCache(app, req, res, '/auth/forgot-password'))
    .get('/auth/forgot-password/verification', (req, res) => renderAndCache(app, req, res, '/auth/forgot-password/verification'))
    .get('/auth/change-password', (req, res) => renderAndCache(app, req, res, '/auth/change-password'))
    .get('/auth/change-password/verification', (req, res) => renderAndCache(app, req, res, '/auth/change-password/verification'))
}

export default routes
