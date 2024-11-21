function countNestedMembers(obj) {
    // Vérifie si l'objet est null ou undefined
    if (obj === null || obj === undefined) {
        return 0;
    }

    // Initialise le compteur à 0
    let count = 0;

    // Parcourt les propriétés de l'objet
    for (let key in obj) {
        // Vérifie si la propriété appartient directement à l'objet
        if (obj.hasOwnProperty(key)) {
            // Incrémente le compteur pour les propriétés normales
            count++;
            // Vérifie si la propriété est un objet et non null
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                // Appelle la fonction récursivement pour le sous-objet
                count += countNestedMembers(obj[key]);
            }
        }
    }

    return count;
}

// Testez la fonction avec un exemple

const obj = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    },
    hobbies: ["reading", "painting"]
};

console.log(countNestedMembers(obj)); //

const nestedObj = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    },
    hobbies: ["reading", "painting"],
    friends: {
        friend1: {
            name: "Alice",
            age: 28
        },
        friend2: {
            name: "Bob",
            age: 32
        }
    }
};

console.log(countNestedMembers(nestedObj)); //
