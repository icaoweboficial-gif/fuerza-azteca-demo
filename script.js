// ---------------- Menú hamburguesa ----------------
const menuToggle = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-5");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
});