import { Request, Response } from 'express'
import { Actor } from '../models/actor'
import { ActorInterface } from '../types'

export const postActor = async (req: Request, res: Response): Promise<void> => {
  try {
    const body: ActorInterface = req.body
    const actorExist = await Actor.findOne({ name: body.name, surName: body.surName })
    if (actorExist !== null) { res.status(404).send('El actor ya existe'); return }
    const actor = new Actor(body)
    await actor.save()
    res.status(200).json(actor)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getAllActors = async (_req: Request, res: Response): Promise<void> => {
  try {
    const actors = await Actor.find()
    if (actors === null || actors.length === 0) { res.status(404).send('No hay ningún actor'); return }
    res.status(200).json(actors)
  } catch (error) {
    res.status(500).json(error)
  }
}
export const getActor = async (req: Request, res: Response): Promise <void> => {
  try {
    const actor = await Actor.findById(req.params.id)
    if (actor === null) { res.status(404).send('No encuentro ningún actor'); return }
    res.status(200).json(actor)
  } catch (error) {
    res.status(500).json(error)
  }
}
