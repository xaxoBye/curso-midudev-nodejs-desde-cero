const ditto = require('./pokemon/ditto.json')
const express = require('express')
const app = express()

app.disable('x-powered-by')

// escribir en consola.
// $env:PORT=3000; node 9.http.js
const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.status(200).send('<h1><strong>1 hora y 10 minutos</strong> del video </h1>')
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  let body = ''

  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    res.status(201).json(data)
  })
})

// la última a la que va a llegar
app.use((req, res) => {
  res.status(404).send('<h1 style= "color: red">404</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
