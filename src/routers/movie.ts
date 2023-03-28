import { Router, RequestHandler } from 'express'
import { getAllMovies, getMovie, postMovie } from '../controllers/movie'

const routerMovie = Router()

routerMovie.get('/movie', getAllMovies as RequestHandler)
routerMovie.post('/movie', postMovie as RequestHandler)
routerMovie.get('/movie/:id', getMovie as RequestHandler)

export default routerMovie
