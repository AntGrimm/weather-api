const url = 'https://api.openweathermap.org/data/2.5/weather?'
const unitFormat = 'units=imperial'
const appID = 'appid=e8314de613adbb0263525f4baa035bd1'
let cityZip = 'q'

const getWeather = async () => {
  const textInput = document.querySelector('.search-box').value
  if (parseInt(textInput)) {
    cityZip = 'zip'
  } else {
    cityZip = 'q'
  }
  // call the API using fetch
  // eslint-disable-next-line no-undef
  const response = await fetch(
    `${url}${cityZip}=${textInput}&${unitFormat}&${appID}`
  )
  console.log(response)
  if (response.status === 200) {
    const weather = await response.json()
    console.log(weather)
    document.querySelector('.display-city-name').textContent = weather.name
    document.querySelector('.display-temp').textContent = weather.main.temp
    document.querySelector('.display-rain').textContent =
      weather.weather[0].description
  }
}

document.querySelector('.search-button').addEventListener('click', getWeather)
