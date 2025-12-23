let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function loadCart() {
  let cartItems = document.getElementById("cartItems");
  let total = 0;
  cartItems.innerHTML = "";

  cart.forEach(item => {
    cartItems.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

function placeOrder(e) {
  e.preventDefault();
  alert("Order placed successfully!");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

if (document.getElementById("cartItems")) {
  loadCart();
}
