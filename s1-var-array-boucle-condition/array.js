/* map() : Crée un nouveau tableau en appliquant une fonction à chaque
élément. */
let nombre = [1,2,3,4,5,6,7,8,9];
let double = nombre.map( x => x * 2);
console.log(double);

/* filter() : Crée un nouveau tableau contenant uniquement les éléments qui
répondent à une condition. */
let nombrePair = nombre.filter(x => x % 2 === 0);
console.log(nombrePair);

/* reduce() : Réduit un tableau à une seule valeur en appliquant une fonction de
réduction */
let sommme = nombre.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sommme);

/* sort() trie les éléments en tant que chaînes de caractères, */
nombre.sort((a,b)=>b-a);
console.log(nombre);

/* Facile  */
/* --------------------------------------------- */

/* 1. Créez un tableau nommé animaux contenant les éléments suivants : "chien", "chat", "lapin". et affichez le  */
 let animaux = ["chien", "chat", "lapin"];
 console.log(animaux);

 /* 2. Utilisez la méthode map() pour transformer le tableau des animaux en un nouveau tableau contenant uniquement les noms des animaux en majuscules. */
 let majuscules = animaux.map(animal => animal.toUpperCase());
 console.log(majuscules);

 /* 3. Utilisez la méthode filter() pour récupérer uniquement les animaux qui commencent par la lettre "c". */
 let commenceParC = animaux.filter(animal => animal.startsWith("c"));
 console.log(commenceParC);

 /* 4. Utilisez la méthode reduce() pour calculer la somme des tailles des animaux en centimètres. */
 let tailles = [30, 40, 25];
 let tailleMoyenne = tailles.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / tailles.length;
 console.log(tailleMoyenne);

 /* 2.Créez un tableau nommé couleurs contenant "rouge", "vert", "bleu".
Affichez le deuxième élément du tableau. */
 let couleurs = ["rouge", "vert", "bleu"];
 console.log(couleurs[1]);

 /* 3. Remplacez le premier élément du tableau animaux par "hamster". */
 animaux[0] = "hamster";
 console.log(animaux);

 /* 4. Supprimez le dernier élément du tableau couleurs. */
 couleurs.pop();
 console.log(couleurs);

 /* 5. Ajoutez un nouvel élément à la fin du tableau couleurs, "jaune". */
 couleurs.push("jaune");
 console.log(couleurs);

 /* 6. Inversez le sens de lecture du tableau couleurs. */
 couleurs.reverse();
 console.log(couleurs);

 /* Intermédiaire */
/* ----------------------------------------------------*/

/* 4. Ajoutez "perroquet" à la fin du tableau animaux.
Supprimez le premier élément du tableau animaux. */
 animaux.push("perroquet");
 animaux.shift();
 console.log(animaux);

 /* 5. Vérifiez si "chat" est présent dans le tableau animaux et affichez true ou false dans la console. */
 console.log(animaux.includes("chat"));

 /* 6.Créez un tableau nommé nombres contenant les chiffres de 1 à 10.
Affichez le nombre total d'éléments dans le tableau.*/
// Créez un tableau vide nommé nombres
let nombres = [];

// Utilisez une boucle pour remplir le tableau avec les chiffres de 1 à 10
for (let i = 1; i <= 10; i++) {
    nombres.push(i);
}

// Affichez le nombre total d'éléments dans le tableau
console.log("Le nombre total d'éléments dans le tableau est : " + nombres.length);

// Affichez le tableau pour vérification
console.log(nombres);

/* Difficiles */

/* Créez un tableau valeurs contenant des éléments dupliqués.
Utilisez filter() et indexOf() pour créer un tableau unique qui ne contient que des éléments uniques. */

let valeurs = [1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 8, 6, 7, 8, 7];

// Utilisez filter() pour ne garder que les éléments uniques

let uniqueValues = valeurs.filter((element, index, self) => {
    return self.indexOf(element) === index;
});


// Affichez le tableau pour vérification

console.log(uniqueValues);
