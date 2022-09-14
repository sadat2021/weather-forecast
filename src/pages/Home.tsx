import { useContext } from 'react'
import { ForecastCard, SearchForm } from '../components'
import { WeatherInfoContext } from '../contexts/WeatherInfoContext'
import { HomeLayout } from '../layouts'
import './styles/home.css'

const cssBaseClassName = "home-page"

export default function Home() {
    const { data } = useContext(WeatherInfoContext);
    return (
        <HomeLayout>
            <div className={`${cssBaseClassName}`} >
                <SearchForm />
                {data && data.length > 0 && <ForecastCard />}
            </div>
        </HomeLayout>
    )
}
