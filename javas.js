const productos = {
    1: {
        titulo: "Reloj inteligente V17 Classic",
        descripcion: "Resistente al agua IP67, incluye auriculares, correas y sensor de salud.",
        precio: "C$950",
        imagenes: ["relojaudifonos.jpeg", "relojaudifonos2.jpg"]
    },
    2: {
        titulo: "S10 PRO MAX",
        descripcion: "Set completo con correas y accesorios para smartwatch.",
        precio: "C$750",
        imagenes: ["reloj.jpeg"]
    },
    3: {
        titulo: "SMART WATCH T500",
        descripcion: "Pantalla táctil, medición de salud y compatible con Android/IOS.",
        precio: "C$550",
        imagenes: ["smartwatch2.jpeg"]
    },

    4: {
        titulo: "Termo Stanley",
        descripcion: "Termo de alta calidad, mantiene temperatura por horas.",
        precio: "C$700",
        imagenes: ["termo.jpeg", "termo2.jpeg"]
    },

    5: {
        titulo: "Auricular Samsung",
        descripcion: "Auriculares Samsung con excelente sonido.",
        precio: "C$500",
        imagenes: ["auricular.jpeg"]
    },

    6: {
        titulo: "Auriculares Personalizados",
        descripcion: "Con diferentes personajes.",
        precio: "C$500",
        imagenes: ["audiM1.jpeg", "audiM2.jpeg", "audiM3.jpeg"]
    },

    7: {
        titulo: "Cámara de Vigilancia",
        descripcion: "Cámara 360° tipo bombillo, WiFi y modo tarjeta SD.",
        precio: "C$800",
        imagenes: ["camarajt.jpeg"]
    },

    8: {
        titulo: "Auricular Buds Air 2",
        descripcion: "Calidad excelente de sonido.",
        precio: "C$550",
        imagenes: ["Budsair.jpeg"]
    },

    9: {
        titulo: "Auricular M90 Pro",
        descripcion: "Bluetooth, tapa deslizable.",
        precio: "C$450",
        imagenes: ["M90AU.jpeg"]
    },

    10: {
        titulo: "Mochila SwissGear",
        descripcion: "Durable, cómoda y con múltiples compartimentos.",
        precio: "C$750",
        imagenes: ["mochila.jpeg"]
    }
};


function mostrarProducto(id) {
    const p = productos[id];

    document.getElementById("modalTitulo").textContent = p.titulo;
    document.getElementById("modalDescripcion").textContent = p.descripcion;
    document.getElementById("modalPrecio").textContent = p.precio;

    const contenedorImagenes = document.getElementById("modalImagenes");
    contenedorImagenes.innerHTML = "";

    p.imagenes.forEach(img => {
        contenedorImagenes.innerHTML += `<img src="${img}">`;
    });

    document.getElementById("modalProducto").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modalProducto").style.display = "none";
}
