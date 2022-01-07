import { Weather_city } from "../Model/Weather_city";
import classes from "./WeatherCityInfo.module.css";

const WeatherCityInfo: React.FC<{ item: Weather_city }> = (props) => {
    var city: Weather_city = props.item;
    if (city) {
        var iconURL = `http://openweathermap.org/img/wn/${city.cloudsIconID}.png`;
        return (
            <div className={classes.wrapper}>
                <h2>Weather in  {city.cityName}, {city.country}</h2>
                <div className={classes.temp}><img src={iconURL} alt="weather_icon" />{city.temp} °C</div>
                <section>
                    <div>
                        <span>Wind {city.wind} m/s</span>
                        <br />
                        <span> Pressure {city.pressure} hPa</span>
                        <br />
                        <span>Humidity {city.humidity}%</span>
                    </div>
                </section>
            </div>
        )
    } else {
        return (
            <h2 className={classes.wrapper}>Please enter city name !</h2>
        )
    }
}


export default WeatherCityInfo;