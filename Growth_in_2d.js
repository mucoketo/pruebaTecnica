/*
Divido el problema en problemas pequeños:
1.Iterar por cada coordenada y actualizar máximo X y máximo Y (con esto saco el tamaño más grande de las coordenadas)
2.Inicializar una cuadrícula con ceros (con el tamaño más grande encontrado antes)
3.Incrementar los valores en la cuadrícula(recorro las coordenadas de nuevo y aumento las celdas)
4.Encontrar el valor máximo en la cuadrícula y contar cuántas celdas lo contienen
*/

upRight = ["1 4", "2 3", "4 1"];

function countMax(upRight) {
  //1.
  let maxX = 0;
  let maxY = 0;

  upRight.forEach((coord) => {
    const [x, y] = coord.split(" ").map(Number);

    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  });
  //2. Crear mi grid de ceros
  const grid = Array.from({ length: maxX }, () => Array(maxY).fill(0));
  //   console.log(grid);

  //3. Incrementar los valores
  upRight.forEach((coord) => {
    const [x, y] = coord.split(" ").map(Number);
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        grid[i][j]++;
      }
    }
  });

  //4.valor máximo de mi grid
  const maxValue = Math.max(...grid.flat());
  let count = 0;

  grid.forEach((row) => {
    row.forEach((item) => {
      if (item === maxValue) {
        count++;
      }
    });
  });
  return console.log(
    `Celdas con el valor máximo: ${count}
    El grid final es: ${grid}
    `
  );
}

countMax(upRight);
