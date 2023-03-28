import { Router, RequestHandler } from 'express'
import { getActor, getAllActors, postActor } from '../controllers/actor'
const routerActor = Router()

routerActor.post('/actor', postActor as RequestHandler)
routerActor.get('/actor', getAllActors as RequestHandler)
routerActor.get('/actor/:id', getActor as RequestHandler)

export default routerActor
