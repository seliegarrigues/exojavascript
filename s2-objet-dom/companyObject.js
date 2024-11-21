/*  Écrivez une fonction employesParPoste qui prend l'objet entreprise et un poste en paramètre et retourne un tableau des noms des employés occupant ce poste. 

Instructions :
1) Créer un objet : 
L'objet entreprise doit contenir les propriétés suivantes :

- nom (string) : Le nom de l'entreprise (par exemple, "TechCorp").
- secteur (string) : Le secteur d'activité de l'entreprise (par exemple, "Technologie").
- adresse (object) : Un objet contenant les informations de l'adresse de l'entreprise avec les propriétés suivantes :
        * rue (string) : L'adresse de la rue (par exemple, "123 rue de l'Innovation").
        * ville (string) : La ville où l'entreprise est située (par exemple, "Paris").
        * codePostal (string) : Le code postal (par exemple, "75000").
    - employes (array) : Un tableau d'objets représentant les employés de l'entreprise. Chaque employé possède les propriétés suivantes :
        *nom (string) : Le nom de l'employé (par exemple, "Alice").
        *poste (string) : Le poste de l'employé (par exemple, "Développeur", "Designer", etc.).
        *salaire (number) : Le salaire de l'employé (par exemple, 50000).
*/

const entreprise = {
    nom: "TechCorp",
    secteur: "Technologie",
    adresse: {
        rue: "123 rue de l'Innovation",
        ville: "Paris",
        codePostal: "75000"
    },
    employes: [
        { nom: "Alice", poste: "Développeur", salaire: 50000 },
        { nom: "Bob", poste: "Designer", salaire: 45000 },
        { nom: "Charlie", poste: "Développeur", salaire: 55000 },
        { nom: "David", poste: "Designer", salaire: 40000 }
    ]
};
/* Ajoutez au moins 3 employés différents dans la propriété employes, chacun avec un nom, un poste et un salaire. */    

entreprise.employes.push({ nom: "Berthe", poste: "Développeur", salaire: 60000 });
entreprise.employes.push({ nom: "Sidonie", poste: "Développeur", salaire: 60000 });
entreprise.employes.push({ nom: "Eve", poste: "Développeur", salaire: 60000 });

/*vérifier si les employés ont bien été ajoutés */

console.log(entreprise.employes);
/*afficher dans la console le nom de l'entreprise et l'adresse complète. */

console.log(`Nom de l'entreprise : ${entreprise.nom}`);
console.log(`Adresse : ${entreprise.adresse.rue}, ${entreprise.adresse.ville} (${entreprise.adresse.codePostal})`);