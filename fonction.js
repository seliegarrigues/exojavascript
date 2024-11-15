/* Crée une fonction appelée 
calculerProduit qui prend deux nombres comme 
paramètres et retourne leur produit. */

function calculerProduit(a, b) {
    /* Utilisez l'opérateur multiplication (*) pour calculer le produit de a et b. */
    return a * b;
}
console.log(calculerProduit(5, 7)); // Affiche 35

/* Déclare la fonction 
modifierNombre avec trois paramètres : 
nombre , 
addition , et 
multiplication , en donnant des valeurs par défaut à 
addition et 
multiplication  */

function modifierNombre(nombre, addition = 0, multiplication = 1) {
    /*Applique lʼaddition au nombre,  (+) pour ajouter addition à nombre. */
    nombre += addition;
    /*  (*)multiplie le résultat par le facteur de 
multiplication, pour multiplier nombre par multiplication. */
    nombre *= multiplication;
    /* Retourne le nouveau nombre. */
    return nombre;
}

console.log(modifierNombre(5, 2, 3)); // Affiche 21

/* Déclare la fonction compterDe qui prend un paramètre n */
function compterDe(n) {
    /* Si n est supérieur à 0, affiche n et appelle la fonction avec (récursion) */
    if (n > 0) {
        console.log(n);
        compterDe(n - 1);
    }
    /* Si n est égal à 0, arrête lʼaffichage de la fonction récursive. */
    else {
        return;
    }
}

// Appeler la fonction avec le paramètre 5 et afficher le résultat
compterDe(5); // Affiche 5, 4, 3, 2, 1

/* Déclare la fonction boiteASurprise qui accepte un nombre variable d'arguments avec ... */
function boiteASurprise(...args) {
    // Initialise la variable somme à 0
    let somme = 0;

    /* Affiche chaque argument dans la console. */
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);

        /* Parcours les arguments, et si c'est un nombre pair, ajoute-le à la somme. */
        if (args[i] % 2 === 0) {
            somme += args[i];
        }
    }

    /* Retourne la somme des nombres pairs. */
    return somme;
}

// Appeler la fonction avec plusieurs arguments et afficher le résultat
console.log(boiteASurprise(1, 2, 3, 4, 5, 6)); // Affiche 12
