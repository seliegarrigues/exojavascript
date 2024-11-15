function afficherMessage(message) {
    // Calculer la taille du cadre en fonction de la longueur du message.
    let cadreTaille = message.length + 4;

    // Afficher la ligne du haut du cadre.
    for (let i = 0; i < cadreTaille; i++) {
        process.stdout.write('*');
    }
    console.log();

    // Afficher le message.
    console.log('* ' + message + ' *');

    // Afficher la ligne du bas du cadre.
    for (let i = 0; i < cadreTaille; i++) {
        process.stdout.write('*');
    }
    console.log();
}

// Appel de la fonction avec un exemple de message.
afficherMessage('mon message');

function afficherMessage(message) {
	let longueur = message.length + 2 // Pour ajouter les astérisques autour du message
	let ligne = '*'.repeat(longueur) // Crée une ligne de '*' avec la bonne longueur
	console.log(ligne)
	console.log('*' + message + '*') // Affiche le message avec des astérisques de chaque côté
	console.log(ligne)
}

afficherMessage('Bonjour') // Affiche le message "Bonjour" entouré de lignes d'astérisques

// Crée une fonction qui génère un cadre (comme l'exercice précédent) avec une boucle for.

// Utilise cette fonction dans afficherMessage pour remplacer *. Par exemple, au lieu de *, utilise une boucle pour répéter un autre caractère.
function afficherMessage(message, borderChar = '*') {
    const borderLength = message.length + 4;
    const border = borderChar.repeat(borderLength);

    console.log(border);
    console.log(`${borderChar} ${message} ${borderChar}`);
    console.log(border);
}

afficherMessage("mon message");
afficherMessage("un autre message", "#");

 /* correction */
 function genererCadre(longueur) {
	let cadre = ''
	for (let i = 0; i < longueur; i++) {
		cadre += '*'
	}
	return cadre
}

function afficherMessage(message) {
	let longueur = message.length + 2
	let ligne = genererCadre(longueur) // Utilise la fonction pour générer la ligne de cadre
	console.log(ligne)
	console.log('*' + message + '*')
	console.log(ligne)
}

afficherMessage('Bonjour') // Toujours le même résultat, mais avec une fonction séparée
// Déclaration de la fonction genererCadre qui prend en argument la longueur du cadre et un caractère optionnel
function genererCadre(longueur, caractere = '*') {
    // Initialisation d'une variable cadre vide
    let cadre = '';
    // Boucle for qui répète longueur fois
    for (let i = 0; i < longueur; i++) {
        // À chaque itération, on ajoute le caractère à la variable cadre
        cadre += caractere;
    }
    // On retourne la variable cadre qui contient la ligne de cadre
    return cadre;
}

// Déclaration de la fonction afficherMessage qui prend en argument le message à afficher
function afficherMessage(message) {
    // Calcul de la longueur du cadre en fonction de la longueur du message
    let longueur = message.length + 2;
    // Déclaration d'une variable ligne pour stocker la ligne de cadre
    let ligne;

    // Si le message est trop court (moins de 7 caractères), on utilise un cadre simple avec des astérisques
    if (longueur < 7) {
        ligne = genererCadre(longueur);
    // Si le message est long (plus de 12 caractères), on utilise un cadre plus élaboré avec des dièses
    } else if (longueur > 12) {
        ligne = genererCadre(longueur, '#');
    // Pour les messages de longueur intermédiaire, on utilise un cadre avec des "O"
    } else {
        ligne = genererCadre(longueur, 'O');
    }

    // On affiche la ligne du haut du cadre
    console.log(ligne);
    // On affiche le message entouré de caractères
    console.log(genererCadre(1, '*') + message + genererCadre(1, '*'));
    // On affiche la ligne du bas du cadre
    console.log(ligne);
}

// On appelle la fonction afficherMessage avec le message "Bonjour"
afficherMessage('Bonjour');

/* correction exo3
 */
function afficherMessage(message) {
	// Choisir le caractère du cadre en fonction de la longueur du message
	let caractere = message.length < 5 ? '*' : '#' // Si message court, utiliser "*" sinon "#"
	let longueur = message.length + 2 // Ajouter 2 pour prendre en compte les côtés du cadre

	// Générer le cadre
	let cadre = caractere.repeat(longueur) // Crée une ligne de caractères répétés

	// Afficher le message avec le cadre autour
	console.log(cadre) // Affiche le cadre du haut
	console.log(caractere + message + caractere) // Affiche le message avec le caractère autour
	console.log(cadre) // Affiche le cadre du bas
}

afficherMessage('Hi') // Affiche un cadre avec des "*"
afficherMessage('Hello World!') // Affiche un cadre avec des "#"
