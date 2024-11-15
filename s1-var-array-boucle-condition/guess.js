/* Exercice 2 : Jeu de devinettes avec une solution aléatoire

Objectif : Utiliser une boucle pour créer un jeu où l'utilisateur doit deviner un nombre généré aléatoirement.

Instructions :

    - Créez une fonction qui prend en paramètre un nombre correct à deviner.

    - À chaque tour de boucle, générez un nombre aléatoire entre 1 et 100.

    - Affichez le nombre généré à chaque essai avec un message qui indique quel essai cela représente.
    
    - La boucle doit continuer jusqu'à ce que le nombre généré corresponde au nombre à deviner.
    
    - Affichez un message final indiquant combien d'essais l'utilisateur a fait pour trouver le bon nombre. */
function devinettes(nombreCorrect) {
    let essais = 0;
    let nombreGénère =0;
    while   (nombreGénère !== nombreCorrect){
        essais ++;
        nombreGénère = Math.floor(Math.random() * 100) + 1;
        console.log(`Essai n°${essais} : ${nombreGénère}`);

    }
    console.log(`Félicitations ! Vous avez trouvé le nombre correct en ${essais} essais.`);
}
devinettes(42)