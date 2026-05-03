
// CART SYSTEM (LOCAL STORAGE)
// ============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
document.querySelectorAll(".cart-btn").forEach(btn => {
  btn.addEventListener("click", function () {

    let box = this.closest(".box");
    let product = box.querySelector("h3").innerText;

    let priceText = box.querySelector(".price").innerText;
    let price = parseInt(priceText.replace(/[^0-9]/g, "")); // extract number

    cart.push({ name: product, price: price });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();

    alert(product + " added to cart!");
  });
});


// UPDATE CART UI (only works if elements exist)
function updateCart() {
  let count = document.getElementById("cart-count");
  let list = document.getElementById("cart-items");
  let totalBox = document.getElementById("cart-total");

  let total = 0;

  if (count) count.innerText = cart.length;
  if (!list || !totalBox) return;

  list.innerHTML = "";

  cart.forEach(item => {
    total += item.price;

    let li = document.createElement("li");
    li.textContent = item.name + " - ₹" + item.price;
    list.appendChild(li);
  });

  totalBox.innerText = "Total: ₹" + total;
}


// ============================
// LIKE BUTTON
// ============================
document.querySelectorAll(".fa-heart").forEach(heart => {
  heart.addEventListener("click", function () {
    this.classList.toggle("liked");

    if (this.classList.contains("liked")) {
      this.style.color = "red";
    } else {
      this.style.color = "black";
    }
  });
});


// ============================
// SHARE BUTTON
// ============================
document.querySelectorAll(".fa-share").forEach(share => {
  share.addEventListener("click", function () {

    let product = this.closest(".box").querySelector("h3").innerText;

    let link = window.location.href + " | " + product;

    navigator.clipboard.writeText(link)
      .then(() => {
        alert("Product copied!");
      })
      .catch(() => {
        alert("Failed to copy!");
      });
  });
});


// ============================
// CONTACT FORM
// ============================
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;

      alert("Thank you " + name + "! We will contact you soon.");

      form.reset();
    });
  }

  // initialize cart on load
  updateCart();
});