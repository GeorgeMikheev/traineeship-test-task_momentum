export const findElement = (elementName) => document.querySelector(elementName);

export const toggleClassList = (elements, newClassName, oldClassName) => {
	elements.forEach((element) => {
		element.classList.add(newClassName);
		element.classList.remove(oldClassName);
	});
};
