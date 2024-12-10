//Crée une classe Livre avec un constructeur prenant un titre et un auteur comme paramètres.

class Livre {
    constructor(titre, auteur) {
        this.titre = titre;
        this.auteur = auteur;
    }

    // Ajoute une méthode afficherDetails qui renvoie une phrase comme : "Le livre [titre] est écrit par [auteur]".


    afficherDetails() {
        return `Le livre ${this.titre} est écrit par ${this.auteur}`;
    }
}
//Crée deux objets de type Livre et affiche leurs détails.

const livre1 = new Livre('Le Petit Prince', 'Antoine de Saint-Exupéry');
console.log(livre1.afficherDetails()); // Affiche : "Le livre Maison est écrit par Georges Braque"

const livre2 = new Livre('Les Misérables', 'Victor Hugo');
console.log(livre2.afficherDetails()); // Affiche : "Le livre Les Misérables est écrit par Jane Austen"