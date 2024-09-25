import DatetimeBlock from "./DatetimeBlock/DateBlock";
import WeatherBlock from "./WeatherBlock/WeatherBlock";

const weatherApiKey = process.env.WTHR_API_KEY;

const weatherBlockTitle = document.querySelector('.weather-block__title');
const weatherBlockTemp = document.querySelector('.weather-block__temperature');
const weatherBlockDescription = document.querySelector('.weather-block__description');
const weatherBlockIcon = document.querySelector('.weather-block__icon');
const weatherBlockError = document.querySelector('.weather-block__error');
const time = document.querySelector('.datetime-block__time');
const date = document.querySelector('.datetime-block__date');
const slider = document.querySelector('.slider');

const weatherBlock = new WeatherBlock(
    weatherApiKey,
    weatherBlockTitle,
    weatherBlockTemp,
    weatherBlockDescription,
    weatherBlockIcon,
    weatherBlockError
);

const datetimeBlock = new DatetimeBlock(time, date, slider);

weatherBlock.getGeolocationData();
datetimeBlock.createCurrentDatetime();
