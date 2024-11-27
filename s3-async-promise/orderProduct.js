/* Objectif : Simuler une commande en ligne */

/* => Créez une fonction commanderProduit qui retourne une promesse.La promesse doit :
 - Être tenue si un produit est en stock.
 - Être rompue si le produit est en rupture de stock. */
/*=> Simulez un délai avec setTimeout. */
const delay = ms => {
    console.log('création promesse')
    return new Promise(resolve => setTimeout(resolve, ms));
};

 const commanderProduit = produit => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('le delai est ok on résoud la promesse')
            if (produit.stock > 0) {
                resolve(true); // Le produit est en stock la promesse se résout avec true
            } else {
                reject(new Error('Produit en rupture de stock')); // Le produit est en rupture de stock, sinon la promesse se rejette avec une erreur
            }
        }, 2000);
    });
};

/* // Appeler la fonction commanderProduit et utiliser .then pour gérer le cas où le produit est en stock
    commanderProduit().then(() => {
        console.log('Commande a nouveau réussie');
    }); */



// donc peut être commandé
const commanderProduitAsync =  async produit => {
    try {
         const isAvailable = await commanderProduit(produit);
         if (isAvailable) {
            console.log('Commande réussie');
        }
    } catch (error) {
        // utiliser .catch pour gérer le cas où le produit est en rupture de stock et donc pas disponible afficher l'erreur
        console.error('Produit non disponible', error);

    }
};

//exemple d'utilisation
const produit = {stock:1};


commanderProduitAsync(produit); // La commande est réussie

const produitEnRupture = {stock:0};

commanderProduitAsync(produitEnRupture); // La commande est rejetée car le produit est en rupture de stock
