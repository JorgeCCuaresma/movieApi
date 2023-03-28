import { Request, Response } from 'express'
import { Director } from '../models/director'
import { DirectorInterface } from '../types'

export const postDirector = async (req: Request, res: Response): Promise<void> => {
  try {
    const body: DirectorInterface = req.body
    const directorExist = await Director.findOne({ name: body.name, surName: body.surName })
    if (directorExist !== null) { res.status(404).send('El director ya existe'); return }
    const director = new Director(body)
    await director.save()
    res.status(200).json(director)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getAllDirectors = async (_req: Request, res: Response): Promise<void> => {
  try {
    const directors = await Director.find()
    if (directors === null || directors.length === 0) { res.status(404).send('No hay ningún director'); return }
    res.status(200).json(directors)
  } catch (error) {
    res.status(500).json(error)
  }
}
export const getDirector = async (req: Request, res: Response): Promise <void> => {
  try {
    const director = await Director.findById(req.params.id)
    if (director === null) { res.status(404).send('No encuentro ningún director'); return }
    res.status(200).json(director)
  } catch (error) {
    res.status(500).json(error)
  }
}
