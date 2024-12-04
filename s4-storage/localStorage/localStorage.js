//Lors du clic sur le bouton, sauvegardez le texte saisi dans LocalStorage avec la clé utilisateur.
document.addEventListener("DOMContentLoaded", () => {
  const sauvegarderButton = document.getElementById("sauvegarder");
  const inputText = document.getElementById("inputText");
  const message = document.getElementById("message");

  // Récupération de la valeur stockée au chargement de la page
  const savedValue = localStorage.getItem("utilisateur");

  // vérifie si une valeur est déjà stockée dans le LocalStorage sous la clé utilisateur. Si c'est le cas,
  // elle réaffiche cette valeur dans le champ de saisie.
  if (savedValue) {
    inputText.value = savedValue;
  }
  // Lorsque le bouton "Sauvegarder" est cliqué, cette fonction fléchée est exécutée.
  sauvegarderButton.addEventListener("click", (event) => {
    event.preventDefault(); // empecher le formulaire de se soumettre

    const nom = inputText.value;
    //sauvegarde la valeur du champ de saisie dans le LocalStorage sous la clé utilisateur
    localStorage.setItem("utilisateur", nom);

    //affiche un message de confirmation.
    message.textContent = "Texte sauvegardé avec succès!";
  });
});
