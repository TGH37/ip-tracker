const getOptions = {
    method: "GET",
    mode: 'cors'
}
let userLocation = {};
// const foo = <h1>foobar</h1>
let myMap = L.map('mapid').setView([51.505, -0.09], 13);
const myIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    // iconSize: [38, 95],
    // iconAnchor: [22, 94],
    // popupAnchor: [-3, -76],
    // shadowUrl: 'my-icon-shadow.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
});


const updateMap = (lat, lng) => {
    myMap.setView([lat, lng], 13);
    // L.marker([lat, lng]).addTo(myMap);
    L.marker([lat, lng], {icon: myIcon}).addTo(myMap);
}

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGdoMzciLCJhIjoiY2tsdjV4aGhnMjVzYzJubnc5OHRiMXg0OCJ9.HfozJCsQqeU094EXHkJ-0g'
}).addTo(myMap);


const ipAddress =  document.querySelector('.ipAddress');
const loc =  document.querySelector('.location');
const timezone =  document.querySelector('.timezone');
const isp =  document.querySelector('.isp');



const form = document.querySelector(".search-form");
let targetIP = 0;
const userInput = document.querySelector(".search-form__input")


const key =  "at_jG31KQ2AbFKTEtqOHD6A4YzyfFZHD";
let ip = "";
let link = "";
const updateLink = () => {
    link = `https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ip}`
}

const getData = () => {return fetch(link, getOptions)}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    ip = e.target[0].value;
    updateLink();

    getData()
        .then(res => {return res.json()})
        .then(data => {
            console.log(data)
            ipAddress.innerHTML = data.ip;
            loc.innerHTML = `${data.location.city} - ${data.location.country}`;
            timezone.innerHTML = `UTC ${data.location.timezone}`;
            isp.innerHTML = data.isp;
            updateMap(data.location.lat, data.location.lng)
        })
        .catch(err => {console.log(err);});
})



// const getData = async (targetIP) => {
//     try {
//         console.log('hi');
//         const res = await fetch(link);
//         const data = await res.json();
//         console.log('success')
//     } catch (err) {
//         console.error(err)
//         console.log(err);
//     }
// };




