export class Weather_city {
    public cityName: string;
    public country: string;
    public temp: string;
    public pressure: number;
    public wind: number;
    public humidity: number;
    public cloudsIconID: string;


    public constructor(name: string, country: string, temp: string, pressure: number, wind: number, humidity: number, cloudIconID: string) {
        this.cityName = name;
        this.country = country;
        this.temp = temp;
        this.pressure = pressure;
        this.wind = wind;
        this.humidity = humidity;
        this.cloudsIconID = cloudIconID;
    }

    public static async FetchCityWeatherData(city: string) {
        // api key c482ee2e2b72be8c7159e7a121209c66
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',&units=metric&APPID=c482ee2e2b72be8c7159e7a121209c66');
        return response;
    }
}