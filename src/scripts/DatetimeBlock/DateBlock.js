import { findElement } from "../../utils/utils";
import SliderBlock from "../SliderBlock/SliderBlock";

class DatetimeBlock extends SliderBlock {
	constructor(time, date, image) {
		super(image);
		this.time = findElement(`.${time}`);
		this.date = findElement(`.${date}`);

		this.monthNamesGenitive = [
			"января",
			"февраля",
			"марта",
			"апреля",
			"мая",
			"июня",
			"июля",
			"августа",
			"сентября",
			"октября",
			"ноября",
			"декабря",
		];
	}

	transformationTimeFormat(unitTime) {
		return unitTime < 10 ? `0${unitTime.toString()}` : unitTime.toString();
	}

	createCurrentDatetime() {
		const currentDate = new Date();

		const hours = this.transformationTimeFormat(currentDate.getHours());
		const minutes = this.transformationTimeFormat(currentDate.getMinutes());
		const seconds = this.transformationTimeFormat(currentDate.getSeconds());
		const day = this.transformationTimeFormat(currentDate.getDate());
		const month = this.monthNamesGenitive[currentDate.getMonth()];
		const weekDay = currentDate.toLocaleString("default", { weekday: "long" });

		this.time.textContent = `${hours}:${minutes}:${seconds}`;
		this.date.textContent = `${day} ${month}, ${weekDay}`;

		this.setImage(hours);
		setInterval(() => this.createCurrentDatetime(), 1000);
	}
}

export default DatetimeBlock;
