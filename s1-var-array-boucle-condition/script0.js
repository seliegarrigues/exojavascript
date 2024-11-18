/* Utilisez une boucle while pour parcourir les nombres de 0 à 20.
Affichez uniquement les nombres pairs  */
let compteur = 0;
while(compteur <= 20) { 
    if(compteur % 2 === 0) 
        { console.log(compteur + " est un nombre pair" ); }
 
     compteur++;}

/* Implémentez une fonction countOccurrences qui prend une chaîne de caractères et un mot, et retourne combien de fois le mot apparaît dans la chaîne. */

function countOccurrences(str, word) {
    // Utilisez la méthode match pour trouver toutes les occurrences du mot dans la chaîne
    const matches = str.match(new RegExp(word, 'gi'));
    // Si matches n'est pas null, retourne la longueur de matches (le nombre d'occurrences)
    return matches? matches.length : 0;
}
function countOccurrences(str, word) {
	// Créer une expression régulière pour trouver toutes les occurrences du mot, sans tenir compte de la casse
	const regex = new RegExp(word, 'g')
	// On remplace chaque occurrence du mot par une chaîne vide, puis on compare la longueur de la chaîne avant et après
	const matches = str.match(regex)
	// Si il y a des correspondances, on retourne leur nombre, sinon on retourne 0
	return matches ? matches.length : 0
}

/* console.log(countOccurrences('hello hello hello', 'hello')) // Affiche 3
console.log(countOccurrences('This is a test', 'test')) // Affiche 1
console.log(countOccurrences('abcd abc abc', 'abc')) // Affiche 2
console.log(countOccurrences('abcd abc abc', 'xyz')) // Affiche 0 */

function countOccurrences(str, word) {
	let count = 0

	let words = str.split(' ')
	// Parcours de la chaîne en cherchant des occurrences du mot
	words.forEach((element) => {
		if (element == word) {
			count = count + 1
		}
	})

	return count
}

console.log(countOccurrences('hello hello hello', 'hello')) // Affiche 3
console.log(countOccurrences('This is a test', 'test')) // Affiche 1
console.log(countOccurrences('abcd abc abc', 'abc')) // Affiche 2
console.log(countOccurrences('abcd abc abc', 'xyz')) // Affiche 0

/* Créez une fonction capitalizeFirstLetter qui prend une chaîne de caractères et retourne la même chaîne avec la première lettre en majuscule. */
function capitalizeFirstLetter(str) {
    // Utilisez la méthode toUpperCase pour convertir la première lettre en majuscule
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// solution 1

function capitalizeFirstLetter(str) {
	// On vérifie que la chaîne n'est pas vide
	if (str.length === 0) return str
	// On met la première lettre en majuscule et on concatène le reste de la chaîne
	return str.charAt(0).toUpperCase() + str.slice(1)
}

// Solution 2
function capitalizeFirstLetter(str) {
	return str[0].toUpperCase() + str.slice(1)
}

console.log(capitalizeFirstLetter('hello')) // Affiche "Hello"
console.log(capitalizeFirstLetter('world')) // Affiche "World"

/* Écrivez une fonction truncateString qui raccourcit une chaîne si elle est plus longue qu'une longueur spécifiée et ajoute "..." à la fin. */

function truncateString(str, length) {
    // Si la longueur de la chaîne est plus petite ou égale à la longueur spécifiée, retourne la chaîne originale
    if(str.length <= length) { return str; }
    // Si la longueur de la chaîne est supérieure à la longueur spécifiée, retourne la chaîne raccourcie avec "..."
    return str.slice(0, length) + "...";
}
function truncateString(str, length) {
	// Si la longueur de la chaîne est plus grande que la longueur spécifiée, on tronque et ajoute "..."
	if (str.length > length) {
		return str.slice(0, length) + '...';
	}
	return str // Sinon, on retourne la chaîne telle quelle
}
console.log(truncateString('Hello, world!', 5)) // Affiche "Hello..."
console.log(truncateString('Short', 10)) // Affiche "Short" 
