 // Paso 1: Definir la función constructora Image
 function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// Paso 2: Definir la función de fábrica getImage
function getImage(title, artist, date) {
    return { title, artist, date };
}

// Datos originales
let cuadros = [
    { title: "Mona Lisa", artist: "Leonardo da Vinci", date: 1503 },
    { title: "La última cena", artist: "Leonardo da Vinci", date: 1495 },
    { title: "La noche estrellada", artist: "Vincent van Gogh", date: 1889 }
];

// Crear un nuevo arreglo images1 usando el constructor Image
let images1 = cuadros.map(cuadro => new Image(cuadro.title, cuadro.artist, cuadro.date));

// Crear un nuevo arreglo images2 usando la función de fábrica getImage
let images2 = images1.map(image => getImage(image.title, image.artist, image.date));

// Función para mostrar imágenes en la consola
function mostrarImagenes() {
    let resultado = document.getElementById('resultado');
    resultado.textContent = images2.map(image => `Título: ${image.title}, Artista: ${image.artist}, Año: ${image.date}`).join('\n');
}