/* Créez une fonction nommée roundDownArray(tab) qui prend en paramètre un tableau de nombres décimaux. */

function roundDownArray(tab) {
   
    //  La méthode map crée un nouveau tableau en appliquant la fonction Math.floor à chaque élément du tableau d'origine. Math.floor arrondit chaque nombre vers le bas.
    const roundedTab = tab.map(Math.floor);

    // Retourner le tableau 
    return roundedTab;
}
/* En reprenant l'exercice précédent, créez une autre fonction qui calcule la somme de tous les éléments arrondis du tableau. */
function sumOfArray (tab) {
    //  fonction roundDownArray pour arrondir les éléments du tableau
    const roundedTab = roundDownArray(tab);
    // Méthode reduce pour calculer la somme des éléments arrondis L'accumulateur commence à 0 et chaque élément du tableau est ajouté à l'accumulateur.
    const sum = roundedTab.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // Retourner la somme des éléments arrondis
    return sum;
}
/* Enfin, créez une fonction qui calcule la moyenne des éléments arrondis du tableau (en arrondissant la somme avant de la diviser par la longueur du tableau). */
function averageOfArray(tab) {
    //  Calcul somme des éléments arrondis
    const sum = sumOfArray(tab);
    // Calcul moyenne
    const average = Math.floor(sum) / tab.length;
    // Retourner la moyenne
    return average;
}

console.log(roundDownArray([3.7, 8.4, 2.1, 5.9]))
// Affichera : [3, 8, 2, 5]
console.log(sumOfArray([3.7, 8.4, 2.1, 5.9]));
// Affichera : 18 (3 + 8 + 2 + 5)
console.log(averageOfArray([3.7, 8.4, 2.1, 5.9]));
// Affichera : 4.5 (18 / 4)