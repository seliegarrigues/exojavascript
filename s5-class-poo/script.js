/**
 * Classe représentant un créneau horaire.
 */
class Creneau {
    /**
     * Constructeur de la classe Creneau.
     * @param {string} heureDebut - Heure de début du créneau (format HH:mm).
     * @param {number} duree - Durée du créneau en minutes.
     * @param {Professeur} professeur - Professeur associé au créneau.
     */
    constructor(heureDebut, duree, professeur) {
        this.heureDebut = heureDebut;
        this.duree = duree;
        this.professeur = professeur;
    }

    /**
     * Méthode pour afficher les informations du créneau.
     */
    afficher() {
        const heureFin = this.calculerHeureFin();
        console.log(`${this.heureDebut} - ${heureFin} (${this.duree} minutes)  Professeur associé : ${this.professeur.nom} ${this.professeur.prenom}`);
    }

    /**
     * Méthode pour calculer l'heure de fin du créneau.
     * @returns {string} - Heure de fin du créneau (format HH:mm).
     */
    calculerHeureFin() {
        const [heures, minutes] = this.heureDebut.split(':').map(Number);
        const totalMinutes = heures * 60 + minutes + this.duree;
        const finHeures = Math.floor(totalMinutes / 60);
        const finMinutes = totalMinutes % 60;
        return `${String(finHeures).padStart(2, '0')}:${String(finMinutes).padStart(2, '0')}`;
    }
}

/**
 * Classe représentant un professeur.
 */
class Professeur {
    static salaireDeBase = 2000;

    /**
     * Constructeur de la classe Professeur.
     * @param {string} nom - Nom du professeur.
     * @param {string} prenom - Prénom du professeur.
     * @param {string} matière - Matière enseignée par le professeur.
     * @param {string} numeroDeTelephone - Numéro de téléphone du professeur.
     * @param {Address} adresse - Adresse du professeur.
     */
    constructor(nom, prenom, matière, numeroDeTelephone, adresse) {
        this.nom = nom;
        this.prenom = prenom;
        this.matière = matière;
        this.numeroDeTelephone = numeroDeTelephone;
        this.adresse = adresse;
        this.creneaux = [];
    }

    // Getter et setter pour numéroDeTéléphone
    get numeroDeTelephone() {
        return this._numeroDeTelephone;
    }
    set numeroDeTelephone(value) {
        this._numeroDeTelephone = value;
    }

    // Getter et setter pour salaireDeBase
    static get salaireDeBase() {
        return this._salaireDeBase;
    }
    static set salaireDeBase(value) {
        this._salaireDeBase = value;
    }

    /**
     * Méthode pour afficher les informations du professeur.
     */
    Afficher() {
        console.log(`------------------Professeur--------------------------------`);
        console.log(`Nom : ${this.nom}`);
        console.log(`Prénom : ${this.prenom}`);
        console.log(`Matière : ${this.matière}`);
        console.log(`Numéro de téléphone : ${this.numeroDeTelephone}`);
        console.log(`Salaire de base : ${Professeur.salaireDeBase}`);
        if (this.adresse) {
            this.adresse.Afficher();
        }
        console.log(`Créneaux horaires :`);
        this.creneaux.forEach(creneau => creneau.afficher());
    }

    /**
     * Méthode pour ajouter un nouveau créneau horaire.
     * @param {string} heureDebut - Heure de début du créneau (format HH:mm).
     * @param {number} duree - Durée du créneau en minutes.
     */
    ajouterCreneau(heureDebut, duree) {
        if (this.creneaux.length >= 15) {
            console.log(`Erreur : Le nombre maximum de créneaux (15) est atteint pour le professeur ${this.nom} ${this.prenom}.`);
            return;
        }
        const nouveauCreneau = new Creneau(heureDebut, duree, this);
        this.creneaux.push(nouveauCreneau);
    }
}

/**
 * Classe représentant un étudiant.
 */
