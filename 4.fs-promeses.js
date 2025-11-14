const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
    console.log('Primer texto: ', text)
})

console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
    console.log('Segundo texto:\n', text) 
})


// Usar node:util si el modulo que se quiere utilizar no soporta /promises (no soporta promesas nativas)
// const fs = require('node:fs')
// const { promisify } = require('node:util')

// const readFilePromise = promisify(fs.readFile)

// console.log('Leyendo el primer archivo...')
// readFilePromise('./archivo.txt', 'utf-8')
//     .then(text => {
//     console.log('Primer texto: ', text)
// })

// console.log('Hacer cosas mientras lee el archivo...')

// console.log('Leyendo el segundo archivo...')
// readFilePromise('./archivo2.txt', 'utf-8')
//     .then(text => {
//     console.log('Segundo texto:\n', text) 
// })

