document.addEventListener("DOMContentLoaded", () => {
  // Faire ce que vous voulez lorsque le DOM est chargé
  console.log("DOM chargé");

  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartList = document.getElementById("cart-list");
  const removeCartButton = document.getElementById("remove-cart");
  const totalPriceElement = document.getElementById("total-price");

  //fonction pour ajouter un produit au panier.  ajoute un produit au panier stocké dans SessionStorage.
  const addToCart = (product) => {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  };
  //fonction pour mettre à jour l'affichage du panier.met à jour l'affichage du panier en ajoutant chaque produit du panier à la liste HTML.
  const updateCartDisplay = () => {
    cartList.innerHTML = "";

    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.forEach((product) => {
      const li = document.createElement("li");
      li.textContent = product;
      cartList.appendChild(li);
    });
    updateTotalPrice();
  };
  //fonction pour mettre à jour le prix total du panier.calcule le prix total en supposant que chaque produit coûte 1 €.
  const updateTotalPrice = () => {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    let totalPrice = cart.length * 1;
    totalPriceElement.textContent = `Prix Total:  + ${totalPrice}€`;
  };
  //écouteur d'évènement  au bouton "ajouter au panier"pour ajouter un produit au panier
  //ajoutent des produits au panier lorsque les boutons "Ajouter au panier" sont cliqués
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.getAttribute("data-product");
      addToCart(product);
    });
  });
  // ajouter un ecouteur d'évènement au bouton"vider le panier"
  //efface tous les produits du panier lorsque le bouton "vider le panier" est cliqué.
  removeCartButton.addEventListener("click", () => {
    sessionStorage.removeItem("cart");
    updateCartDisplay();
    updateTotalPrice();
  });
  // mettre à jour l'affichage du panier au chargement de la page
  updateCartDisplay();
});
