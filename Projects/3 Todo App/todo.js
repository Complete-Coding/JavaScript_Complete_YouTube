let todoList = JSON.parse(localStorage.getItem("tasks"))||[];;
displayItems();
function addTodo() {
  let inputElement = document.querySelector('#todo-input').value;
  let dateElement = document.querySelector('#todo-date').value;
  if(inputElement!="" && dateElement!=""){
      todoList.push({task : inputElement, date : dateElement});
      localStorage.setItem("tasks", JSON.stringify(todoList));
      document.querySelector('#todo-input').value = '';
      document.querySelector('#todo-date').value = '';
  }
  displayItems();
}
function deleteAll(){
  if(todoList.length!=0){
      todoList=[]
      localStorage.setItem("tasks", JSON.stringify(todoList));
      displayItems()
  }
}
function deleteItems(i){
  todoList.splice(i,1)
  localStorage.setItem("tasks", JSON.stringify(todoList));
  displayItems();
}
function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    let {task, date} = todoList[i];
    newHtml += `
      <span>${task}</span>
      <span>${date}</span>
      <button class='btn-delete' onclick="deleteItems(${i})">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}