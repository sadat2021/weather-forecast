const ApiKey = "827f96026cfcacef1d53f641c3da3813"
const FindCityApiUrl = (cityName: string) => (
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${ApiKey}`
)

const ForecastWeatherApiUrl = (lon: number, lat: number) => (
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${ApiKey}`
)
export { FindCityApiUrl, ForecastWeatherApiUrl }