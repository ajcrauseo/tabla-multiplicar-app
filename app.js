// const [, , arg3 = `base=${base}`] = process.argv;
// const [, newBase] = arg3.split('=');

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors')

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l, argv.m)
  .then((nombreArchivo) => console.log(`${nombreArchivo.rainbow} creado`))
  .catch((error) => console.log(error));
