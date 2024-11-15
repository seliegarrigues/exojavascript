/* Créer une fonction qui génère la table de multiplication d'un nombre jusqu'à 10 */
function tableMultiplication(nombre) {
    for (let i = 1; i <= 10; i++) {
        console.log(nombre + " x "+ i +" = "+ nombre * i);
}
}
tableMultiplication(5)