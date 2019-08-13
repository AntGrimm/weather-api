const cityName = document.querySelector('.search-box').value
const appID = '&appid=e8314de613adbb0263525f4baa035bd1'

const main = async () => {
  // call the API using fetch
  // eslint-disable-next-line no-undef
  const response = await fetch(
    'http://api.openweathermap.org/data/2.5/weather?q='
  )
  console.log(response)
  if (response.status === 200) {
    const weather = await response.json()
    console.log(weather)
    document.querySelector('.display-city-name').textContent =
      ' ' && weather.name
    document.querySelector('.display-temp').textContent = weather.main.temp
    document.querySelector('.display-rain').textContent =
      weather.weather[0].description
  }
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.search-button').addEventListener('click', main)
