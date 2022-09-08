const fs = require('fs')

try {
    let fechaYHora = new Date().toLocaleString();
    fs.writeFileSync('fyh.txt', fechaYHora )
} catch (error) {
    throw new Error(`Error en escritura: ${error.message}`)
}


try {
    const contenido = fs.readFileSync('4-fechaYHora.js', 'utf-8')
    console.log(contenido)
} catch (error) {
    throw new Error(`Error en lectura: ${error.message}`)
}


