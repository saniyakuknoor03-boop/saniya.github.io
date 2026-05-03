const buttons = document.querySelectorAll('.add-to-order-btn');
const modal = document.getElementById('orderFormModal');
const closeBtn = document.querySelector('.close-btn');
const itemInput = document.getElementById('selectedItemName');

// OPEN FORM
buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const product = btn.closest('.box').querySelector('h3').innerText;
    itemInput.value = product;
    modal.style.display = 'flex';
  });
});

// CLOSE
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

// SUBMIT
document.getElementById('orderForm').addEventListener('submit', function(e){
  e.preventDefault();

  const product = document.getElementById('selectedItemName').value;
  const customer = document.getElementById('customerName').value;
  const qty = document.getElementById('quantity').value;
  const payment = document.getElementById('payment').value;

  alert("Order placed for " + product +
        " by " + customer +
        " (Quantity: " + qty +
        ", Payment: " + payment + ")");

  modal.style.display = 'none';
  this.reset();
});
