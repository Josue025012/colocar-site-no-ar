const products = [
  { id: 1, name: "Camiseta Oversized", price: 89.9, img: "https://via.placeholder.com/200" },
  { id: 2, name: "Moletom Street", price: 189.9, img: "https://via.placeholder.com/200" },
  { id: 3, name: "Calça Cargo", price: 149.9, img: "https://via.placeholder.com/200" }
];

let cart = [];

function renderProducts() {
  const list = document.getElementById("product-list");

  products.forEach(p => {
    list.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p class="price">R$ ${p.price}</p>
        <button onclick="addToCart(${p.id})">Comprar</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const items = document.getElementById("cart-items");
  const total = document.getElementById("cart-total");
  const count = document.getElementById("cart-count");

  items.innerHTML = "";
  let sum = 0;

  cart.forEach(item => {
    items.innerHTML += `<p>${item.name} - R$ ${item.price}</p>`;
    sum += item.price;
  });

  total.innerText = sum.toFixed(2);
  count.innerText = cart.length;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("active");
}

function checkout() {
  document.getElementById("checkout").style.display = "block";
}

function pay(type) {
  alert("Pagamento via " + type + " realizado com sucesso!");
  cart = [];
  updateCart();
  document.getElementById("checkout").style.display = "none";
}

renderProducts();
