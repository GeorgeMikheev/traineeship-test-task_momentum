import { findElement, toggleClassList } from "../../utils/utils";
import Task from "./Task";

class TaskBlock {
	constructor(
		taskBlock,
		collapseButton,
		form,
		formInput,
		formButton,
		taskList,
		replacement,
		deleteButton,
		template
	) {
		this.taskBlock = findElement(`.${taskBlock}`);
		this.collapseButton = findElement(`.${collapseButton}`);
		this.form = findElement(`.${form}`);
		this.formInput = findElement(`.${formInput}`);
		this.formButton = findElement(`.${formButton}`);
		this.taskList = findElement(`.${taskList}`);
		this.replacement = findElement(`.${replacement}`);
		this.deleteCompleted = findElement(`.${deleteButton}`);
		this.template = findElement(`#${template}`);

		this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];

		this.taskBlock.addEventListener("dblclick", () => this.open());
		this.form.addEventListener("submit", (evt) => {
			evt.preventDefault();
			this.addTask();
		});

		this.deleteCompleted.addEventListener("click", () =>
			this.deleteCompletedTasks()
		);
	}

	clouse() {
		toggleClassList(
			[this.collapseButton, this.form, this.deleteCompleted],
			"clouse",
			"open"
		);

		toggleClassList([this.taskBlock], "clouse-state", "open-state");

		toggleClassList(
			[this.collapseButton, this.form, this.deleteCompleted],
			"inactive",
			"active"
		);

		this.taskBlock.addEventListener("dblclick", () => this.open());
		this.collapseButton.removeEventListener("click", () => this.clouse());
	}

	open() {
		toggleClassList([this.taskBlock], "open-state", "clouse-state");
		toggleClassList(
			[this.collapseButton, this.form, this.deleteCompleted],
			"active",
			"inactive"
		);

		toggleClassList(
			[this.collapseButton, this.form, this.deleteCompleted],
			"open",
			"clouse"
		);

		this.collapseButton.addEventListener("click", () => this.clouse());
		this.collapseButton.removeEventListener("dbclick", () => this.open());
	}

	checkTasks() {
		this.tasks.length > 0
			? toggleClassList([this.replacement], "inactive", "active")
			: toggleClassList([this.replacement], "active", "inactive");
	}

	save() {
		localStorage.setItem("tasks", JSON.stringify(this.tasks));
	}

	createTask(task) {
		const listItem = this.template.content.cloneNode(true);
		const listItemContent = listItem.querySelector(".task-list__text");
		const deleteTaskButton = listItem.querySelector(".task-list__button");
		const checkbox = listItem.querySelector(".task-list__checkbox");

		listItemContent.textContent =
			task.content[0].toUpperCase() + task.content.slice(1);

		task.isCompleted
			? checkbox.setAttribute("checked", "")
			: checkbox.removeAttribute("checked");

		this.taskList.append(listItem);
		this.checkTasks();

		deleteTaskButton.addEventListener("click", (evt) => {
			this.deleteTask(task._id);
			evt.target.closest(".task-list__item").remove();
			this.checkTasks();
		});

		checkbox.addEventListener("change", () =>
			this.toggleTaskCompleted(task._id)
		);
	}

	addTask() {
		if (this.formInput.value) {
			const task = new Task(this.tasks.length, this.formInput.value);

			this.tasks.push(task);
			this.createTask(task);
			this.save();
			this.formInput.value = "";
		}
	}

	setTask() {
		this.tasks.forEach((task) => this.createTask(task));
	}

	deleteTask(taskID) {
		this.tasks = this.tasks.filter((task) => task._id !== taskID);
		this.save();
	}

	toggleTaskCompleted(taskID) {
		const task = this.tasks.find((task) => task._id === taskID);
		if (!task) return;
		task.isCompleted ? (task.isCompleted = false) : (task.isCompleted = true);
		this.save();
	}

	deleteCompletedTasks() {
		this.tasks = this.tasks.filter((task) => !task.isCompleted);
		this.save();
		this.taskList.innerHTML = "";
		this.setTask();
	}
}

export default TaskBlock;
