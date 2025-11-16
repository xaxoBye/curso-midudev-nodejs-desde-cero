const express = require('express')

const app = express()
app.disable('x-powered-by') // deshabilitar el header X-Power-By: Express

app.length('/', (req, res) => {
  res.json({ message: 'hola mundo' })
})

// escribir en consola.
// $env:PORT=3000; node app.js
const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
