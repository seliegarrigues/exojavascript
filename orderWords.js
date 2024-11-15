/* Créer une fonction qui prend une chaîne de caractères en entrée, la transforme en un tableau de mots, trie les mots par ordre alphabétique et retourne la chaîne triée. */

function sortWordsInString(str, descending = true) {
/*     diviser la chaîne de caractères en un tableau de mots en utilisant l'espace comme séparateur.
 */    const wordsArray =  str.split(' ');

/*  trier les mots dans le tableau par ordre alphabétique en ignorant la casse.
 */
wordsArray.sort((a, b) => {
    const lowerA = a.toLowerCase();
const lowerB = b.toLowerCase();
if (lowerA < lowerB){
    return descending? 1 : -1;
} 
if (lowerA > lowerB){
    return descending? -1 : 1;
}
return 0;
});

/* rejoindre les mots triés en une chaîne de caractères avec des espaces entre les mots.
 */
const sortedString = wordsArray.join(' ');
return sortedString
}
console.log(sortWordsInString("je suis en train d'apprendre le JavaScript", false))
// Affichera : "JavaScript apprendre d'apprendre en je le suis train"

console.log(sortWordsInString('chat chien oiseau poisson', false))
// Affichera : "chat chien oiseau poisson"