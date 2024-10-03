 // Paso 1: Definir la función constructora Image
 function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// Paso 2: Crear el objeto "images" con sus métodos
let images = {
    list: [],

    contains: function(title) {
        return this.list.some(image => image.title === title);
    },

    add: function(title, artist, date) {
        if (!this.contains(title)) {
            let newImage = new Image(title, artist, date);
            this.list.push(newImage);
        } else {
            console.log(`La imagen "${title}" ya está en la lista.`);
        }
    },

    show: function() {
        let resultado = document.getElementById('resultado');
        if (this.list.length === 0) {
            resultado.textContent = 'No hay imágenes en la lista.';
        } else {
            resultado.textContent = this.list.map(image => `${image.title} (${image.artist}, ${image.date})`).join('\n');
        }
    },

    clear: function() {
        this.list = [];
        this.show(); // Actualiza la vista
    }
};

// Función para agregar imágenes
function addImages() {
    images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
    images.add('The Last Supper', 'Leonardo da Vinci', 1495);
    images.add('The Starry Night', 'Vincent van Gogh', 1889);
    images.add('Mona Lisa', 'Leonardo da Vinci', 1503); // Imagen duplicada
    images.show();
}

// Función para limpiar las imágenes
function clearImages() {
    images.clear();
}