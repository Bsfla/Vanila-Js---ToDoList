const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);


function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    //completebutton
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class = "fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    
    //deletebutton
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    //append todolist
    todoList.appendChild(todoDiv);

    //clear input value
    todoInput.value = " "
    


}
function deleteCheck(event){
    const item = event.target;
    
    if(item.classList[0] == "delete-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
    if(item.classList[0] == "complete-btn"){
        const todo = item.parentElement;
        todo.innerText = "Finish"
        
        todo.classList.add("completed")
    }

}

