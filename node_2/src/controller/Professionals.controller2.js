const { request } = require("../app");
const { Professional2 } = require("../../../node_2/src/Professional");


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
    let id = request.query.id
    let respuesta;
    if (id === undefined) {
        respuesta = professionals;
    } else {
        try {
            let profesionalPos = professionals.find((professional) =>
                professional.id === request.query.id)
            respuesta = {
                error: true,
                codigo: 200,
                mensaje: "mostrar profesional",
                resultado: profesionalPos
            }
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
        professional.id === request.body.id)
    if (exist === undefined) {
        let professional = new Professional2(
            request.body.name,
            request.body.age,
            request.body.weight,
            request.body.height,
            request.body.id)
        professionals.push(professional);
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Profesional crado",
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
    let id = request.body.id;
    let respuesta;
    try {
        let professionalPos = professionals.indexOf((professional) =>
            professional.id === id);
        professionals[professionalPos] = new Professional2(
            request.body.name,
            request.body.age,
            request.body.weight,
            request.body.height,
            request.body.id,
        )
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: "El profesional actualizado",
            resultado: professionals[professionalPos]
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



function deleteProfessional(request, response) {
    let id = request.body.id
    let respuesta;
    try {
        let professionalPos = professionals.indexOf((professional) =>
            professional.id === request.body.id);
        professionals.splice(professionalPos, 1)
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