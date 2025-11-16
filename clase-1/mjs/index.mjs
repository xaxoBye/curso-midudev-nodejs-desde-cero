// .js --> por defecto utiliza CommonJS
// .mjs --> para utilizar ES Modules
// .cjs --> para utilizar CommonJS

import { sum, sub, mult } from './sum.mjs'

console.log('la suma en un archivo .mjs: ',sum(1,2))

console.log('la resta en un archivo .mjs: ',sub(1,2))

console.log('la multiplicación en un archivo .mjs: ',mult(1,2))