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
		// listItem,
		// listItemCheckbox,
		// listItemContent,
		// listItemDeleteButton
	) {
		this.taskBlock = findElement(`.${taskBlock}`);
		this.collapseButton = findElement(`.${collapseButton}`);
		this.form = findElement(`.${form}`);
        this.formInput = findElement(`.${formInput}`);
        this.formButton = findElement(`.${formButton}`);
		this.taskList = findElement(`.${taskList}`);
		this.replacement = findElement(`.${replacement}`);
		this.deleteButton = findElement(`.${deleteButton}`);
		this.template = findElement(`#${template}`);

		this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];

		this.taskBlock.addEventListener("dblclick", () => this.open());
        this.form.addEventListener('submit', evt => {
            evt.preventDefault();
            this.addTask();
        })
	}

	clouse() {
		toggleClassList([this.taskBlock], "clouse-state", "open-state");
		toggleClassList(
			[this.collapseButton, this.form, this.deleteButton],
			"inactive",
			"active"
		);

		this.taskBlock.addEventListener("dblclick", () => this.open());
		this.collapseButton.removeEventListener("click", () => this.clouse());
	}

	open() {
		toggleClassList([this.taskBlock], "open-state", "clouse-state");
		toggleClassList(
			[this.collapseButton, this.form, this.deleteButton],
			"active",
			"inactive"
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
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    createTask(task) {
        const listItem = this.template.content.cloneNode(true);
		const listItemContent = listItem.querySelector(".task-list__text");
        const deleteButton = listItem.querySelector('.task-list__button');

        listItemContent.textContent = task.content;
        
        this.taskList.append(listItem);

        this.checkTasks();

        this.save();
    }

    addTask() {
        const task = new Task(this.tasks.length, this.formInput.value);

        this.createTask(task);
        this.tasks.push(task);
        this.formInput.value = '';
    }

    setTask() {
        this.tasks.forEach(task => this.createTask(task));
    }
}

export default TaskBlock;
