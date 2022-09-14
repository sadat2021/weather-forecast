import React, { useContext } from 'react'
import { WeatherInfoContext } from '../contexts/WeatherInfoContext'
import "./styles/forecast-card.css"

const cssBaseClassName = "forecast-card"

const getCloudIcon = (cloudsPercent: number) => {
    if (cloudsPercent < 20) {
        return "wi-day-sunny"
    } else if (cloudsPercent < 40) {
        return "wi-day-cloudy"
    } else if (cloudsPercent < 60) {
        return "wi-cloud"
    } else if (cloudsPercent < 80) {
        return "wi-cloudy"
    } else {
        return "wi-cloudy-gusts"
    }
}

export default function ForecastCard() {
    const { selectedCity, data } = useContext(WeatherInfoContext)

    return (
        <div className={`${cssBaseClassName}`} >
            <div className={`${cssBaseClassName}-today`} >
                <div className={`${cssBaseClassName}-header`} >
                    {data ? data[0].dt_txt : "Today"}
                </div>
                <div className={`${cssBaseClassName}-today-content`} >
                    <div className={`${cssBaseClassName}-today-content-city`}>
                        <span>{selectedCity ? selectedCity?.name : "City Name"}</span>
                    </div>
                    <div className={`${cssBaseClassName}-today-content-temp`} >
                        <span><span data-testid="today-temp" >{data ? data[0].main.temp : "--"}</span>&#176;C</span>
                        {data && <i className={`wi ${getCloudIcon(data[0].clouds.all)}`}></i>}
                    </div>
                    <div className={`${cssBaseClassName}-today-content-others`} >
                        <div>
                            <i className="wi wi-humidity"></i>
                            <span data-testid="today-humidity" >{data ? data[0].main.humidity : "--"}%</span>
                        </div>
                        <div>
                            <i className="wi wi-wind"></i>
                            <span data-testid="today-wind" >{data ? data[0].wind.speed : "--"} m/s</span>
                        </div>
                    </div>
                </div>
            </div>
            {data?.map((item, index) => {
                if (index === 0) return null;
                return (
                    <div key={index} className={`${cssBaseClassName}-others ${index % 2 === 0 ? "" : `${cssBaseClassName}-others-odd`} `} >
                        <div className={`${cssBaseClassName}-header`} >
                            {data ? data[index].dt_txt : "---"}
                        </div>
                        <div className={`${cssBaseClassName}-others-content`}>
                            {data && <i className={`wi ${getCloudIcon(data[index].clouds.all)}`}></i>}
                            <span>{data ? data[index].main.temp : "--"}&#176;C</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
