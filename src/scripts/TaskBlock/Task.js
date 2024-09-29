class Task {
    constructor(id, content) {
        this._id = id;
        this.isCompleted = false;
        this.content = content;
    }

    toggleCompleted() {
        this.isCompleted = !this.isCompleted;
    }
}

export default Task;
