/* Reto #15: Decorando el árbol de Navidad

Instrucciones

Una pareja está poniendo el árbol de navidad. El chico es un motivado de los adornos navideños y quiere que quede perfectamente equilibrado. Tiene tres tipos de decoraciones:

Bolas de colores : B
Regalos pequeños : R
Piñas de pino : P
El árbol de navidad es un triángulo que hay que generar. Ya tienen la base montada, que sería la primera fila, y a partir de ahí tienen que ir colocando las decoraciones hacía arriba siguiendo una fórmula.

Arriba coloca  :     P     R     B     P
Si abajo tiene :    P P   B P   R P   B R
Las combinaciones también son al revés. Por ejemplo, si abajo es B P, arriba es R. Pero también será R si abajo es P B. También si abajo tienes dos veces la misma letra, arriba será la misma letra. Por ejemplo, si abajo es B B, arriba es B.

Con estas reglas, podríamos ver el árbol que generaríamos con la base B P R P:

   R
  P B
 R B B
B P R P
Escribe un programa que reciba el string B P R P y devuelva un array con la representación del árbol.

decorateTree('B P R P')
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

decorateTree('B B') // ['B', 'B B']
Ten en cuenta que:

El programa recibe siempre la cadena de texto que representa la base del árbol.
Hay que generar el árbol completo, es decir, la base y las filas que se generan a partir de ella, hasta arriba.
Hay que seguir la fórmula para saber qué decoración colocar en cada posición. */

function decorateTree(base) {
    const baseA = base.replaceAll(' ', '').split('')
    const decorators = {
      PP: 'P',
      BB: 'B',
      RR: 'R',
      BP: 'R',
      PB: 'R',
      RP: 'B',
      PR: 'B',
      BR: 'P',
      RB: 'P',
    }
    const tree = Array.from(baseA).fill([])
      
    tree[0] = baseA
  
    return tree
      .slice(1)
      .reduce((acc, _curr, i, _arr) => {
        let prevRow = acc[i]
  
        acc[i + 1] = Array
          .from({ length: prevRow.length - 1 })
          .map((_, k) => decorators[prevRow[k] + prevRow[k + 1]])
  
        return acc
      }, tree)
      .reverse()
      .map(v => v.join(' '))
  }

console.log(decorateTree('B P R P'))
console.log(decorateTree('B B'))