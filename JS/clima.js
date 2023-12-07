let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon =document.querySelector(".icon");
const kelvin = 273.15;



window.addEventListener("load", () => {

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition((position) => {

        console.log(position);
        lon = position.coords.longitude;
        lat = position.coords.latitude;

        //API
    const api = "70976a1f7178e791b468aa213a29593f";


    const url_base = `http://api.openweathermap.org/data/2.5/forecast?id=3435910&appid=${api}`
    // const url_base = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + `lon-${lon}&appid=${api}`;

        fetch(url_base)
        .then((response) => {
            console.log("RESPUESTA JSON")
            return response.json();
        })

        .then((data)  => {
            console.log("ESTA ES LA DATA")
            console.log(data);

            temperature.textContent =
                Math.floor(data.list[0].main.temp - kelvin) + "°C";
            summary.textContent = data.list[0].weather[0].description;
            loc.textContent = data.city.name + ", " + data.city.country;
        })
    })
}})
