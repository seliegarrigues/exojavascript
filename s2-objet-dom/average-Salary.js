/* Créez un objet entreprise qui contient une liste d'employés. Chaque employé est représenté par un objet avec les propriétés suivantes :

    nom (ex. "Alice")
    poste (ex. "Développeur")
    salaire (ex. 45000) */
    
let entreprise = {
    employes: [
        { nom: "Alice", poste: "Développeur", salaire: 45000 },
        { nom: "Bob", poste: "Chef de projet", salaire: 60000 },
        { nom: "Charlie", poste: "Réception", salaire: 30000 }
    ],
    /*   Créez une méthode calculerSalaireMoyen() dans l'objet entreprise qui calcule le salaire moyen de tous les employés de l'entreprise et retourne cette valeur. La méthode doit prendre en compte les employés présents dans le tableau employes. */
    calculerSalaireMoyen: function() {
        // Récupère la somme des salaires des employés
        let salaireTotal = 0;
        for (let employe of entreprise.employes) {
            salaireTotal += employe.salaire;
        }
        
        // Calcul le salaire moyen
        let salaireMoyen = salaireTotal / entreprise.employes.length;
        
        // Retourne le salaire moyen
        return salaireMoyen;
    }
};
// Définissez la methode calculerSalaireMoyen
    function calculerSalaireMoyen1 (employes) {
        // Récupère la somme des salaires des employés
        let totalSalaire = 0;
        for (let employe of employes) {
            totalSalaire += employe.salaire;
        }
        
        // Calcul le salaire moyen
        let salaireMoyen = totalSalaire / employes.length;
        
        // Retourne le salaire moyen
        return salaireMoyen;
    }
// Cas standard : L'entreprise a 4 employés avec des salaires différents.
let entrepriseCasStandard = {
employes : [
    { nom: "Alice", poste: "Développeur", salaire: 45000 },
    { nom: "Bob", poste: "Chef de projet", salaire: 55000 },
    { nom: "Charlie", poste: "Réception", salaire: 38000 },
    { nom: "David", poste: "Analyste", salaire: 42000 }
]  

};

// Appellez la méthode calculerSalaireMoyen1()

console.log(calculerSalaireMoyen1(entrepriseCasStandard.employes)); // Affiche 45000

// Cas avec un seul employé : si l'entreprise n'a qu'un employé, le salaire moyen est égal au salaire de l'employé.

let entrepriseCasUnEmploye = {
employes : [
    { nom: "Alice", poste: "Développeur", salaire: 45000 }
]
};

// Appellez la méthode calculerSalaireMoyen1()

console.log(calculerSalaireMoyen1(entrepriseCasUnEmploye.employes)); // Affiche 45000

// Cas avec des salaires égaux : si tous les employés ont le même salaire, le salaire moyen est égal à ce salaire.

let entrepriseCasSalaireEgaux = {
employes : [
    { nom: "Alice", poste: "Développeur", salaire: 40000 },
    { nom: "Bob", poste: "Chef de projet", salaire: 40000 },
    { nom: "Charlie", poste: "Réception", salaire: 40000 },
    { nom: "David", poste: "Analyste", salaire: 40000 }
]
};

// Appellez la méthode calculerSalaireMoyen1()

console.log(calculerSalaireMoyen1(entrepriseCasSalaireEgaux.employes)); // Affiche 45000

// cas avec des salaires à zéro : si aucun employé n'a de salaire, la méthode retourne 0.

let entrepriseCasZeroSalaire = {
employes : [{ nom: "Alice", poste: "Développeur", salaire:0 },
    { nom: "Bob", poste: "Chef de projet", salaire: 0 },
    { nom: "Charlie", poste: "Réception", salaire: 0 },
    { nom: "David", poste: "Analyste", salaire: 0 }]
};

// Appellez la méthode calculerSalaireMoyen1()

console.log(calculerSalaireMoyen1(entrepriseCasZeroSalaire.employes)); // Affiche 0

