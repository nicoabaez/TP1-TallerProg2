import fs from 'fs'

export const leerArchivoComoString = (ruta) => {
   fs.readFile(ruta,'utf-8', (error, datos) => {
        if(error) { throw Error(`Error en lectura de archivo: ${error.message}`) }
        console.log('LECTURA OK:', datos)
   })
}

export const escribirTextoEnArchivo = (ruta, texto, flag) => {
    fs.stat(ruta, (error) => {
        try{
            if(error) throw new Error(`Error en fs.stat: ${error.message}`)
            fs.appendFile(ruta, texto, _ => {
                leerArchivoComoString(ruta)
                console.log('ESCRITURA OK')
            })
        }catch{
            if(flag){
                fs.appendFile(ruta, texto, _ => {
                    leerArchivoComoString(ruta)
                    console.log('ESCRITURA OK')
                })
            }else{
                console.log(`ERROR: El archivo no existe.`)
            }
        }
    })
}

export const transformarStringEnArrayDeNumeros = (texto, sp) => {
    let miArray = texto.split(sp)
    let arrayFinal = []
    for(var i = 0; i < miArray.length ; i++){
        if( !(isNaN(miArray[i])) ){
            arrayFinal.push(miArray[i])
        }
    }
    // console.log("Se transformó el String recibido por el Array: ", arrayFinal)
    return arrayFinal;
}

export const transformarArrayDeNumerosAUnSoloString = (arrayRecibido) => arrayRecibido.toString()

export const combinarDosArrays = (arrayUno, arrayDos) => ordenarArray(arrayUno.concat(arrayDos))

export const ordenarArray = (arrayRecibido) => arrayRecibido.sort(function(a, b) {return a - b;})

export const combinarNArrays = (arrayDeArrays) => {
    let arrayAux = [];
    for(let i = 0; i < arrayDeArrays.length-1; i++ ){
        if(i == 0){
            arrayAux = combinarDosArrays(arrayDeArrays[i], arrayDeArrays[i+1])
        }else{
            arrayAux = combinarDosArrays(arrayAux, arrayDeArrays[i+1])
        }
    }
    return arrayAux
}