class Etudiants {
    /**
     * Constructeur de la classe Etudiants.
     * @param {string} nom - Nom de l'étudiant.
     * @param {string} prenom - Prénom de l'étudiant.
     * @param {string} numeroDeTelephone - Numéro de téléphone de l'étudiant.
     * @param {string} dateDeNaissance - Date de naissance de l'étudiant.
     * @param {string} niveau - Niveau d'étude de l'étudiant.
     * @param {string} commentaires - Commentaires sur l'étudiant.
     * @param {Address} adresse - Adresse de l'étudiant.
     */
    constructor(nom, prenom, numeroDeTelephone, dateDeNaissance, niveau, commentaires, adresse) {
        this.nom = nom;
        this.prenom = prenom;
        this.numeroDeTelephone = numeroDeTelephone;
        this.dateDeNaissance = dateDeNaissance;
        this.niveau = niveau;
        this.commentaires = commentaires;
        this.adresse = adresse;
    }

    // Getter et setter pour Numéro de téléphone
    get numeroDeTelephone() {
        return this._numeroDeTelephone;
    }
    set numeroDeTelephone(value) {
        this._numeroDeTelephone = value;
    }

    /**
     * Méthode pour afficher les informations de l'étudiant.
     */
    Afficher() {
        console.log(`------------------Etudiant--------------------------------`);
        console.log(`Nom : ${this.nom}`);
        console.log(`Prénom : ${this.prenom}`);
        console.log(`Numéro de téléphone : ${this.numeroDeTelephone}`);
        console.log(`Date de naissance : ${this.dateDeNaissance}`);
        console.log(`Niveau : ${this.niveau}`);
        console.log(`Commentaires : ${this.commentaires}`);
        if (this.adresse) {
            this.adresse.Afficher();
        }
    }
}

/**
 * Classe représentant une adresse.
 */
class Address {
    /**
     * Constructeur de la classe Address.
     * @param {string} numeroVoie - Numéro de la voie.
     * @param {string} rue - Nom de la rue.
     * @param {string} ville - Nom de la ville.
     * @param {string} codePostal - Code postal.
     * @param {string} mentionsComplementaires - Mentions complémentaires (optionnel).
     */
    constructor(numeroVoie, rue, ville, codePostal, mentionsComplementaires = null) {
        this.numeroVoie = numeroVoie;
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
        this.mentionsComplementaires = mentionsComplementaires;
    }

    /**
     * Méthode pour afficher les informations de l'adresse.
     */
    Afficher() {
        console.log(`-----Adresse-----`);
        if (this.mentionsComplementaires) {
            console.log(`Mentions complémentaires : ${this.mentionsComplementaires}`);
        }
        console.log(`${this.numeroVoie} ${this.rue}`);
        console.log(`${this.ville} ${this.codePostal}`);
    }
}

// Instancier deux professeurs avec adresses
let adresseProf1 = new Address('19', 'avenue Léo Lagrange', 'Niort', '79000');
let adresseProf2 = new Address('12', 'rue des Lilas', 'Paris', '75012');
let prof1 = new Professeur('Dupont', 'Jean', 'Mathématiques', '01-23-45-67-89', adresseProf1);
let prof2 = new Professeur('Martin', 'Sophie', 'Physique', '06-78-90-12-34', adresseProf2);

// Ajouter des créneaux horaires aux professeurs
prof1.ajouterCreneau('09:00', 15);
prof1.ajouterCreneau('10:00', 30);
prof2.ajouterCreneau('11:00', 45);

// Afficher les informations des professeurs avec les créneaux
prof1.Afficher();
prof2.Afficher();

// Instancier des adresses pour les étudiants
let adresseEtudiant1 = new Address('24', 'avenue des champs', 'Paris', '75008', 'appartement B');
let adresseEtudiant2 = new Address('5', 'rue Victor Hugo', 'Nantes', '44000');

// Instancier deux étudiants avec adresses
let etudiant1 = new Etudiants('Lamy', 'Camille', '07-12-34-56-78', '15 mai 1998', 'Licence', 'Allergique au lactose', adresseEtudiant1);
let etudiant2 = new Etudiants('Rivière', 'Thomas', '06-98-76-54-32', '22 janvier 1995', 'Master', [], adresseEtudiant2);

// Afficher les informations des étudiants
etudiant1.Afficher();
etudiant2.Afficher();
