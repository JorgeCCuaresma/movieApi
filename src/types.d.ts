import { Types } from 'mongoose'

export interface MovieInterface {
  image: string
  title: string
  duration: number
  actor: Types.ObjectId
  director: Types.ObjectId

}

export interface ActorInterface {
  name: string
  surName: string
}

export interface DirectorInterface {
  name: string
  surName: string
}
