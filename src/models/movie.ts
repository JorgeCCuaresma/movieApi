import { model, Schema } from 'mongoose'
import { MovieInterface } from '../types'

const movieSchema = new Schema<MovieInterface>({
  image: { type: String },
  title: { type: String, required: true },
  duration: { type: Number, required: true },
  actor: [{ type: Schema.Types.ObjectId, ref: 'Actors' }],
  director: { type: Schema.Types.ObjectId, ref: 'Directors' }
})

export const Movie = model<MovieInterface>('Movies', movieSchema)
