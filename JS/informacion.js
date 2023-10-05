let abonos = [
    {
        id: 1,
        nombre: "Abono base",
        precio: 7500,
        imagen: "",
        descripcion: "Con el abono basico tenes acceso al gimnasio",
    },
    {
        id: 2,
        nombre: "Abono plus",
        precio: 7500,
        imagen: "",
        descripcion: "Con el abono plus tenes acceso al gimnasio y pileta",
    },
    {
        id: 3,
        nombre: "Abono Premium",
        precio: 7500,
        imagen: "",
        descripcion: "Con el abono premium tenes acceso al gimnasio, pileta y todas las clases ilimitadas",
    }

]

let abono = ``
for(let i=0; i<abonos.length; i ++){
    abono = abono + `
    <div class="card" style="padding:20px; width:30%; border: dashed black 2px">
            <h3>${abonos[i].nombre}</h3>
            <h3>${abonos[i].precio}</h3>
            <p>${abonos[i].descripcion}</p>
            <button><a href="">Asociarme</a></button>

        </div>
    `
}

document.querySelector(".container-abonos").innerHTML =abono



let clases = [
    {
        id: 1,
        nombre: "Pileta",
        horarios: "9h, 11h, 13h, 15h, 18h",
        imagen: "",
    },
    {
        id: 2,
        nombre: "Yoga",
        horarios: "08h, 10h",
        imagen: "",
    },
    {
        id: 3,
        nombre: "Spinning",
        horarios: "10h, 16h, 20h",
        imagen: "",
    },
    {
        id: 4,
        nombre: "Funcional",
        horarios: "9h, 19h",
        imagen: "",
    },
    {
        id: 5,
        nombre: "Salsa",
        horarios: "19h",
        imagen: "",
    },
    {
        id: 6,
        nombre: "Karate",
        horarios: "21h",
        imagen: "",
    }
]

let clase = ``

for(let actividad of clases){
    clase = clase + `
    <div class="card" style="padding:20px; border: solid red 1px" >
            <h3>${actividad.nombre}</h3>
            <h4 style="text-align:center">${actividad.horarios}</h4>
            <button><a href="">Reservar</a></button>

        </div>`
}

document.querySelector(".container-clases").innerHTML= clase