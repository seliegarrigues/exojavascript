/* 
Écris une fonction appelée getNumber qui :

    Retourne une Promesse.
    Cette Promesse résout un nombre aléatoire entre 1 et 10 après 2 secondes.
    */
  /*   ms permet de spécifier le délai lors de l'appel de la fonction. */
  const getNumber = ms => {
    return new Promise((resolve, reject) => {
        // Assure que le délai fourni est un nombre positif.
        if (typeof ms !== 'number' || ms <= 0) {
            return reject(new Error('se doit être un nombre positif'));
        }
        setTimeout(() => {
            const randomNumber = (Math.random() * 10).toFixed(2);
            resolve(randomNumber);
        }, ms);
    });
};

// Fonction getNumber avec un délai de 2000 millisecondes et gérer la réponse ou les erreurs.
getNumber(2000)
    .then(randomNumber => console.log('nombre aléatoire', randomNumber))
    .catch(error => console.error('Erreur', error));
