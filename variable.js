let prenom = "John";
let age = 25;
const nombrePi =3.14    

console.log("Bonjour, je m'appelle " + prenom + " et j'ai " + age + " ans.");
prenom = "Jane";

console.log("Maintenant, je m'appelle " + prenom + " et j'ai " + age + " ans.");    
age = 30;
console.log("Et maintenant, je m'appelle " + prenom + " et j'ai " + age + " ans.");
nombrePi = 3.15;

console.log("Le nombre Pi est maintenant égal à " + nombrePi);

/* Variables en JavaScript
Objectif
Créer et manipuler différentes variables pour comprendre leur fonctionnement
et la manière dont elles stockent des données.
Consignes
1. Création de Variables de Base
Créez un fichier nommé variables.js .
Dans ce fichier, créez trois variables pour stocker les informations
suivantes :
Votre prénom (en utilisant let )
Votre âge (en utilisant let )
Le nombre Pi (en utilisant const )
Afficher les Variables dans la Console
Utilisez console.log() pour afficher chaque variable individuellement dans la
console.
Modification des Variables
Essayez de modifier la valeur de la variable prenom pour un autre nom de
votre choix et réaffichez-la.
Modifiez la valeur de age pour simuler une année supplémentaire et
réaffichez-la.
Essayez de modifier la valeur de PI pour voir ce qui se passe (cela devrait
générer une erreur, car const ne permet pas de modifier la valeur). */

// Déclaration et initialisation avec `var`
var age = 25 // Peut être redéclarée et modifiée ( à ne jamais faire !!!)
console.log('Âge (var):', age)
var age = 26
console.log('Âge après mofication:', age)

// Déclaration et initialisation avec `let`
let nom = 'Alice' // Peut être modifiée mais pas redéclarée dans le même bloc
console.log('Nom (let):', nom)

// Déclaration et initialisation avec `const`
const PI = 3.14 // Ne peut pas être modifiée après initialisation
console.log('PI (const):', PI)

// Modification des variables `var` et `let`
age = 30 // OK
nom = 'Bob' // OK
console.log('Âge après modification (var):', age)
console.log('Nom après modification (let):', nom)
