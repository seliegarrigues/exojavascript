/* Créez un objet livre qui contient les propriétés suivantes : titre, auteur, pages et une méthode description qui affiche une phrase comme : "Le livre 'titre' a été écrit par "auteur" et compte "pages" pages." */
let book = {
    titre: "Maison",
    auteur: "Pierre-Auguste Renoir",
    pages: 144,
    description: function() {
        return `Le livre '${this.titre}' a été écrit par ${this.auteur} et compte ${this.pages} pages.`;
    }
};
/* Modifiez la valeur de l'auteur et affichez l'objet mis à jour . */

book.auteur = "Georges Braque";
console.log(book); // Affiche : { titre: 'Maison', auteur: 'Georges Braque', pages: 144, description: [Function: description] }  

book["auteur"] = "Georges Sand"; 
console.log(book); // Affiche : { titre: 'Maison', auteur: 'Georges Sand', pages: 144, description: [Function: description] }