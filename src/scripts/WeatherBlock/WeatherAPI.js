class WeatherAPI {
	constructor(key) {
		this.key = key;
	}

	async getWeaterData(lat, lon) {
		return await fetch(
			`https://api.weatherbit.io/v2.0/current?lat=${lat}6&lon=${lon}82&key=${this.key}&include=minutely&lang=ru`
		).then((res) => res.json());
	}
}

export default WeatherAPI;
