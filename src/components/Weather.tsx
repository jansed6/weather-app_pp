import { useState } from "react";
import { Weather_city } from "../Model/Weather_city";
import Card from "../UI/Card";
import Header from "../UI/Header";
import ErrorInfo from "./ErrorInfo";
import WeatherCityInfo from "./WeatherCityInfo";
import WeatherFormInput from "./WeatherFormInput";

const Weather = () => {
    const [weatherCity, setWeatherCity] = useState<Weather_city>();
    const [isError, setIsError] = useState<boolean>(false);
    const [errorTitle, setErrorTitle] = useState<string>("");

    const createWeatherCityHandler = (weatherCity: Weather_city) => {
        setWeatherCity(() => {
            return weatherCity;
        })
    }

    const ErrorHandler = (title: string, isError: boolean) => {
        setIsError(isError);        
        setErrorTitle(title);
    }

    return (
        <main>
            <Header />
            <Card>
                <WeatherFormInput onCreateWeatherCity={createWeatherCityHandler} onError={ErrorHandler}/>
                {isError && <ErrorInfo title={errorTitle} />}
                {!isError && <WeatherCityInfo item={weatherCity!}/>}
            </Card>

        </main>
    )
}

export default Weather;