/* Créez deux fonctions checkHotelAvailability et checkFlightAvailability.   */

const checkHotelAvailability = (hotelName) => {
  console.log("Checking availability hotel");
  return new Promise((resolve, reject) => {//ce sont des fonctions qui retournent des promesses. 
    console.log(`setting a timeout for ${hotelName}`);
    setTimeout(() => {// ces fonctions utilisent setimeout pur simuler un délai avant de résoudre les promesses.
      if (hotelName === "Hilton") { //Si l'hôtel  est disponible, 
        console.log("timeout reached");
        resolve(`${hotelName} is available.`);//la promesse est résolue avec un message de succès.. 
      } else {
        reject(`${hotelName} is not available.`);//Sinon, elle est rejetée avec un message d'erreur.
      }
    }, 1000); // Simule un délai de 1 seconde
  });
};

const checkFlightAvailability = (flightNumber) => {
  console.log("Checking availability flight");
  return new Promise((resolve, reject) => {//ce sont des fonctions qui retournent des promesses. 
    console.log(`setting a timeout for flight ${flightNumber}`);
    setTimeout(() => {// ces fonctions utilisent setimeout pur simuler un délai avant de résoudre les promesses.
      if (flightNumber === "AF123") {
        console.log("timeout2 reached");
        resolve(`Flight ${flightNumber} is available.`);// si le vol est disponible, la promesse est résolue
      } else {
        reject(`Flight ${flightNumber} is not available.`);// sinon, elle est rejetée avec un message d'erreur
      }
    }, 1500); // Simule un délai de 1.5 secondes
  });
};

/* Utilisez Promise.all pour attendre la résolution des deux promesses avant d'afficher les résultats.
 */ const planTrip = async (hotelName, flightNumber) => { //plan trip prend deux paramètres le nom de l'hôtel et le numero de vol
  try {
    const [hotelAvailability, flightAvailability] = await Promise.all([//attendre que les deux promesses (checkHotelAvailability et checkFlightAvailability) soient résolues.
      checkHotelAvailability(hotelName),
      checkFlightAvailability(flightNumber),
    ]);
    console.log(hotelAvailability);
    console.log(flightAvailability);
  } catch (error) {
    console.error(error.message);
  }
};
/* const planTrip = (hotelName, flightNumber) => {
    Promise.all([checkHotelAvailability(hotelName), checkFlightAvailability(flightNumber)])
      .then((results) => {
        console.log(results[0]); // Résultat de checkHotelAvailability
        console.log(results[1]); // Résultat de checkFlightAvailability
      })
      .catch((error) => {
        console.error(error);
      });
  }; */
  
planTrip("Hilton", "AF123");

planTrip("Marriott", "XY456");
