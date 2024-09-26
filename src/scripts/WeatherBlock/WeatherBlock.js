import WeatherAPI from "../Api/WeatherAPI";

class WeatherBlock extends WeatherAPI {
	constructor(key, city, temperature, description, icon, error) {
		super(key);

		this.city = city;
		this.temperature = temperature;
		this.description = description;
		this.icon = icon;
		this.error = error;
	}

	getGeolocationData() {
		navigator.geolocation.getCurrentPosition(
			(result) => {
				const geolocationData = {
					lat: result.coords.latitude,
					lon: result.coords.longitude,
				};

				localStorage.setItem(
					"geolocationData",
					JSON.stringify(geolocationData)
				);
				const localData = JSON.parse(localStorage.getItem("geolocationData"));
				this.setWeatheData(localData.lat, localData.lon);
			},
			() => this.setWeatheData("45.0328", "38.9769")
		);
	}

	async setWeatheData(lat, lon) {
		try {
			const weatherData = await this.getWeaterData(lat, lon);

			this.city.textContent = weatherData.data[0].city_name;
			this.temperature.textContent = `${Math.round(
				weatherData.data[0].temp
			)}°C`;
			this.description.textContent = weatherData.data[0].weather.description;
			this.icon.src = `https://cdn.weatherbit.io/static/img/icons/${weatherData.data[0].weather.icon}.png`;
		} catch (err) {
			this.error.textContent = err;
		}
	}
}

export default WeatherBlock;
