const fs = require('node:fs')  // a partir de NODE 16, se recomienda poner node: antes del fs (modulo) 

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
)