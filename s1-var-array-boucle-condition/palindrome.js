/* L'objectif de cet exercice est de vérifier si un mot est un palindrome, c'est-à-dire un mot qui se lit de la même manière de gauche à droite que de droite à gauche (par exemple, "radar", "level").
 */

// Exemple de tests
console.log(estPalindrome('radar')) // true
console.log(estPalindrome('level')) // true
console.log(estPalindrome('bonjour')) // false

function estPalindrome(mot) {
   /*  on convertit le mot en minuscule pour éviter les caractères spéciaux et les espaces */
    mot =mot.toLowerCase();
/*     on inverse le mot en utilisant la méthode reverse(), split() pour séparer les caractères et join('') pour les rejoindre ensemble */
let inverse = mot.split('').reverse().join('');
/* on compare le mot original avec son inverse */
return mot === inverse;
}
console.log(estPalindrome("Ressasser"));
