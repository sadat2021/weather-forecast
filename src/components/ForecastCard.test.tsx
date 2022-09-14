import React from 'react';
import { render, screen } from '@testing-library/react';
import ForecastCard from './ForecastCard';
import { WeatherInfoContext } from '../contexts/WeatherInfoContext';

const mockData = [
    {
        "dt_txt": "2022-09-14",
        "main": {
            "temp": 13,
            "humidity": 73
        },
        "wind": {
            "speed": 3.08
        },
        "clouds": {
            "all": 50
        }
    },
    {
        "dt_txt": "2022-09-15",
        "main": {
            "temp": 14,
            "humidity": 81
        },
        "wind": {
            "speed": 4.32
        },
        "clouds": {
            "all": 97
        }
    },
    {
        "dt_txt": "2022-09-16",
        "main": {
            "temp": 17,
            "humidity": 55
        },
        "wind": {
            "speed": 3.6
        },
        "clouds": {
            "all": 31
        }
    },
    {
        "dt_txt": "2022-09-17",
        "main": {
            "temp": 16,
            "humidity": 50
        },
        "wind": {
            "speed": 6.13
        },
        "clouds": {
            "all": 37
        }
    },
    {
        "dt_txt": "2022-09-18",
        "main": {
            "temp": 14,
            "humidity": 57
        },
        "wind": {
            "speed": 5.47
        },
        "clouds": {
            "all": 22
        }
    }
]

test('renders today temp', () => {
    const { getByTestId } = render(
        <WeatherInfoContext.Provider value={{
            data: mockData
        }} >
            <ForecastCard />
        </WeatherInfoContext.Provider>
    );
    expect(getByTestId("today-temp").textContent).toBe(mockData[0].main.temp.toString());
});
test('renders today wind speed', () => {
    const { getByTestId } = render(
        <WeatherInfoContext.Provider value={{
            data: mockData
        }} >
            <ForecastCard />
        </WeatherInfoContext.Provider>
    );
    expect(getByTestId("today-wind").textContent).toBe(`${mockData[0].wind.speed} m/s`);
});
test('renders today humidity', () => {
    const { getByTestId } = render(
        <WeatherInfoContext.Provider value={{
            data: mockData
        }} >
            <ForecastCard />
        </WeatherInfoContext.Provider>
    );
    expect(getByTestId("today-humidity").textContent).toBe(`${mockData[0].main.humidity}%`);
});
