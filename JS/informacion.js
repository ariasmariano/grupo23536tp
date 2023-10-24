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
    descripcion:
      "Con el abono premium tenes acceso al gimnasio, pileta y todas las clases ilimitadas",
  },
];

let abono = ``;
for (let i = 0; i < abonos.length; i++) {
  abono =
    abono +
    `
    <div class="card">
    <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/2705.png" alt="">
            <h3>${abonos[i].nombre}</h3>
            <h4>${abonos[i].precio}</h4>
            <p>${abonos[i].descripcion}</p>
            <a class="linkear" href="./registro.html">Asociarme</a>

    </div>
    `;
}

document.querySelector(".container-abonos").innerHTML = abono;

let clases = [
  {
    id: 1,
    nombre: "Pileta",
    horarios: "9h, 11h, 13h, 15h, 18h",
    imagen: "https://img2.storyblok.com/f/76838/1920x1080/0be9b99354/uses-swimming-hero-dsk.jpg",
  },
  {
    id: 2,
    nombre: "Yoga",
    horarios: "08h, 10h",
    imagen: "https://besportbefree.fr/wp-content/uploads/2022/10/pourquoi-associer-yoga-pilates-1024x684.jpg",
  },
  {
    id: 3,
    nombre: "Spinning",
    horarios: "10h, 16h, 20h",
    imagen: "https://www.sport.es/labolsadelcorredor/wp-content/uploads/2018/10/spinning-portada.jpg",
  },
  {
    id: 4,
    nombre: "Funcional",
    horarios: "9h, 19h",
    imagen: "https://www.ericfavre.com/lifestyle/wp-content/uploads/2020/06/crossfit-1024x683.jpg",
  },
  {
    id: 5,
    nombre: "Salsa",
    horarios: "19h",
    imagen: "https://media.ucpa.com/t_UCPA_Horizontal/UCPA-SPORT-ACCESS/00091573-adultes-fitness.jpg",
  },
  {
    id: 6,
    nombre: "Karate",
    horarios: "21h",
    imagen: "https://i.ytimg.com/vi/TLXKdRwTNNs/maxresdefault.jpg",
  },
];

let clase = ``;

for (let actividad of clases) {
  clase =
    clase +
    `
    <div class="card" >
            <div class="card-image actividad${actividad.id}" style="background-image:url('${actividad.imagen}') "></div>
            <h3>${actividad.nombre}</h3>
            <p style="text-align:center">${actividad.horarios}</p>
            <button><a href="./registro.html">Reservar</a></button>
            

    </div>`;
}

document.querySelector(".container-clases").innerHTML = clase;
