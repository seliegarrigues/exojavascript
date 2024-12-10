//Crée une classe Voiture avec les propriétés privées suivantes : marque, modele, et kilometrage.
//Ajoute un constructeur pour initialiser ces propriétés.


//Utilise des getters et setters pour obtenir et mettre à jour les valeurs de kilometrage (le kilométrage de la voiture ne doit pas pouvoir être négatif).

class Voiture {
    
    #kilometrage;
    
    constructor(marque, modele, kilometrageInitial) {
        this.marque = marque;
        this.modele = modele;
        this.#kilometrage = kilometrageInitial
    }


    
    get kilometrage() {
        return this.#kilometrage;
    }
    
    set kilometrage(nouveauKilometrage) {
        if (nouveauKilometrage < 0) {
            console.error("Le kilométrage ne peut pas être négatif.");
        } else {
        this.#kilometrage = nouveauKilometrage;
    }
    }
    
    
//Ajoute une méthode afficherDetails qui affiche les informations de la voiture.

afficherDetails() {
    console.log(`Marque : ${this.marque}`);
    console.log(`Modèle : ${this.modele}`);
    console.log(`Kilométrage : ${this.kilometrage} km`);
}
}

//Crée une instance de la classe Voiture et utilise ses méthodes pour tester le fonctionnement de vos propriétés et méthodes.

const maVoiture = new Voiture("Toyota", "Corolla", 10000);
maVoiture.afficherDetails();

maVoiture.kilometrage = 15000;
maVoiture.afficherDetails();

maVoiture.kilometrage = -500; // Affichera une erreur car le kilométrage ne peut pas être négatif.

maVoiture.afficherDetails();