// Fonction pour simuler un délai
const delay = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// Fonction pour vérifier la disponibilité d'un vol
const checkFlightAvailability = flightNumber => {
    // Créer une Promise pour simuler l'appel à un service d'API retourne une promesse qui se résout ou
    return new Promise((resolve, reject) => {
        // se rejette après un délai de 2 secondes. Simuler un délai de 2 secondes
        setTimeout(() => {
            // Vérifier si le numéro de vol est "AF123" Si le numéro de vol est "AF123",
            if (flightNumber === 'AF123') {
                resolve(true); // Le vol est disponible la promesse se résout avec true.
            } else {
                reject(new Error('Flight not available')); // Le vol n'est pas disponible. Sinon, la promesse se rejette avec une erreur.
            }
        }, 2000);
    });
};

// Fonction pour réserver un vol en utilisant des Promises (.then/.catch) Cette fonction appelle checkFlightAvailability
const bookFlight = flightNumber => {
    // Appeler la fonction checkFlightAvailability
    checkFlightAvailability(flightNumber)
    /* utiliser .then pour gérer le cas où le vol est disponible. */
        .then(isAvailable => {
            // Si le vol est disponible, confirmer la réservation
            if (isAvailable) {
                console.log(`Reservation confirmed for flight ${flightNumber}`);
            }
        })
        .catch(error => {
            // utiliser .catch pour gérer le cas où le vol n'est pas disponible. Si le vol n'est pas disponible, afficher l'erreur
            console.error(error.message);
        });
};

// Fonction pour réserver un vol en utilisant async/await pour appeler checkFlightAvailability. et try/catch
const bookFlightAsync = async flightNumber => {
    try {
        // Appeler la fonction checkFlightAvailability avec await
        const isAvailable = await checkFlightAvailability(flightNumber);
        // Si le vol est disponible, confirmer la réservation
        if (isAvailable) {
            console.log(`Reservation confirmed for flight ${flightNumber}`);
        }
    } catch (error) {
        // Si le vol n'est pas disponible, afficher l'erreur utilise try/catch pour gérer les erreurs.
        console.error(error.message);
    }
};

// Exemples d'utilisation
bookFlight('AF123'); // Réservation confirmée
bookFlight('XY456'); // Vol non disponible

bookFlightAsync('AF123'); // Réservation confirmée
bookFlightAsync('XY456'); // Vol non disponible
