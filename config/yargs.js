const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descrpción de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Estado actual de la tarea'
}

const tipotarea = {
    alias: 't',
    default: 'ALL',
    desc: 'Tipo de tarea que se necesita listar (TRUE finalizadas, FALSE sin finalizar)'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea', { descripcion, completado })
    .command('borrar', 'Elimina una tarea del listado', { descripcion })
    .command('listar', 'muestra el listado de tareas', { tipotarea })
    .help()
    .argv;

module.exports = {
    argv
}