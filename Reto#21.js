/* Reto #21: Creando la tabla de regalos

Instrucciones

Hay muchas cartas de niños pidiendo regalos y es muy difícil que podamos hacer inventario de todos ellos. Por eso, hemos decidido crear un programa que nos dibuje una tabla con los regalos que nos piden y sus cantidades.

Para ello nos dan un array de objetos con los nombres de los regalos y sus cantidades. Escribe una función que reciba este array y devuelva una cadena con la tabla dibujada.

printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 }
])
+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 3        |
*******************
Otro ejemplo donde se puede ver que la tabla siempre usa sólo el espacio justo dependiendo de la longitud de los nombres de los regalos y de las cantidades.

printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 }
])
++++++++++++++++++++++++++++++++++++++
| Gift               | Quantity      |
| ------------------ | ------------- |
| PlayStation 5      | 9234782374892 |
| Book Learn Web Dev | 23531         |
**************************************
Como ves, el tamaño de las celdas depende de la longitud de los nombres de los regalos y de las cantidades, aunque como mínimo tendrán que ser del espacio de los títulos Gift y Quantity respectivamente.

La tabla usa los símbolos: + para el borde superior, * para el borde inferior, - para las líneas horizontales y | para las líneas verticales.

Ten en cuenta:

Usa sólo el espacio que necesitas para dibujar la tabla.
Adapta la tabla a la longitud de los nombres de los regalos y de las cantidades o los títulos de las columnas.
No hace falta que ordenes los resultados.
La tabla no termina con salto de línea. */

function printTable(gifts) {
    const GIFT = 'Gift'
    const QUANTITY = 'Quantity'
    const TOP_BORDER_SYMBOL = '+'
    const BOTTOM_BORDER_SYMBOL = '*'
    const HORIZONTAL_SYMBOL = '-'
    const VERTICAL_SYMBOL = '|'
    const SPACE_SYMBOL = ' '
    
    const maxGiftLength = Math.max(
      ...gifts.map(({name}) => name.length),
      GIFT.length
    )
    const maxQuantityLength = Math.max(
      ...gifts.map(({quantity}) => `${quantity}`.length),
      QUANTITY.length
    )
    
    const maxLineLength = 
      VERTICAL_SYMBOL.length + SPACE_SYMBOL.length + 
      maxGiftLength + 
      SPACE_SYMBOL.length + VERTICAL_SYMBOL.length + SPACE_SYMBOL.length + 
      maxQuantityLength + 
      VERTICAL_SYMBOL.length + SPACE_SYMBOL.length
  
    const makeLine = (gift, quantity) => 
      `${VERTICAL_SYMBOL}${SPACE_SYMBOL}` +
      `${gift.padEnd(maxGiftLength, SPACE_SYMBOL)}` +
      `${SPACE_SYMBOL}${VERTICAL_SYMBOL}${SPACE_SYMBOL}` +
      `${quantity.padEnd(maxQuantityLength, SPACE_SYMBOL)}` +
      `${SPACE_SYMBOL}${VERTICAL_SYMBOL}`
  
    const TOP = TOP_BORDER_SYMBOL.repeat(maxLineLength)
    const HEADER = makeLine(GIFT, QUANTITY)
    const SEPARATOR = makeLine(
      HORIZONTAL_SYMBOL.repeat(maxGiftLength),
      HORIZONTAL_SYMBOL.repeat(maxQuantityLength)
    )
    const TABLE_CONTENT = gifts.map(({ name, quantity }) =>
      makeLine(name, `${quantity}`)
    )
    const BOTTOM = BOTTOM_BORDER_SYMBOL.repeat(maxLineLength)
  
    return [
      TOP,
      HEADER,
      SEPARATOR,
      ...TABLE_CONTENT,
      BOTTOM,
    ].join('\n')
  }

console.log(
    printTable([
        { name: 'Game', quantity: 2 },
        { name: 'Bike', quantity: 1 },
        { name: 'Book', quantity: 3 }
      ])
)

console.log(
    printTable([
        { name: 'PlayStation 5', quantity: 9234782374892 },
        { name: 'Book Learn Web Dev', quantity: 23531 }
      ])
)