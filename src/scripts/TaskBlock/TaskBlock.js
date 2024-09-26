import Task from "./Task";

class TaskBlock {
	constructor(
		taskBlockElement,
		clouseButton,
		form,
		list,
		template,
		replacement,
        taskListText
	) {
		this.taskBlockElement = taskBlockElement;
		this.clouseButton = clouseButton;
		this.form = form;
		this.list = list;
		this.template = template;
		this.replacement = replacement;
        this.taskListText = taskListText;
		this.tasks = localStorage.getItem("tasks")
			? JSON.parse(localStorage.getItem("tasks"))
			: [];

		this.formInput = this.form.querySelector(".widget-form__input");
        
	}

	checkActive() {
		if (this.tasks.length > 0) {
			this.replacement.classList.add("inactive");
			this.replacement.classList.remove("active");
		} else {
			this.replacement.classList.remove("inactive");
			this.replacement.classList.add("active");
		}
	}

	addTask() {
		const task = new Task(this.tasks.length, false, this.formInput.value);

		this.createTask(task);

		this.tasks.push(task);

		localStorage.setItem("tasks", JSON.stringify(this.tasks));
	}

	createTask(task) {
		const listItem = this.template.content.cloneNode(true);
		const listItemText = listItem.querySelector(".task-list__text");
        const deleteButton = listItem.querySelector('.task-list__button');

		listItemText.textContent = task.text

		this.formInput.value = "";

		this.list.append(listItem);

        deleteButton.addEventListener('click', this.deleteTask(task));
	}

    setTasks() {
        this.tasks.forEach(task => this.createTask(task));
        this.checkActive();
    }

	clouseTaskBlock() {
		this.taskBlockElement.classList.add("clouse-state");
		this.taskBlockElement.classList.remove("open-state");
		this.clouseButton.classList.add("inactive");
		this.clouseButton.classList.remove("active");
		this.form.classList.add("inactive");
		this.form.classList.remove("active");
		this.deleteAllButton.classList.add("inactive");
		this.deleteAllButton.classList.remove("active");

		this.taskBlockElement.addEventListener("dbclick", () =>
			this.openTaskBlock()
		);
		this.clouseButton.removeEventListener("click", () =>
			this.clouseTaskBlock()
		);
	}

	openTaskBlock() {
		this.taskBlockElement.classList.remove("clouse-state");
		this.taskBlockElement.classList.add("open-state");
		this.clouseButton.classList.remove("inactive");
		this.clouseButton.classList.add("active");
		this.form.classList.remove("inactive");
		this.form.classList.add("active");
		this.deleteAllButton.classList.remove("inactive");
		this.deleteAllButton.classList.add("active");

		this.clouseButton.addEventListener("click", () => this.clouseTaskBlock());
		this.clouseButton.removeEventListener("dbclick", () =>
			this.openTaskBlock()
		);
	}

    deleteTask(task) {
        console.log(task)
    }
}

export default TaskBlock;
