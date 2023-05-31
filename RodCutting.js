/* 

 HackerRank - Rod Cutting

 Given an array with the lengths of various metal rods, repeatedly perform the following:

   1. Count the number of rods.
   2. Find the rod(s) with the shortest length.
   3. Discard any rod of that length.
   4. Cut that shortest length from each of the longer rods. These are offcuts.
   5. Discard all offcuts.
   6. Repeat until there are no more rods.
 
 Maintain an array of the numbers of rods at the beginning of each round of actions and return that array.
 **********************************************************************************************************
 Example
 n = 4
 lenghts = [1,1,3,4]
    1. The shortest rods are 1 unit long, so discard them and record their length.
    2. Remove their length, 1 unit, from the longer rods and discard the offcuts.
    3. Now, there are 2 rods, lengths = [2,3]. Discard the rod of length 2.
    4.Cut 2 from the rod length 3, and discard the offcut.
    5. Now there is only one rod of length 1. It is the shortest, so discard it.

    Return an array with the number of rods at the start of each turn: [4,2,1].

    lengths     cut length      rods
    1 1 3 4         1             4
    _ _ 2 3         2             2
    _ _ _ 1         1             1
    _ _ _ _        DONE         DONE
 
 **********************************************************************************************************

 Function Description

 Complete the function "rodOffcut".

 rodOffcut has the following parameter(s):

    int lengths[n]: the starting lengths of each rod

 Returns:

    int[]: the number of rods at the start of each turn

 Constraints

    1 ≤ n ≤ 103
    1 ≤ lengths[i] ≤ 103, where 0 ≤ i < n
    /*Problema grande a problemas pequeños:*/
/**
 * Tenemos barras metálicas de distintas longitudes en un array. Queremos cortarlas hasta que no quede ninguna.
 *  Todo dentro de un bucle para ir reptiendo el proceso:
 * 1. Hay que encontrar la barra más corta
 * 2. Una vez encontrada, cortarla de las demás barras
 * 3. Quitar las partes cortadas y repetir el proceso
 * 4. Tenemos que saber cuántas barras teníamos al inicio de cada proceso (return de la función)
 */
const lengths = [1, 1, 3, 4];

function rodOffcut(lengths) {
  let outPut = [];

  while (lengths.length !== 0) {
    //1. Encontrar la barra más corta
    let minRod = Math.min(...lengths);
    //console.log(minRod);
    outPut.push(lengths.length);
    //2. Cortamos la minRod del resto
    for (let i = 0; i < lengths.length; i++) {
      let sub = lengths[i] - minRod;

      if (sub === 0) {
        lengths.splice(i, 1);
        i -= 1;
      } else {
        lengths[i] = sub;
      }
    }
  }

  return outPut;
}

console.log(rodOffcut(lengths));
