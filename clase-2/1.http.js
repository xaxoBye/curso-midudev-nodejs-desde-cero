const http = require('node:http')
const fs = require('node:fs')

// escribir en consola.
// $env:PORT=1234; node 9.http.js
// node --watch ./clase-2/1.http.js
const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.end('<h1>Bienvenido a mi página de inicio MINUTO 34 VIDEO</h1>')
  } else if (req.url === '/imagen-avatar.png') {
    fs.readFile('./clase-2/avatar.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.statusCode = 200
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('<h2>Envia tu solicitud</h2>')
  } else {
    res.statusCode = 404
    res.end('<h1 style= "color: red"}>404</h1>')
  }
}

// request (pedido) = lo que le llega al servidor
// respuest = lo que devuelve el servidor
const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`)
})

/** STATUS CODE ***
 *  100-199: Respuestas informativas
 *  200-299: Respuestas satisfactorias  200 OK
 *  300-399: Redirecciones              300 Moved Permanently
 *  400-499: Errores del cliente        400 Bad Request
 *                                      404 Not Found
 *  500-599: Errores del servidor       500 Internal Server Error
 */
