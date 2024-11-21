// Créez un objet avec des propriétés
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

// Créez une fonction objectToStringArray qui prend un objet en entrée et retourne un tableau contenant des chaînes de caractères représentant les noms des propriétés de cet objet.
function objectToStringArray(obj) {
    // Récupère un tableau des noms des propriétés de l'objet
    const keys = Object.keys(obj);
    // Utilise la méthode map pour créer un nouveau tableau avec les chaînes de caractères
    return keys.map(key => `${key}: ${obj[key]}`);
}

// Appelle la fonction avec l'objet person et affiche le résultat dans la console
console.log(objectToStringArray(person));
// Output: ["firstName: John", "lastName: Doe", "age: 30"]  


/* Créez une fonction objectToKeyValueArray qui prend un objet en entrée et retourne un tableau contenant des tableaux de deux éléments : le premier élément est le nom d'une propriété et le second élément est la valeur correspondante. */
function objectToKeyValueArray(obj) {
    // Récupère un tableau des noms des propriétés de l'objet
    const keys = Object.keys(obj);
    // Utilise la méthode map pour créer un nouveau tableau avec les tableaux de deux éléments
    return keys.map(key => [key, obj[key]]);
}

// Appelle la fonction avec l'objet person et affiche le résultat dans la console
console.log(objectToKeyValueArray(person));
// Output: [["firstName", "John"], ["lastName", "Doe"], ["age", 30]]


/* Créez une fonction objectToQueryString qui prend un objet en entrée et retourne une chaîne de caractères qui représente les noms des propriétés de l'objet et leurs valeurs séparées par des "&". */
function objectToQueryString(obj) {
    // Récupère un tableau des noms des propriétés de l'objet
    const keys = Object.keys(obj);
    // Utilise la méthode map pour créer une chaîne de caractères avec les noms et valeurs
    return keys.map(key => key + '=' + obj[key]).join('&');
}

// Appelle la fonction avec l'objet person et affiche le résultat dans la console
console.log(objectToQueryString(person));
// Output: "firstName=John&lastName=Doe&age=30"
