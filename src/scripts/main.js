import DatetimeBlock from "./DatetimeBlock/DateBlock";
import TaskBlock from "./TaskBlock/TaskBlock";
import WeatherBlock from "./WeatherBlock/WeatherBlock";

const weatherApiKey = process.env.WTHR_API_KEY;

const weatherBlockTitle = document.querySelector(".weather-block__title");
const weatherBlockTemp = document.querySelector(".weather-block__temperature");
const weatherBlockDescription = document.querySelector(
	".weather-block__description"
);
const weatherBlockIcon = document.querySelector(".weather-block__icon");
const weatherBlockError = document.querySelector(".weather-block__error");
const time = document.querySelector(".datetime-block__time");
const date = document.querySelector(".datetime-block__date");
const slider = document.querySelector(".slider");
const taskBlockElement = document.querySelector(".task-block");
const clouseButton = document.querySelector(".clouse-button");
const taskBlockForm = document.querySelector(".widget-form");
const taskList = document.querySelector(".task-list");
const replacement = document.querySelector(".replacement");
const deleteAllButton = document.querySelector(".delete-all-task-button");
const taskTemplate = document.querySelector("#task-template");
const taskListText = document.querySelector(".task-list__text");
const deleteButton = document.querySelector('.task-list__button');

const weatherBlock = new WeatherBlock(
	weatherApiKey,
	weatherBlockTitle,
	weatherBlockTemp,
	weatherBlockDescription,
	weatherBlockIcon,
	weatherBlockError,
	taskListText
);

const datetimeBlock = new DatetimeBlock(time, date, slider);

const taskBlock = new TaskBlock(
	taskBlockElement,
	clouseButton,
	taskBlockForm,
	taskList,
	taskTemplate,
	replacement
);

taskBlock.setTasks();
weatherBlock.getGeolocationData();
datetimeBlock.createCurrentDatetime();

taskBlockElement.addEventListener('dblclick', () => taskBlock.openTaskBlock());
taskBlockForm.addEventListener('submit', evt => {
	evt.preventDefault();
	taskBlock.addTask();
	taskBlock.checkActive();
});
