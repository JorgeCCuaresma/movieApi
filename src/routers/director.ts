import { Router, RequestHandler } from 'express'
import { postDirector, getDirector, getAllDirectors } from '../controllers/director'
const routerDirector = Router()

routerDirector.post('/director', postDirector as RequestHandler)
routerDirector.get('/director', getAllDirectors as RequestHandler)
routerDirector.get('/director/:id', getDirector as RequestHandler)

export default routerDirector
