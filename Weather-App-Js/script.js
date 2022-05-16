const url = 'https://api.openweathermap.org/data/2.5/'
const key = '7db163ca4ce90a9c3956237a2cdddeab'

function startup() {
    getResult('Aydın')
}
window.onload = startup;

const setQuery = (e) => {
    if(e.keyCode == '13')//enter
    {
        getResult(searchBox.value)
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result => {
let city = document.querySelector('.city')
city.innerText = `${result.name}, ${result.sys.country}`

let temp = document.querySelector('.temp')
temp.innerText = `${Math.round(result.main.temp)}°C`

let minmax = document.querySelector('.minmax')
minmax.innerText = `${result.main.temp_min}°C / ${result.main.temp_max}°C`

let desc = document.querySelector('.desc')
desc.innerText = `${result.weather[0].description}`

let wind = document.querySelector('.wind')
wind.innerText = `Rüzgar Hızı: ${result.wind.speed} km/saat`

})

const searchBox = document.getElementById('SearchBox')
searchBox.addEventListener('keypress',setQuery)