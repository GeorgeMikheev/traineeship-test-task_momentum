import WeatherAPI from "./Api/WeatherAPI";
import DatetimeBlock from "./DatetimeBlock/DateBlock";
import TaskBlock from "./TaskBlock/TaskBlock";
import WeatherBlock from "./WeatherBlock/WeatherBlock";

const weatherApiKey = process.env.WTHR_API_KEY;

const weatherAPI = new WeatherAPI(weatherApiKey);

const weatherBlock = new WeatherBlock(
	weatherAPI,
	"weather-block__title",
	"weather-block__temperature",
	"weather-block__description",
	"weather-block__icon",
	"weather-block__error"
);

const datetimeBlock = new DatetimeBlock(
	"datetime-block__time",
	"datetime-block__date",
	"slider"
);

const taskBlock = new TaskBlock(
	"task-block",
	"close-button",
	"widget-form",
	"widget-form__input",
	"widget-form__button",
	"task-list",
	"replacement",
	"delete-completed",
	"task-template"
);

weatherBlock.getGeolocationData();
datetimeBlock.createCurrentDatetime();
taskBlock.setTask();
