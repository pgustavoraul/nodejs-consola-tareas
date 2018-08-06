const argv = require('./config/yargs').argv;
const por_hacer = require('./por_hacer/por_hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = por_hacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = por_hacer.getListado(argv.tipotarea);
        for (let tarea of listado) {
            console.log('-------- Por Hacer ------------'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('-------------------------------'.green);
        }
        break;
    case 'actualizar':
        let actualizado = por_hacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = por_hacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('El comando no es reconocido');
}