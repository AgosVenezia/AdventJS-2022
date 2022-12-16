/* Reto #16: Arreglando las cartas de Papá Noel

Instrucciones

Papá Noel está empezando a recibir un montón de cartas pero tienen un montón de problemas de formato. Para mejorar la lectura, va a escribir un programa que, dado un texto, lo formatea de acuerdo a las siguientes reglas:

Eliminar espacios al inicio y al final
Eliminar múltiples espacios en blanco y dejar sólo uno
Dejar un espacio después de cada coma
Quitar espacios antes de coma o punto
Las preguntas sólo deben terminar con un signo de interrogación
La primera letra de cada oración debe estar en mayúscula
Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
Poner un punto al final de la frase si no tiene puntuación
Las cartas las escriben inglés y aquí tenemos un ejemplo:

fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
A tener en cuenta:

No te tienes que preocupar por los signos de puntuación que no sean coma, punto o interrogación.
Asegúrate de respetar los saltos de línea y espacios originales. */

function fixLetter(letter) {
    return letter
      // quita espacios duplicados
      .replace(/\s{2,}/g, ' ')
      // quita separadores duplicados
      .replace(/([,.?!]{2,})/g, (_, $1) => $1[0])
      // primera letra de frase mayuscula
      .replace(/([.?!])(\s)([A-z])/g, 
        (_,$1,$2,$3) => $1+$2+$3.toUpperCase()
      )
      // jojojo
      .replace(/[Ss]anta [Cc]laus/g, 'Santa Claus')
      // elimina espacio inicio y fin
      .trim()
      // elimina espacio antes de separador
      .replace(/\s([,.?!])/g, '$1')
      // letra mayuscula al inicio de carta
      .replace(/^([A-z])/,(_,$1)=>$1.toUpperCase())
      // . al fin de carta
      .replace(/([^.?!])$/,'$1.')
  }

console.log(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `))
console.log(fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"))