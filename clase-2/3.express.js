const ditto = require('./pokemon/ditto.json')
const express = require('express')
const app = express()

// escribir en consola.
// $env:PORT=3000; node 3.express.js
const PORT = process.env.PORT ?? 3000

app.disable('x-powered-by')

app.use(express.json())

// middleware (software intermedio)
// La función de abajo se puedes sustituir por
// app.use(express.json())  <---
/* app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return null

  let body = ''

  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // Mutar la request y meter la inofrmación en el req.body
    req.body = data
    next()
  })

  // trackear la request a la base de datos
  // revisar si el usurio tiene cookies
  // ('/poquemon/*, req, res, next) el primer parametro es para indicar que peticiones son admitidas en el middleware
})
*/

app.get('/', (req, res) => {
  res.status(200).send('<h1><strong>1 hora y 10 minutos</strong> del video </h1>')
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  // req.body deberíamos guardar en BBDD
  res.status(201).json(req.body)
  // let body = ''

  // req.on('data', chunk => {
  //   body += chunk.toString()
  // })

  // req.on('end', () => {
  //   const data = JSON.parse(body)
  //   data.timestamp = Date.now()
  //   res.status(201).json(data)
  // })
})

// la última a la que va a llegar
app.use((req, res) => {
  res.status(404).send('<h1 style= "color: red">404</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
