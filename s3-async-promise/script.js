// créer une liste de 9 objets, intitulé chacun par un mot-clés, composés chacun d'un Titre, d'un thème, d'un auteur, d'une date, d'un temps de lecture et d'une description
    const articlesList = [
        { id : 1,
            title: "Les mystères de l'algorithme",
            theme: "Programmation",
            author: "Margaret Atwood",
            date: "2019-05-15",
            timeReading: "30 minutes",
            description: "Dans ce livre, nous découvrons comment l'algorithme est un outil indispensable pour réaliser des programmes efficaces et crédibles."
        },
        {
            id : 2,
            title: "JavaScript avancé",
            theme: "Développement web",
            author: "David Flanagan",
            date: "2019-06-10",
            timeReading: "60 minutes",
            description: "Ce livre vous apprendra à utiliser JavaScript pour créer des applications web et des sites web interactifs."
        },
        {

            id : 3,
            title: "Python pour les débutants",
            theme: "Langage de programmation",
            author: "David Flanagan",
            date: "2019-06-15",
            timeReading: "45 minutes",
            description: "Dans ce livre, vous apprendrez à utiliser Python pour réaliser des programmes simples et efficaces."
        },
        {
            id : 4,
            title: "C++ pour les débutants",
            theme: "Langage de programmation",
            author: "David Flanagan",
            date: "2019-06-20",
            timeReading: "60 minutes",
            description: "Dans ce livre, vous apprendrez à utiliser C++ pour créer des programmes complexes et efficaces."
        },
        {
            id : 5,
            title: "HTML5 et CSS3",
            theme: "Développement web",
            author: "David Flanagan",
            date: "2019-06-25",
            timeReading: "45 minutes",
            description: "Dans ce livre, vous apprendrez à utiliser HTML5 et CSS3 pour créer des sites web interactifs et visuels."
        },
        {
            id : 6,
            title: "Node.js pour les débutants",
            theme: "Langage de programmation",
            author: "David Flanagan",
            date: "2019-07-01",
            timeReading: "60 minutes",
            description: "Dans ce livre, vous apprendrez à utiliser Node.js pour créer des applications web et des sites web interactifs."
        },
        {
            id : 7,
            title: "React pour les débutants",
            theme: "Développement web",
            author: "David Flanagan",
            date: "2019-07-08",
            timeReading: "60 minutes",
            description: "Dans ce livre, vous apprendrez à utiliser React pour créer des applications web et des sites web interactifs."
        },
        {
            id : 8,
            title: "Angular pour les débutants",
            theme: "Développement web",
            author: "David Flanagan",
            date: "2019-07-15",
            timeReading: "60 minutes",
            description: "Dans ce livre, vous apprendrez à utiliser Angular pour créer des applications web et des sites web interactifs."
        },
        {
            id : 9,
            title :" programmation orientée objet",
            theme: "Développement web",
            author: "David Flanagan",
            date: "2019-07-22",
            timeReading: "60 minutes",
            description: "Dans ce livre, vous apprendrez à utiliser la programmation orientée objet pour créer des applications web et des sites web interactifs."
        }
    ];
    // Sélection de l'élément HTML où la liste sera insérée
    const listElement = document.getElementById("liste");

    //Parcourir le tableau d'objets avec une boucle forEach et générer le contenu html
    articlesList.forEach(article => {
        // Création d'une balise <li> pour chaque article
        const listItem = document.createElement("li");
        listItem.style.border = "1px solid #ccc";
        listItem.style.borderRadius = "5px";
        listItem.style.padding = "10px";
        listItem.style.marginBottom = "10px";
        listItem.style.backgroundColor ="#f0f0f0";
        listItem.style.boxShadow = "2px 2px 6px rgba(0,0,0,0.1)";
        listItem.style.display = "flex";
        listItem.style.flexDirection = "column";
        listItem.style.alignItems = "center";
        listItem.style.textAlign = "center";
        listElement.className = 'lien-article card';

        // Ajout d'une image aléatoire
        const img = document.createElement("img");
        img.src = `https://picsum.photos/200/150?random=${article.id}`;
        img.alt = article.title;
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        img.style.borderRadius = "5px";
        listItem.appendChild(img);

        // ajout d'un titre
        const articleTitle = document.createElement("h2");
        articleTitle.style.marginTop = "10px";
         articleTitle.style.fontSize = "1.5em";
         articleTitle.style.color = "#333";
        const textTitle = document.createTextNode(article.title);
        articleTitle.appendChild(textTitle);
       
        listItem.appendChild(articleTitle);

        // Ajout d'un thème dans la balise <li>
        const articleTheme = document.createElement("p");
        articleTheme.style.margin = "5px 0";
        articleTheme.style.fontSize = "1.2em";
        articleTheme.style.color = "#666";
        const textTheme = document.createTextNode(`Thème : ${article.theme}`);
        articleTheme.appendChild(textTheme);
        listItem.appendChild(articleTheme);

        // ajout d'un auteur
        const articleAuthor = document.createElement("p");
        const textAuthor = document.createTextNode(`Auteur : ${article.author}`);
       
        articleAuthor.appendChild(textAuthor);
        listItem.appendChild(articleAuthor);

        // Ajout d'une date
        const articleDate = document.createElement("p");
        const textDate = document.createTextNode(`Date : ${article.date}`);
        articleDate.appendChild(textDate);
        listItem.appendChild(articleDate);
         
        // Ajout d'un temps de lecture
        const articleTimeReading = document.createElement("p");
        const textTimeReading = document.createTextNode(`Temps de lecture : ${article.timeReading}`);
        articleTimeReading.appendChild(textTimeReading);
        listItem.appendChild(articleTimeReading);
        
        // Ajout d'une description
        const articleDescription = document.createElement("p");
        const textDescription = document.createTextNode(`Description : ${article.description}`);
        articleDescription.appendChild(textDescription);
        listItem.appendChild(articleDescription);
         
        /*  document.querySelectorAll('.lien-article').appendChild(articleTitle); */

            
           
        // Ajout de la balise <li> dans la balise <ul>
        listElement.appendChild(listItem);
       
    });
    //object.keys
