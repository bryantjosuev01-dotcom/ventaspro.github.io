// Efecto simple: animar tarjetas al cargar
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, i) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, i * 150);
    });
});
let indice = 0;
const imagenes = document.querySelectorAll(".vista-img");
const total = imagenes.length;

document.querySelector(".next").addEventListener("click", () => {
    cambiarImagen(1);
});

document.querySelector(".prev").addEventListener("click", () => {
    cambiarImagen(-1);
});

function cambiarImagen(direccion) {
    imagenes[indice].classList.remove("active");
    indice = (indice + direccion + total) % total;
    imagenes[indice].classList.add("active");
}
