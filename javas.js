function mostrarProducto(cardElement) {
    const titulo = cardElement.querySelector('h2').textContent;
    const precio = cardElement.querySelector('.precio').textContent;
    const imagenElemento = cardElement.querySelector('img');

    const descripcion = imagenElemento.getAttribute('data-descripcion');
    const imagenesArray = imagenElemento.getAttribute('data-imagenes').split(',');

    document.getElementById("modalTitulo").textContent = titulo;
    document.getElementById("modalDescripcion").textContent = descripcion;
    document.getElementById("modalPrecio").textContent = precio;

    const contenedorImagenes = document.getElementById("modalImagenes");
    contenedorImagenes.innerHTML = "";

    // Mostrar la primera imagen grande y thumbnails debajo
    imagenesArray.forEach((img, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = img.trim();

        if(index === 0) {
            imgElement.style.width = "300px"; // imagen principal
        } else {
            imgElement.style.width = "100px"; // thumbnails
        }

        imgElement.onclick = () => {
            // Cambia la imagen principal al hacer clic en thumbnail
            contenedorImagenes.querySelector('img:first-child').src = img.trim();
        }

        contenedorImagenes.appendChild(imgElement);
    });
   const primeraImagen = imagenesArray[0].trim();

   
    const usuario = "bryantjosuev01-dotcom";
    const repo = "ventaspro.github.io";

    const urlImagen = `https://${usuario}.github.io/${repo}/${primeraImagen}`;

    // 🔥 Mensaje WhatsApp con imagen incluida
    const numero = "50588854801";
    const mensaje = 
`Hola, quiero información sobre el producto: ${titulo}
Imagen del producto: ${urlImagen}
Precio: ${precio}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    document.getElementById("btnWhatsappModal").href = url;
    document.getElementById("modalProducto").style.display = "flex"; 
}

function cerrarModal() {
    document.getElementById("modalProducto").style.display = "none";
}

const modal = document.getElementById("modalProducto");
window.onclick = function(event) {
    if (event.target == modal) cerrarModal();
}
