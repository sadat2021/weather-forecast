import { createContext, ReactNode, useState } from "react";

type CityType = {
    name: string; country: string; lon: number; lat: number
}

type ListTempDataType = {
    dt_txt: string;
    clouds: {
        all: number;
    };
    main: {
        temp: number;
        humidity: number;
    };
    wind: {
        speed: number;
    }
}[]

const WeatherInfoContext = createContext<{
    selectedCity?: CityType;
    setSelectedCity?: (city: CityType) => void;
    convertDataToProperData?: (list: ListTempDataType) => void;
    data?: ListTempDataType;
}>({})

interface WeatherInfoContextProviderProps {
    children: ReactNode;
}

export default function WeatherInfoContextProvider({ children }: WeatherInfoContextProviderProps) {
    const [selectedCity, setSelectedCity] = useState<CityType | undefined>(undefined)
    const [data, setData] = useState<ListTempDataType>([])
    const convertDataToProperData = (list: ListTempDataType) => {
        const convertedData: ListTempDataType = [];
        for (let index = 0; index < 5; index++) {
            const date = list[index * 8].dt_txt.substring(0, 10);
            let sum = {
                main: {
                    temp: 0,
                    humidity: 0
                },
                wind: {
                    speed: 0
                },
                clouds: {
                    all: 0
                }
            }
            list.slice(index * 8, (index + 1) * 8).forEach(item => {
                sum.main.temp += item.main.temp;
                sum.main.humidity += item.main.humidity;
                sum.wind.speed += item.wind.speed;
                sum.clouds.all += item.clouds.all;
            })
            const mean = {
                dt_txt: date,
                main: {
                    temp: Math.floor(sum.main.temp / 8),
                    humidity: Math.floor(sum.main.humidity / 8)
                },
                wind: {
                    speed: Math.floor((sum.wind.speed / 8) * 100) / 100
                },
                clouds: {
                    all: Math.floor(sum.clouds.all / 8)
                }
            }
            convertedData.push(mean);
        }
        console.log(data);

        setData(convertedData)
    }
    return (
        <WeatherInfoContext.Provider
            value={{
                selectedCity,
                setSelectedCity,
                convertDataToProperData,
                data
            }}
        >
            {children}
        </WeatherInfoContext.Provider>
    )
}

export { WeatherInfoContext };
export type { CityType };

