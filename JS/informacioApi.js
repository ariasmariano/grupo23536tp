fetch('https://gabitarquini.pythonanywhere.com/productos')
                .then(respuesta => {
                    return respuesta.json();
                })
                .then(data => {
                    data.forEach(actividad => {
                        const carta = `
                        <div class="card" >
                                <div class="card-image actividad${actividad.id}" style="background-image:url('${actividad.imagen}') "></div>
                                <h3>${actividad.nombre}</h3>
                                <p style="text-align:center">${actividad.horarios}</p>
                                <p>${actividad.descripcion}</p>
                                <a class="linkear" href="./registro.html">Reservar</a>
                        </div>`;
                        // document.querySelector(".container-clases").innerHTML = carta;
                        document.querySelector(".container-clases").insertAdjacentHTML('beforeend',carta)

                    });
                })
                .catch(error => console.log(error));