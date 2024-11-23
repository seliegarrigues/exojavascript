/* 
1. 2.Écris une fonction categorizeNumber qui prend un nombre en paramètre et retourne :

    "Positif" si le nombre est supérieur à 0.
    "Négatif" si le nombre est inférieur à 0.
    "Zéro" si le nombre est exactement 0.

2. Utilise une boucle for pour tester cette fonction avec un tableau [-5, 0, 8, -2, 5] et affiche les résultats.

3. Affiche un message spécial pour les nombres pairs positifs.
*/
const arr = [-5, 0, 8, -2, 5];

function categorizeNumber(num) {
	let category;

	/* Le switch est évalué sur la valeur true, ce qui permet aux conditions dans chaque case de devenir des expressions booléennes.
Chaque case vérifie si l'expression renvoie true, et si c'est le cas, il exécute le bloc associé. */

	switch (true) {
		case num > 0:
			category = num % 2 == 0 ? 'nombres pair positif' : 'nombre positif';
			break;

		case num < 0:
			category = 'negatif';
			break;

		case num === 0:
			category = 'zéro';
			break;

		default:
			category = 'error';
			break;
	}

	return category;
}

arr.forEach((element) => {
	console.log(categorizeNumber(element));
});
/*
1. ** la Fonction à l'Intérieur de la Boucle** :
    -j'avais défini la fonction `categorizeNumber` à l'intérieur de la boucle `for...of`, ce qui n'est pas correct. Les fonctions doivent être définies en dehors des boucles pour être réutilisables.

1. **Séparation des Vérifications** :
    - j'avais séparé la vérification des nombres pairs positifs dans une fonction distincte `checkNumber`, ce qui complique inutilement le code.  il vaut mieux Intégrer cette vérification directement dans `categorizeNumber` simplifie le code.
2. **Utilisation de `if...else` au Lieu de `switch`** :
    - Bien que les instructions `if...else` soient correctes, l'utilisation de `switch` avec `true` comme expression est une manière plus élégante de gérer plusieurs conditions booléennes.
3. **Utilisation de `for...of` au Lieu de `forEach`** :
    - La méthode `forEach` est plus concise et moderne pour parcourir un tableau et appliquer une fonction à chaque élément.

En résumé, le corrigé utilise des structures de code plus modernes et concises, ce qui rend le code plus lisible et maintenable.*/