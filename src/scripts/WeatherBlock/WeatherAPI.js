class WeatherAPI {
    constructor(lat, lon, key) {
        this.lat = lat;
        this.lon = lon;
        this.key = key;
    }

    async getWeaterData() {
        return await fetch(
            `https://api.weatherbit.io/v2.0/current?lat=${this.lat}6&lon=${this.lon}82&key=${this.key}&include=minutely&lang=ru`
        ).then(res => res.json())
    }
}

export default WeatherAPI;
