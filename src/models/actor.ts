import { Schema, model } from 'mongoose'
import { ActorInterface } from '../types'

const actorSchema = new Schema<ActorInterface>({
  name: { type: String, required: true },
  surName: { type: String, required: true }
})

export const Actor = model<ActorInterface>('Actors', actorSchema)
