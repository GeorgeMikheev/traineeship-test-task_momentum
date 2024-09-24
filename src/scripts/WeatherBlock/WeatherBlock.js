import WeatherAPI from "./WeatherAPI";

class WeatherBlock extends WeatherAPI {
    constructor(lat, lon, key) {
        super(lat, lon, key);
    }
}

export default WeatherBlock;
