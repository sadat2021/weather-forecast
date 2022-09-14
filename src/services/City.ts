import { FindCityApiUrl } from "../constants/Apis";
import { fetchService } from './service';

const FindCityService: (cityName: string) => Promise<{ data: any, status: number }> = async (cityName) => {
    return fetchService({
        url: FindCityApiUrl(cityName), method: "GET",
    })
}

export { FindCityService }