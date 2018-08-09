const argv = require('./config/yargs').argv;
const color = require('colors');
const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let commando = argv._[0];

switch (commando) {

    case 'listar':
        listarTabla(argv.base, argv.limite).then(
            (data) => {
                console.log(data.toString().red)
            }
        ).catch((err) => {
            console.log(`hubo un error ${err}`)
        });
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`))
            .catch((err) => {
                console.log(`hubo un error ${err}`)
            });
        break;

    default:
        console.log(`comando no reconocido ${commando}`)
}