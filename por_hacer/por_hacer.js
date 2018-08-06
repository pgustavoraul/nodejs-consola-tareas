const fs = require('fs');

let listado_por_hacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listado_por_hacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    try {
        listado_por_hacer = require('../db/data.json');
    } catch (error) {
        listado_por_hacer = [];
    }
}

// const getListado = () => {
//     try {
//         listado_por_hacer = require('../db/data.json');
//         return listado_por_hacer;
//     } catch (error) {
//         listado_por_hacer = [];
//     }
//     return listado_por_hacer;
// }

const getListado = (mostrar = 'ALL') => {

    cargarDB();

    let resultadoArray = [];

    if (mostrar === 'DONE') {
        resultadoArray = listado_por_hacer.filter(tarea => {
            return tarea.completado === true;
        });

    } else if (mostrar === 'TODO') {
        resultadoArray = listado_por_hacer.filter(tarea => tarea.completado === false);
        console.log('TODO');
    } else {
        console.log('ALL');
        resultadoArray = listado_por_hacer;
    }

    return resultadoArray;
}

const crear = (descripcion) => {
    cargarDB();
    let por_hacer = {
        descripcion,
        completado: false
    };

    listado_por_hacer.push(por_hacer);
    guardarDB();
    return por_hacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listado_por_hacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listado_por_hacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevo_listado = listado_por_hacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });
    if (listado_por_hacer.length === nuevo_listado) {
        return false;
    } else {
        listado_por_hacer = nuevo_listado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}