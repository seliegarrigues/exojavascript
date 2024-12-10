//Crée une classe Animal avec les propriétés nom, espece, et age, ainsi qu'une méthode seDeplacer qui décrit le déplacement de l'animal.

class Animal {
    constructor(nom, espece, age) {
        this.nom = nom;
        this.espece = espece;
        this.age = age;
    }

    seDeplacer() {
        console.log(`${this.nom} se déplace.`);
    }
}
// Crée des classes héritées de Animal : Oiseau (voler), Poisson (nager), Mammifere (marcher).

class Oiseau extends Animal {
    voler() {
        console.log(`${this.nom} voler.`);
    }
}

class Poisson extends Animal {
    nager() {
        console.log(`${this.nom} nage.`);
    }
}

class Mammifere extends Animal {
    marcher() {
        console.log(`${this.nom} marcher.`);
    }
}
//Crée une classe Zoo avec un tableau d'animaux. 

    class Zoo {
        constructor() {
            this.animaux = [];
        }

        ajouterAnimal(animal) {
            this.animaux.push(animal);
        }

        afficherListeAnimaux() {
            console.log("Liste des animaux du zoo :");
            this.animaux.forEach(animal => animal.seDeplacer());
        }
    }
    // Ajoute une méthode pour afficher un message si un animal est trop vieux pour être déplacé.
    //Utilise des getters et setters pour la gestion de l'âge des animaux.
    
   
<<<<<<< Tabnine <<<<<<<
        get ageMaximal() {
            return this.animaux.reduce((maxAge, animal) => Math.max(maxAge, animal.age), 0);
        }
>>>>>>> Tabnine >>>>>>>// {"conversationId":"c6dfc23a-33e1-4660-bd59-3096d14c6961","source":"instruct"}
        
        set ageMaximal(nouvelAgeMaximal) {
            this.animaux.forEach(animal => {
                if (animal.age > nouvelAgeMaximal) {
                    console.error(`L'animal ${animal.nom} est trop vieux pour être déplacé.`);
                } else {
                    this.#age = nouvelAgeMaximal;
                }
            });
        }
    