import authRouter from './auth/authRouter'
import eventRouter from './event/eventRouter'
import organizeRouter from './organize/organizeRouter'
import userRouter from './user/userRouter'

const routes = (server, app) => {
  server.use(authRouter(app))
  server.use(eventRouter(app))
  server.use(organizeRouter(app))
  server.use(userRouter(app))
}

export default routes
