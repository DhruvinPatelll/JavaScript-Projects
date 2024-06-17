const API_KEY = `9ef3501945b525f90a1878be5c957a55`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    weather.innerHTML = `
            <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="">
            </div>
            <div>
                <h2>${data.main.temp} ℃</h2>
                <h4>${data.weather[0].main}</h4>
            </div>
            `
}

form.addEventListener("submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();
    }
)
