/* Créez deux objets représentant des employés. L'un contient les informations de base (nom, poste), et l'autre contient des informations supplémentaires (salaire, date de naissance). */

let employee1 = {
    baseInfo: {
        name: "John Doe",
        jobTitle: "Software Engineer"
    },
    additionalInfo: {
        salary: 50000,
        birthDate: "1990-01-01"
    }
};

let employee2 = {
    baseInfo: {
        name: "Jane Smith",
        jobTitle: "Project Manager"
    },
    additionalInfo: {
        salary: 60000,
        birthDate: "1985-12-31"
    }
};

/* Utilisez Object.assign() pour fusionner les informations de base et supplémentaires pour chaque employé. */

let fusionEmployee1 = Object.assign({}, employee1.baseInfo, employee1.additionalInfo);
let fusionEmployee2 = Object.assign({}, employee2.baseInfo, employee2.additionalInfo);

console.log(fusionEmployee1); // Affiche le résultat de la fusion des objets pour employee1
console.log(fusionEmployee2); // Affiche le résultat de la fusion des objets pour employee2

/* Modifier le salaire de l'employé 2 */
employee2.additionalInfo.salary = 65000;

/* Fusionner à nouveau les informations de base et supplémentaires pour employé 2 */
let updatedFusionEmployee2 = Object.assign({}, employee2.baseInfo, employee2.additionalInfo);

console.log("Après modification du salaire :");
console.log(updatedFusionEmployee2); // Affiche le résultat de la fusion des objets après modification du salaire

/* Ensuite, créez un autre objet contenant l'adresse postale de l'employé  avec les propriétés suivantes :
street (rue)
city (ville)
zipcode (code postal) */


let address = {
    street: "123 Main St",
    city: "New York",
    zipcode: "10001"
};
/* Utilisez l'opérateur spread (...) pour ajouter l'adresse postale à l'objet de l'employé, puis affichez l'objet final combiné qui contient à la fois les informations personnelles et l'adresse de l'employé.
 */

let mergedEmployee = {
    ...employee1.baseInfo,
    ...employee1.additionalInfo,
    ...address
};

console.log("Employé avec adresse :");

console.log(mergedEmployee); // Affiche l'objet final combiné qui contient les informations personnelles et l'adresse de l'employé