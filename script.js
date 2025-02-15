// Données du menu
const menuItems = [
  { name: "Salade César", description: "Laitue romaine, croûtons, parmesan", price: "$8.99", category: "entrée" },
  { name: "Steak Frites", description: "Steak grillé avec frites maison", price: "$19.99", category: "plat principal" },
  { name: "Tiramisu", description: "Dessert italien au café", price: "$6.99", category: "dessert" },
  { name: "Soupe à l'oignon", description: "Soupe traditionnelle française", price: "$7.99", category: "entrée" },
  { name: "Poulet rôti", description: "Poulet rôti avec légumes de saison", price: "$15.99", category: "plat principal" },
  { name: "Mousse au chocolat", description: "Mousse légère au chocolat noir", price: "$5.99", category: "dessert" },
];

// Fonction pour afficher les éléments du menu
function displayMenuItems(category = "all") {
  const menuSection = document.querySelector(".menu-items");
  menuSection.innerHTML = ""; // Vider la section avant d'afficher les nouveaux éléments

  menuItems.forEach((item) => {
    if (category === "all" || item.category === category) {
      const itemElement = document.createElement("div");
      itemElement.classList.add("menu-item");
      itemElement.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p class="price">${item.price}</p>
      `;
      menuSection.appendChild(itemElement);
    }
  });
}

// Gestion des clics sur les boutons de filtrage
document.querySelectorAll(".filters button").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    displayMenuItems(category);
  });
});

// Afficher tous les éléments au chargement de la page
window.onload = () => displayMenuItems();