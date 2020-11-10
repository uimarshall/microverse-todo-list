function toDoItem(project, title, description, date, completed, priority) {
  // this.project = project || ='Default';
  this.project = project;
  this.title = title;
  this.description = description;
  this.date = date;
  this.completed = completed;
  this.priority = priority;
}

export default toDoItem;
