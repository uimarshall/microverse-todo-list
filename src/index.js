import './main.scss';
import toDoItem from './app/app';
import defaultIndex from './app/defaultIndex'
// import './app/alertService';
// import { render } from './app/componentService';

// alert('hello');
let toDo1 = new toDoItem('project1', 'title1', 'description1', 'date1', 'completed1', 'priority1')

const body = document.querySelector('body')

const content = document.getElementById('content')

defaultIndex(content)

// const displayItem = document.createElement('div')
// displayItem.id = 'ToDoItem'
//
// const itemTitle = document.createElement('h2')
// itemTitle.textContent = `${toDo1.title}`
// displayItem.appendChild(itemTitle)
//
// const itemDescription = document.createElement('p')
// itemDescription.textContent = `${toDo1.description}`
// displayItem.appendChild(itemDescription)
//
// const itemDate = document.createElement('p')
// itemDate.textContent = `${toDo1.date}`
// displayItem.appendChild(itemDate)
//
// const itemComplete = document.createElement('p')
// itemComplete.textContent = `${toDo1.completed}`
// displayItem.appendChild(itemComplete)
//
// const itemPriority = document.createElement('p')
// itemPriority.textContent = `${toDo1.priority}`
// displayItem.appendChild(itemPriority)

body.appendChild(displayItem)
