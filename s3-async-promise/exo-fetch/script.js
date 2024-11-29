// Sélectionner le bouton
const loadButton = document.querySelector('#load-dog-images');
// Sélectionner le conteneur
const dogContainer = document.querySelector('#dog-container');

// Fonction asynchrone pour récupérer les images de chiens
async function getDogImages() {
  try {
   /*  console.log('Début de la récupération des images de chiens'); */

    // Utiliser fetch pour récupérer les images. Utiliser await pour attendre la requête fetch
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    console.log('Réponse reçue:', response);

    // Vérifier si la requête a réussi (status 200)
    if (!response.ok) {
      throw new Error(`Erreur de réseau: ${response.status}`);
    }

    // Attendre que la réponse soit convertie en JSON
    const dogImages = await response.json();
    console.log('Images de chiens récupérées:', dogImages);

    // Vider le conteneur avant d'ajouter les images
    dogContainer.innerHTML = '';
    console.log('Conteneur vidé');

    // Récupérer l'URL de l'image
    const imageUrl = dogImages.message;
    console.log('URL de l\'image:', imageUrl);

    // Créer une image et l'ajouter au conteneur
    const dogImage = document.createElement('img');
    dogImage.src = imageUrl;
    dogImage.alt = 'Photo de chien';
    dogContainer.appendChild(dogImage);
    console.log('Image ajoutée au conteneur');
  } catch (error) {
    // Afficher un message d'erreur en cas d'erreur
    console.error('Erreur lors de la récupération des images :', error);
  }
}

// Ajouter un écouteur d'évènement au clic sur le bouton pour charger les images de chiens
loadButton.addEventListener('click', getDogImages);
