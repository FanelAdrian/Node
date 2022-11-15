const { request } = require("../../../node_2/src/app");
const { Professional } = require("../Professional");

let professionals = [];
//{nombre:"Jose", apellidos:"Garcia Garcia}

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
            let profesionalPos = professionals[parseInt(posicion)]
            respuesta = profesionalPos;
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
    // creo una variable en la que almaceno el valor del parametro pos de la request
    let posicion = request.query.pos
    let respuesta;
    try {
        let professionalPos = professionals[parseInt(posicion)];
        professionalPos.name = request.body.name;
        professionalPos.age = request.body.age;
        professionalPos.weight = request.body.weight;
        professionalPos.height = request.body.height
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: "Professional actualizado",
            resultado: professionalPos
        }
    } catch (error) {
        respuesta = {
            error: true,
            codigo: 200,
            mensaje: "El professional no exixte",
            resultado: null
        }
    }

    response.send(respuesta);
}

function deleteProfessional(request, response) {
    let posicion = request.query.pos
    let respuesta;
    try {
        let professionalPos = professionals[parseInt(posicion)];
        professionals.splice(parseInt(posicion), 1)
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: "El professional se ha eliminado",
            resultado: professionals
        }
    } catch (error) {
        respuesta = {
            error: true,
            codigo: 200,
            mensaje: "El professional no existe",
            resultado: null
        }
    }

    response.send(respuesta);
}

module.exports = { getStart, getProfessionals, postProfessional, putProfessional, deleteProfessional };