import express from 'express'
import routerMovie from './routers/movie'
import cors from 'cors'
import { connectDB } from './mongo'
import routerActor from './routers/actor'
import routerDirector from './routers/director'
const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3000

app.use(routerMovie)
app.use(routerActor)
app.use(routerDirector)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running 🚀 on port ${PORT}`)
  })
}).catch((error) => {
  console.log('Connection to database failed!! ❌', error)
})
