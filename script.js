let inpHeigth = document.getElementById("inpHeigth");
let inpWeight = document.getElementById("inpWeight");
let inpID = document.getElementById("inpID");
let inpAge = document.getElementById("inpAge");
let inpName = document.getElementById("inpName");

const mostrarProfessionals = async () => {
    let id = document.getElementById("inpID").value
    let url;
    let param;
    if (id === "" || id === null) {
    url = `http://localhost:3500/professionals`
        param = {
            headers: {
                "content-type": "application/json; charset=UTF-8"
            },
            method: "GET"
        }

    } else {
         url = `http://localhost:3500/professionals?pos=${id}`

        param = {

            headers: {
                "content-type": "application/json; charset=UTF-8"
            },
            method: "GET"
        }
    }
    try {
        let data = await fetch(url, param)
        let result = await data.json()
        console.log(result)
        document.getElementById("container").innerHTML = "";
            for (let profesional of result) { crearTarjeta(profesional) }
    } catch (err) {
        console.log(err);
    }
}

const crearProfessionals = async () => {
    let url = `http://localhost:3500/professionals`
    let inpHeigth = document.getElementById("inpHeigth").value;
    let inpWeight = document.getElementById("inpWeight").value;
    let inpID = document.getElementById("inpID").value;
    let inpAge = document.getElementById("inpAge").value;
    let inpName = document.getElementById("inpName").value;
    let professional = {heigth: inpHeigth,weight: inpWeight,pos: inpID,age: inpAge,name: inpName }
    let param = {
        body: JSON.stringify(professional),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        method: "POST"
    }
    try {
        let data = await fetch(url, param)
        let result = await data.json()
        document.getElementById("container").innerHTML = "";
        crearTarjeta(result.resultado)
    } catch (err) {
        console.log(err);
    }
}

const editarProfessionals = async () => {
    let inpHeigth = document.getElementById("inpHeigth").value;
    let inpWeight = document.getElementById("inpWeight").value;
    let inpID = document.getElementById("inpID").value;
    let inpAge = document.getElementById("inpAge").value;
    let inpName = document.getElementById("inpName").value;
    let professional = {heigth: inpHeigth,weight: inpWeight,pos: inpID,age: inpAge,name: inpName }
console.log(professional);
    let param = {
        headers: {"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(professional),
        method: "PUT"
    }
    let url = `http://localhost:3500/professionals`
    try {
        let data = await fetch(url, param)
        let result = await data.json()
        document.getElementById("container").innerHTML = "";
        crearTarjeta(result.resultado);
    } catch (err) {
        console.log(err);
    }
}


const eliminarProfessionals = async () => {
    let id = document.getElementById("inpID").value
    let url = `http://localhost:3500/professionals`
    let param = {

        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({"pos":id}),
        method: "DELETE"
    }
    try {
        let data = await fetch(url, param)
        let result = await data.json()
        document.getElementById("container").innerHTML = "";
        for (let profesional of result) { crearTarjeta(profesional) }
    } catch (err) {
        console.log(err);
    }
}
const crearTarjeta = (profesional) => {
    console.log(profesional)
    document.getElementById("container").innerHTML +=
        `<div class="card">
    <h2>${profesional.name}</h2>
    <h5>Edad</h5>
    <p>${profesional.age}</p>
    <h5>Peso</h5>
    <p>${profesional.weight}</p>
    <h5>Altura</h5>
    <p>${profesional.height}</p>
    </div> 
</div>`
}