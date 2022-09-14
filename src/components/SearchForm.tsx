import React, { useContext, useState } from 'react'
import { CityType, WeatherInfoContext } from '../contexts/WeatherInfoContext'
import { FindCityService, ForecastWeatherService } from '../services'

import './styles/search-form.css'

const cssBaseClassName = "search-form"



export default function SearchForm() {
  const { setSelectedCity, convertDataToProperData } = useContext(WeatherInfoContext);
  const [cityName, setCityName] = useState<string>("")
  const [cities, setCities] = useState<CityType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const findCity = () => {
    setLoading(true)
    FindCityService(cityName).then(({ status, data }) => {
      setCities(data)
      setLoading(false)
    })
  }
  const getForestWeather = (city: CityType) => {
    setLoading(true)
    ForecastWeatherService(city.lon, city.lat).then(({ status, data }) => {
      setSelectedCity && setSelectedCity(city)
      convertDataToProperData && convertDataToProperData(data.list)
      setLoading(false);
      setCities([])
    })
  }
  return (
    <>
      <div className={`${cssBaseClassName}`} >
        <input
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          className={`${cssBaseClassName}-input`} placeholder="Enter City Name" />
        <div className={`${cssBaseClassName}-btn`} role="button" onClick={findCity} >
          Find
        </div>
      </div>
      {
        (cities.length > 0 || loading) && (
          <div className={`${cssBaseClassName}-modal`} onClick={() => {
            setCities([])
            setLoading(false)
          }} >
            <div className={`${cssBaseClassName}-modal-body`} >
              {!loading ? (
                <table className={`${cssBaseClassName}-cities-table`} >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>city name</th>
                      <th>country name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cities.map((city, index) => (
                      <tr key={index} role="button" onClick={(e) => {
                        e.stopPropagation()
                        getForestWeather(city)
                      }} >
                        <td>{index + 1}</td>
                        <td>{city.name}</td>
                        <td>{city.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <span>loading</span>
              )}
            </div>
          </div>
        )
      }
    </>
  )
}
