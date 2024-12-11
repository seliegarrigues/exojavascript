//Crée une classe Animal avec les propriétés nom, espece, et age, ainsi qu'une méthode seDeplacer qui décrit le déplacement de l'animal.

class Animal {
    #age; //Propriété privée
    constructor(nom, espece, age) { // initialise le projet
        this.nom = nom; // propriété nom
        this.espece = espece; // propriété "espece"
        this.#age = age; // propriété "age"
    }

    seDeplacer() {
        return ` le ${this.nom} de l'espèce ${this.espece} se déplace.`;
        
    }

    // Getter
    get age() {
        return this.#age;
    }

    // Setter
   
    set age(nouvelAge) {
            if (nouvelAge > 10) {
                console.error(`L'animal ${this.nom} est trop vieux pour être déplacé.`);
            } else {
                this.#age = nouvelAge;
            }
        }
    }
// Crée des classes héritées de Animal : Oiseau (voler), Poisson (nager), Mammifere (marcher).

class Oiseau extends Animal {
    seDeplacer() {
        return `Le ${this.nom} de l'espèce ${this.espece} vole`
    }
}

class Poisson extends Animal {
    seDeplacer() {
        return `Le ${this.nom} de l'espèce ${this.espece} nage`
    }
}

class Mammifere extends Animal {
    seDeplacer() {
       return `Le ${this.nom} de l'espèce ${this.espece} marche`
    }
}
// Création d'instances de la class Person
const animal10 = new Oiseau('Babourne', 'oiseau',2);
const animal11 = new Poisson('Pipado', 'poisson', 2);
const animal12 = new Mammifere('Crocolo', 'mammifere', 11);

// Utilisation des méthodes de la class Animal

animal10.seDeplacer(); // 
animal11.seDeplacer(); // 

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
        this.animaux.forEach(animal => console.log(animal.seDeplacer()));
    }
}

// creation des instances de la classe zoo
const zoo = new Zoo()
zoo.ajouterAnimal(animal10)
zoo.ajouterAnimal(animal11)
 zoo.ajouterAnimal(animal12)

zoo.afficherListeAnimaux();
animal11.age = 35;  
        
    