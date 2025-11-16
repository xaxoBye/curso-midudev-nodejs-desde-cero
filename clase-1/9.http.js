const http = require("node:http")
const { findAvailablePort } = require("./10.free-port.js")

// escribir en consola.
// $env:PORT=1234; node 9.http.js
const desiredPort = process.env.PORT ?? 3000

// request (pedido) = lo que le llega al servidor
// respuest = lo que devuelve el servidor
const server = http.createServer((req, res) => {
  console.log("request received- pedido recivido")
  res.end("🏋️Lo que devuelve el servidor - hola runner")
})

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})
