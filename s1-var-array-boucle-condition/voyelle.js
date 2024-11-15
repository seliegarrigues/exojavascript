/* Créer une fonction qui compte le nombre de voyelles dans une phrase.

Resultat attendu :
Le nombre de voyelles dans "Bonjour tout le monde" est : 8
*/
function countVowels(phrase) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u','y'];
    for (let i = 0; i < phrase.length; i++) {
        if (vowels.includes(phrase[i].toLowerCase())) {
            count++;
        }
    }
    return count;}
    console.log("Le nombre de voyelles dans 'Bonjour tout le monde' est : " + countVowels("Bonjour tout le monde"));

   // Déclaration de la fonction countVowels qui prend en argument une phrase
function countVowels(phrase) {
    // Initialisation d'une variable count à 0 pour compter le nombre de voyelles
    let count = 0;
    // Déclaration d'une constante vowels qui est un tableau contenant les voyelles
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    // Boucle for qui parcourt chaque caractère de la phrase
    for (let i = 0; i < phrase.length; i++) {
        // Boucle for qui parcourt chaque voyelle du tableau vowels
        for (let j = 0; j < vowels.length; j++) {
            // Si le caractère de la phrase (converti en minuscule) est égal à la voyelle du tableau
            if (phrase[i].toLowerCase() === vowels[j]) {
                // On incrémente la variable count de 1
                count++;
                // On sort de la boucle for qui parcourt les voyelles du tableau
                break;
            }
        }
    }
    // On retourne la variable count qui contient le nombre de voyelles dans la phrase
    return count;
}

// On appelle la fonction countVowels avec la phrase "Bonjour tout le monde" et on affiche le résultat
console.log("Le nombre de voyelles dans 'Bonjour tout le monde' est : " + countVowels("Bonjour tout le monde"));
