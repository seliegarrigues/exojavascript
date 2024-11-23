/* 1. Crée un tableau words contenant au moins 5 mots.*/
let words = ['one', 'array', 'can', 'contain', 'multiple', 'data'];

/*2. Écris une fonction capitalizeWords qui retourne un nouveau tableau où chaque mot commence par une majuscule*/
function capitalizeWords(arr) {
    // Utilisation de la méthode map pour créer un nouveau tableau en appliquant une fonction à chaque élément du tableau d'origine
    return arr.map(word => {
        // Vérifie si la longueur du mot est supérieure à 4
        if (word.length > 4) {
            // Si oui, capitalise la première lettre et concatène le reste du mot
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        // Sinon, retourne le mot tel quel
        return word;
    });
}

/*3. Affiche le tableau avant et après transformation dans la console.*/
// Affiche le tableau original avant la transformation
console.log('avant transformation', words);
// Affiche le tableau après la transformation en appelant la fonction capitalizeWords
console.log('après transformation', capitalizeWords(words));

/*4. Ne capitalise que les mots de plus de 4 lettres. */
