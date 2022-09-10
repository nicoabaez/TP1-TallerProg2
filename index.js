import { leerArchivoComoString, escribirTextoEnArchivo, transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString, combinarDosArrays, combinarNArrays } from './api/funciones.js'   // ( export )

let ruta = './api/archivoDeTexto.txt';
let texto = "- Soy un texto agregado a un texto";

leerArchivoComoString(ruta)                    //Lee el archivo solicitado 

escribirTextoEnArchivo(ruta, texto, true)      // Si el archivo no existe, lo crea y escribe dentro.
// escribirTextoEnArchivo(ruta, texto, false ) // Si el archivo no existe, lanza error.

console.log("Transformar String en array de numeros:", transformarStringEnArrayDeNumeros('123 | 456 | 789 | 1bc | 10 | jcsna | bc | vc | ss2jk | 222', ' | '))
console.log("Transformar Array de numeros en String:", transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10])   )
console.log("Combinar dos Arrays", combinarDosArrays([1, 5, 10], [2, 3, 8, 11])                  )
console.log("Combinar N Arrays", combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]])   )

console.log('----> Otras tareas...')
