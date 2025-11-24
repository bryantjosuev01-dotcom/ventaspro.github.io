/* Función para mostrar el modal de un producto */
function mostrarProducto(cardElement) {
    // 1. Obtener los datos del HTML
    const titulo = cardElement.querySelector('h2').textContent;
    const precio = cardElement.querySelector('.precio').textContent;
    const imagenElemento = cardElement.querySelector('img');

    // 2. Extraer los datos guardados en los atributos 'data-'
    const descripcion = imagenElemento.getAttribute('data-descripcion');
    const imagenesStr = imagenElemento.getAttribute('data-imagenes');
    const imagenesArray = imagenesStr.split(','); // Convierte la cadena de imágenes en un array

    // 3. Asignar el contenido al modal
    document.getElementById("modalTitulo").textContent = titulo;
    document.getElementById("modalDescripcion").textContent = descripcion;
    document.getElementById("modalPrecio").textContent = precio;

    const contenedorImagenes = document.getElementById("modalImagenes");
    contenedorImagenes.innerHTML = ""; // Limpia el contenido anterior

    // 4. Crear los elementos de imagen para el modal
    imagenesArray.forEach(img => {
        // Crea un nuevo elemento <img> y lo agrega al contenedor
        const imgElement = document.createElement('img');
        imgElement.src = img.trim();
        contenedorImagenes.appendChild(imgElement);
    });

    // 5. Mostrar el modal
    document.getElementById("modalProducto").style.display = "flex"; 
}

/* Función para cerrar el modal */
function cerrarModal() {
    document.getElementById("modalProducto").style.display = "none";
}

/* Cerrar el modal al hacer clic fuera de él */
const modal = document.getElementById("modalProducto");

window.onclick = function(event) {
    if (event.target == modal) {
        cerrarModal();
    }
}
