const { request } = require("../app");
const { Professional } = require("../../../node_dia3/src/Professional");

let professionals = [];

// {
//     "name" : "Adrian",
//     "age" : 26,
//     "weight" : 77,
//     "height" : 1.80
// }

function getStart(request, response) {
    let respuesta = { error: true, codigo: 200, mensaje: "Punto de inicio" };
    response.send(respuesta);
}


function getProfessionals(request, response) {
    let posicion = request.query.pos
    let respuesta;
    if (posicion === undefined) {
        respuesta = professionals;
    } else {
        try {
            let profesionalPos = professionals[posicion]
            respuesta = [profesionalPos];
        } catch (error) {
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "el profesional no existe"
            }
        }
    }

    response.send(respuesta);
}

function postProfessional(request, response) {
    let respuesta;
    console.log(request.body);
    let exist = professionals.find((professional) =>
        professional.name === request.body.name)
    if (exist === undefined) {
        let professional = new Professional(
            request.body.name,
            request.body.age,
            request.body.weight,
            request.body.height,)
        professionals.push(professional);
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Profesional Creado",
            resultado: professional

        };
    } else respuesta = {
        error: true,
        codigo: 200,
        mensaje: "Profesional ya existente",
        resultado: null
    };

    response.send(respuesta);

}

function putProfessional(request, response) {
    let respuesta;
    let posicion = request.body.pos
    let newProfessional = new Professional(
        request.body.name,
        request.body.age,
        request.body.weight,
        request.body.height);

    console.log(request.body);
    if (newProfessional[posicion] !== null) {
        professionals[posicion] = newProfessional;
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'Profesional actualizado',
            resultado: newProfessional
        }
    } else {
        respuesta = {
            error: true,
            codigo: 200,
            mensaje: 'El Profesional ya existente',
            resultado: null
        }
    }
    response.send(respuesta);
};



function deleteProfessional(request, response) {
    let posicion = request.body.pos
    let respuesta;
    try {
        let professionalPos = professionals[posicion];
        professionals.splice(posicion, 1)
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: "El profesional se ha eliminado",
            resultado: professionals
        }
    } catch (error) {
        respuesta = {
            error: true,
            codigo: 200,
            mensaje: "El profesional no existe",
            resultado: null
        }
    }

    response.send(respuesta);
}

module.exports = { getStart, getProfessionals, postProfessional, putProfessional, deleteProfessional };