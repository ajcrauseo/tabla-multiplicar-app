const argv = require('yargs')
  .options({
    'b': {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicar'
    },
    'm': {
      alias: 'multiplicador',
      type: 'number',
      demandOption: true,
      describe: 'Hasta donde se va a multiplicar la base'
    },
    'l': {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Muestra la tabla en consola'
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número';
    }
    return true;
  }).argv;

module.exports = argv;
