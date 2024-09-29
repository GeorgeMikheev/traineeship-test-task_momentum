import { findElement } from "../../utils/utils";

class SliderBlock {
	constructor(slider) {
		this.slider = findElement(`.${slider}`);
	}

	setImage(hours) {
		hours = Number(hours);
		let image;

		if (hours >= 0 && hours < 6) {
			image =
				"url(https://github.com/digitalSector47/traineeship-test-task/blob/main/images/01.jpg?raw=true)";
		} else if (hours >= 6 && hours < 12) {
			image =
				"url(https://github.com/digitalSector47/traineeship-test-task/blob/main/images/02.jpg?raw=true)";
		} else if (hours >= 12 && hours < 18) {
			image =
				"url(https://github.com/digitalSector47/traineeship-test-task/blob/main/images/03.jpg?raw=true)";
		} else {
			image =
				"url(https://github.com/digitalSector47/traineeship-test-task/blob/main/images/04.jpg?raw=true)";
		}

		this.slider.style.backgroundImage = image;
	}
}

export default SliderBlock;
