/* Modifie la fonction getNumber pour inclure un rejet :

    Si le nombre aléatoire généré est inférieur ou égal à 5, la Promesse doit être rejetée avec le message "Number too low".
    Utilise .catch() pour gérer cette erreur */

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
setTimeout(() => {
  resolve(randomNumber);
}, 2000);

function getNumber() {
  return delay(2000).then(() => {
    /*             assure que le nombre aléatoire fourni est un nombre inférieur ou égal à 5.
     */
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber <= 5) {
      return Promise.reject(new Error("Number is to loo"));
    }
    return randomNumber;
  });
}
//exemple d'utilisation

getNumber(5)
  .then((number) => console.log(`Le nombre aléatoire est : ${number}`))
  .catch((error) => console.error(`Erreur : ${error.message}`));