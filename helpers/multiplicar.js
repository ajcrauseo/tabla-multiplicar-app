const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, multiplicador = 1) => {
  if (listar) {
    console.log('============================================'.green);
    console.log(`              Tabla del: ${colors.blue(base)}`.green);
    console.log('============================================'.green);
  }

  let salida = '';
  let consola = '';

  try {
    for (let i = 1; i < multiplicador + 1; i++) {
      consola += `${base} ${'x'.green} ${i} ${'='.blue} ${base * i}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) console.log(consola);

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
