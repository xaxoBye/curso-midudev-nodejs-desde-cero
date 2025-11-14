const path = require('node:path')


// barra separadora de carpetas según Sistema Operativo. en window = \
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename('/tmp/midu-secretos/password.txt')
console.log(base)

const fileName = path.basename('/tmp/midu-secretos/password.txt', '.txt')
console.log(fileName)

const extension = path.extname('imagen.png')
console.log(extension)