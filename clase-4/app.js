import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

// import movies from './movies.json' with { type: 'json' }

// Como leer un archivo JSON en ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

// Como leer un json en ESModules recomendado por ahora

/// voy por el minuto 31 con 50 segundos
/// https://www.youtube.com/watch?v=-9d3KhCqOtU&list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7&index=4
const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by') // deshabilitar el header X-Power-By: Express

// const ACCEPTED_ORIGINS = [
//   'http://localhost:8080',
//   'http://localhost:3000',
//   'https://movies.com'
// ]

// Todos los recursos que sean MOVIES se identica con /movies

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
