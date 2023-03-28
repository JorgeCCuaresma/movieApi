import { Schema, model } from 'mongoose'
import { DirectorInterface } from '../types'

const directorSchema = new Schema<DirectorInterface>({
  name: { type: String, required: true },
  surName: { type: String, required: true }
})

export const Director = model<DirectorInterface>('Directors', directorSchema)
