// Crée une classe Animal avec un constructeur prenant un nom et une espece.
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    // Ajoute une méthode faireDuBruit qui renvoie "L'animal fait un bruit".
    faireDuBruit() {
        return "L'animal fait un bruit";
    }
}

// Crée une classe Chien qui hérite de Animal et redéfinit la méthode faireDuBruit pour que le chien aboie ("Le chien aboie : Woof!").
class Chien extends Animal {
    faireDuBruit() {
        return "Le chien aboie : Woof!";
    }
}

// Crée une classe Chat qui hérite également de Animal et redéfinit faireDuBruit pour que le chat miaule ("Le chat miaule : Meow!").
class Chat extends Animal {
    faireDuBruit() {
        return "Le chat miaule : Meow!";
    }
}

// Crée une méthode decrireAnimal qui prend un objet Animal en paramètre et affiche son bruit.
function decrireAnimal(animal) {
    console.log(animal.faireDuBruit());
}

// Instancie un Chien et un Chat et utilisez decrireAnimal pour les deux.
const monChien = new Chien("Rex", "Chien");
const monChat = new Chat("Felix", "Chat");

decrireAnimal(monChien); // Affiche : Le chien aboie : Woof!
decrireAnimal(monChat); // Affiche : Le chat miaule : Meow!
