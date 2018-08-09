const fs = require('fs');
const colors = require('colors');


//opcional module.exports.crearArchivo
const crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido ${base} No es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`.red;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (!err) {
                resolve(`tabla-${base}.txt`)
            } else {
                reject(err)
            }
        });
    });
}

const listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        console.log('==========================================='.red);
        console.log(`tabla de ${base} con el limite de ${limite}`.green);
        console.log('==========================================='.red);



        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        if (data) {
            resolve(data)
        } else {
            reject('No se por que carajos no puedo mostrar la data')
        }

    });

}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}