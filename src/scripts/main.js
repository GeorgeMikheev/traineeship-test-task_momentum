import WeatherBlock from "./WeatherBlock/WeatherBlock";

const weatherApiKey = process.env.WTHR_API_KEY;

const weatherBlockTitle = document.querySelector('.weather-block__title');
const weatherBlockTemp = document.querySelector('.weather-block__temperature');
const weatherBlockDescription = document.querySelector('.weather-block__description');
const weatherBlockIcon = document.querySelector('.weather-block__icon');
const weatherBlockError = document.querySelector('.weather-block__error');

const weatherBlock = new WeatherBlock(
    weatherApiKey,
    weatherBlockTitle,
    weatherBlockTemp,
    weatherBlockDescription,
    weatherBlockIcon,
    weatherBlockError
);

weatherBlock.getGeolocationData();
