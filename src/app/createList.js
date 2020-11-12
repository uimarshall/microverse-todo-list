function toDoItem(project, title, description, completed, priority) {
  this.project = project;
  this.title = title;
  this.description = description;
  // this.date = date;
  this.completed = completed;
  this.priority = priority;
}

export default toDoItem;
