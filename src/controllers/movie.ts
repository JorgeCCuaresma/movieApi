import { Request, Response } from 'express'
import { Movie } from '../models/movie'
import { MovieInterface } from '../types'

export const getAllMovies = async (_req: Request, res: Response): Promise<void> => {
  try {
    const movies = await Movie.find().populate('actor').populate('director')
    if (movies === null || movies.length === 0) { res.status(404).send('No hay ninguna pelicula'); return }
    res.status(200).json(movies)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const postMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const body: MovieInterface = req.body
    const movieExist = await Movie.findOne({ title: body.title })
    if (movieExist !== null) { res.send('La película ya existe'); return }
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!body.actor) { res.send('Campo Actor vacio'); return }
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!body.director) { res.send('Campo Director vacio'); return }
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!body.duration) { res.send('Campo Duración vacio'); return }
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!body.image) { res.send('No se encuentra la imagen'); return }
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!body.title) { res.send('Campo Título vacio'); return }
    const movie = new Movie(body)
    await movie.save()
    res.status(200).json(movie)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const movie = await Movie.findById(req.params.id)
    if (movie === null) { res.status(404).send('No encuentro ningúna movie'); return }
    res.status(200).json(movie)
  } catch (error) {
    res.status(500).json(error)
  }
}
