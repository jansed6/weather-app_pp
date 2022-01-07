import React, { useEffect} from "react";
import { useRef } from "react";
import { Weather_city } from "../Model/Weather_city";
import classes from "./WeatherFormInput.module.css";
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useLocation} from 'react-router-dom';

const WeatherFromInput: React.FC<{ onCreateWeatherCity: (weatherCity: Weather_city) => void, onError: (title: string, isError: boolean) => void }> = (props) => {
    const search = useLocation().search;
    let navigate = useNavigate();
    const cityNameU = new URLSearchParams(search).get('cityName');
    const weatherFormInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        weatherFormInputRef.current!.value = cityNameU!;
        if(cityNameU !== "" && cityNameU !== null)
            document.getElementById("form_button")!.click();
    }, []);

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        const cityName = weatherFormInputRef.current!.value;
        var weatherCity: Weather_city;
        var response: Response;
        
        navigate(`/search?cityName=${cityName}`);
        if (cityName.trim().length === 0) {
            props.onError("Please insert city name !", true);
            return;
        }        
        
        response = await Weather_city.FetchCityWeatherData(cityName);
        if (response.ok) {
            const data = await response.json();
            weatherCity = new Weather_city(data.name, data.sys.country, data.main.temp, data.main.pressure, data.wind.speed, data.main.humidity, data.weather[0].icon);
        } else {
            props.onError("City not found !", true);
            return;
        }

        if (weatherCity!) {
            props.onCreateWeatherCity(weatherCity);
            props.onError("", false);
        }
    }

    return (
        <form className={`${classes.input}`} onSubmit={submitHandler}>
            <label htmlFor="cityNameInput"></label>
            <input type="text" id="cityNameInput" ref={weatherFormInputRef}/>
            <button id="form_button" className={classes.button}><FaSearch /></button>
        </form>
    )
}

export default WeatherFromInput;