document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;

  alert("Thanks " + name + "! I will contact you soon.");

  this.reset();
});