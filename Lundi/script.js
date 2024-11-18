const User = [
    {
        name: "John Doe",
        email: "john.doe@example.com",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345",
        },
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        age: 25,
        address: {
            street: "456 Elm St",
            city: "Othertown",
            state: "NY",
            zip: "67890",
        },
    },
    {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        age: 35,
        address: {
            street: "789 Oak St",
            city: "Anycity",
            state: "TX",
            zip: "54321",
        },
    },
    {
        name: "Bob Brown",
        email: "bob.brown@example.com",
        age: 28,
        address: {
            street: "101 Pine St",
            city: "Elsewhere",
            state: "FL",
            zip: "98765",
        },
    },
];

// 1. Boucler sur le tableau d'objets `User`
let userListHTML = '';
        for (const user of User) {
            userListHTML += `
                <div>
                    <h2>${user.name}</h2>
                    <p>Email: ${user.email}</p>
                    <p>Age: ${user.age}</p>
                    <p>Address: ${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zip}</p>
                </div>
            `;
        }
// 2. Concaténer le résultat dans une variable avec le template littéral
// (Déjà fait dans la boucle ci-dessus)

// 3. Préparer le DOM avec un ID, une balise ou une classe, puis afficher le résultat dans le DOM
document.querySelector('#userList').innerHTML = userListHTML;
document.getElementById('userList').innerHTML = userListHTML;
document.getElementsByClassName('userContainer')[0].innerHTML = userListHTML;

 // 1. Créer une boucle `for` qui itère de 1 à 10
 let numberListHTML = '';
 for (let i = 1; i <= 10; i++) {
     // 2. Multiplier le nombre par 2
     let multipliedNumber = i * 2;
     // 3. Concaténer le résultat dans une variable avec le template littéral
     numberListHTML += `<p>${i} x 2 = ${multipliedNumber}</p>`;
 }

 // 4. Afficher le résultat dans le DOM
 document.getElementById('numberList').innerHTML = numberListHTML;