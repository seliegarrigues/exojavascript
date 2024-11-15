/* En utilisant le langage JavaScript, créez une fonction pyramid(size) qui permet de dessiner une pyramide dans le terminal.

e

 */
function pyramid(size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size - i; j++) {
      row += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) row += "*";
    console.log(row);
  }
}

pyramid(5);
