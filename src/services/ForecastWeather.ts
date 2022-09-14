import { ForecastWeatherApiUrl } from "../constants/Apis";
import { fetchService } from './service';

const ForecastWeatherService: (lon: number, lat: number) => Promise<{ data: any, status: number }> = async (lon, lat) => {
    return fetchService({
        url: ForecastWeatherApiUrl(lon, lat), method: "GET",
    })
}

export { ForecastWeatherService }