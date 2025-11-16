const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder){
    let files
    try {
        files = await fs.readdir(folder)
    } catch {
        console.error(pc.red(`❌ No se pudo leer el directorio ${folder}`))
        process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats
        try {
            stats = await fs.stat(filePath) // información del archivo
        } catch {
            console.error(pc.red(`No se pudo leer el archivo ${filePath}`))
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? pc.bgYellow('d') : pc.bgCyan(pc.red('f'))
        const fileSize = stats.size.toString()
        const fileModified = stats.mtime.toLocaleString()

        isDirectory ? file =   '📂 ' + file : file

  
        return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`
    })

    const filesInfo = await Promise.all(filesPromises)

    filesInfo.forEach(fileInfo=> console.log(fileInfo))
}

ls(folder)