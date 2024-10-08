class Task {
	constructor(id, isCompleted, content) {
		this._id = id;
		this.isCompleted = isCompleted;
		this.content = content;
	}

	toggleCompleted() {
		this.isCompleted = !this.isCompleted;
	}
}

export default Task;
