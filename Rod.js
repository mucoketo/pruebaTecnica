function rodOffcut(lengths) {
  let output = [];

  while (lengths.length !== 0) {
    // 1. Encontrar la barra más corta
    let minRod = Math.min(...lengths);
    output.push(lengths.length);

    // 2. Cortamos la minRod del resto
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

  return output;
}

const lengths = [1, 1, 3, 4];
console.log(rodOffcut(lengths));
