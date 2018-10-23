export const fetchLocationId = async (city) => {
    const response = await fetch(`https://www.metaweather.com/api/location/search/?query=${city}`)

    const locationInfo = await response.json()
    return locationInfo[0].woeid
}

export const fetchWeather = async (locationId) => {
    const response = await fetch(`https://www.metaweather.com/api/location/${locationId}`)

    const weatherInfo = await response.json()
    const { the_temp, weather_state_name } = weatherInfo.consolidated_weather[0]
    const { title } = weatherInfo
    return { temperature: the_temp, weather: weather_state_name, location: title}
}