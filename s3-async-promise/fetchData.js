// Fonction fetchUserData
const fetchUserData = (id) => {
    return new Promise((resolve, reject) => {
        // simuler un délai de réponse
        setTimeout(async () => {
            console.log(`ID en cours de traitement: ${id}`);
            // vérifier si l'ID est pair
            if (id % 2 === 0) {
                try {
                    // effectuer la requête
                    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

                    if (response.ok) {
                        const data = await response.json();
                        console.log(`Données récupérées avec succès pour l'utilisateur ${id}:`, data);
                        resolve(data);
                    } else {
                        console.log(`Erreur HTTP pour l'ID ${id}: ${response.status}`);
                        reject('Erreur HTTP : ' + response.status);
                    }
                } catch (error) {
                    console.log(`Erreur de réseau pour l'ID ${id}: ${error.message}`);
                    reject(`Erreur de réseau : ${error.message}`);
                }
            } else {
                // rejeter la promesse si l'ID est impair
                console.log(`L'ID ${id} est impair, il doit être pair.`);
                reject(`L'ID ${id} est impair, il doit être pair.`);
            }
        }, 1000);
    });
};

// Liste des ID des utilisateurs
const userIds = [1, 2, 3];

// Appelle fetchUserData pour chaque ID et stocke les promesses dans un tableau
const promises = userIds.map(id => fetchUserData(id));

// Fonction pour exécuter les requêtes et afficher les résultats
const executeRequests = async () => {
    const results = await Promise.allSettled(promises);
    results.forEach((result, index) => {
        const id = userIds[index];
        if (result.status === 'fulfilled') {
            console.log(`Données récupérées pour l'utilisateur ${id}:`, result.value);
        } else {
            console.log(`Erreur lors de la récupération des données pour l'utilisateur ${id}: ${result.reason}`);
        }
    });
};

// Appel de la fonction pour exécuter les requêtes
executeRequests();
