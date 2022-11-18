const { Professional } = require("../Professional");

let professional = null;
//{nombre:"Jose", apellidos:"Garcia Garcia}

function getStart(request, response) {
    let respuesta = { error: true, codigo: 200, mensaje: "Punto de inicio" };
    response.send(respuesta);
}

function getProfessional(Request, response) {
    let respuesta;
    if (professional != null)
        respuesta = professional;
    else
        respuesta = {
            error: true,
            codigo: 200,
            mensaje: "el profesional no existe"
        }

    response.send(respuesta);
}

function postProfessional(request, response) {
    let respuesta;
    console.log(request.body);
    if (professional === null) {
        professional = new Professional(
            request.body.name,
            request.body.age,
            request.body.weigth,
            request.body.height,)
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Profesional Creado",
            resultado: professional
        };
    } else respuesta = {
        error: true,
        codigo: 200,
        mensaje: "Profesional ya existe",
        resultado: null
    };

    response.send(respuesta);

}



function putProfessional(request, response) {
    let respuesta
    if (professional != null) {
        professional.name = request.body.name;
        professional.age = request.body.age;
        professional.weight = request.body.weight;
        professional.height = request.body.height
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Profesional actualizado",
            resultado: professional
        };
    } else respuesta = {
        error: true,
        codigo: 200,
        mensaje: "El profesional no exixte",
        resultado: professional
    };

    response.send(respuesta);
}

function deleteProfessional(request, response) {
    let respuesta
    if (professional != null) {
        professional = null;
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: "El profesional no existe",
            resultado: professional
        }
    } else respuesta = {
        error: true,
        codigo: 200,
        mensaje: "El profesional no existe",
        resultado: professional
    }

    response.send(respuesta);
}

module.exports = { getStart, getProfessional, postProfessional, putProfessional, deleteProfessional };