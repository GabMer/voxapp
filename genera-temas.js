const fs = require('fs');
const path = require('path');

const temasDir = path.join(__dirname, 'src', 'assets', 'tema');
const outputFilePath = path.join(__dirname, 'src', 'assets', 'temas.json');

const nombresBonitos = {
  entrada: 'Entrada',
  evangelio: 'Evangelio',
  perdon: 'Perdón',
  santo: 'Santo',
  comunion: 'Comunión',
  gloria: 'Gloria',
  ofertorio: 'Ofertorio',
  cordero: 'Cordero',
  aleluya: 'Aleluya',
  salida: 'Salida'
};

const temas = [];

fs.readdirSync(temasDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .forEach(dirent => {
    const folder = dirent.name;
    const folderPath = path.join(temasDir, folder);
    
    // Leer imágenes PNG dentro de la carpeta
    const imagenes = fs.readdirSync(folderPath)
      .filter(file => file.toLowerCase().endsWith('.png'))
      .map(file => `assets/tema/${folder}/${file}`);

    temas.push({
      nombre: nombresBonitos[folder] || capitalizar(folder),
      subtitulo: "Pueblo de Dios",
      acordes: "",
      ruta: `/tema/${folder}`,
      folder: folder,
      imagenes: imagenes
    });
  });

fs.writeFileSync(outputFilePath, JSON.stringify(temas, null, 2));
console.log(`✔ temas.json generado con ${temas.length} temas y sus imágenes .png`);

function capitalizar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
