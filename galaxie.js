const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function openMenu() {
  sidebar.classList.add("active");
  overlay.classList.add("active");
}


function closeMenu() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
}
const epargneForm = document.getElementById('epargneForm');

 epargneForm.addEventListener('submit', function(e) {
    e.preventDefault();

    alert('Votre demande d’ouverture de compte épargne a été envoyée avec succès.');

    epargneForm.reset();
 });

 const pretForm = document.getElementById('pretForm');

pretForm.addEventListener('submit', function(e) {
  e.preventDefault();

  alert('Votre demande de prêt personnel a été envoyée avec succès.');

  pretForm.reset();
});
document.addEventListener("DOMContentLoaded", () => {
  const btn =
  document.getElementById("theme");
  console.log(btn); // doit afficher l'element
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});