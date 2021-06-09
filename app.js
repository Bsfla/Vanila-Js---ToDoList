const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',btnCheck);


function addTodo(event){
    event.preventDefault();
    if (!todoInput.value) {
        alert('내용을 입력해주세요'); 
        return false;
    }
    else {
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

    //updataButton
          const upDateButton = document.createElement("button");
          upDateButton.classList.add('update-btn');
          todoDiv.appendChild(upDateButton);

    //append todolist
          todoList.appendChild(todoDiv);

    //clear input value
          todoInput.value = " "
    }
    


}

function btnCheck(event){
    const item = event.target;
    
    if(item.classList[0] === "delete-btn") deleteBtn(item.parentElement);
    
    else if (item.classList[0] === "complete-btn") completeBtn(item.parentElement);

    else if (item.classList[0] === "update-btn") upDateBtn(item.parentNode);
}

function deleteBtn(e) {
    e.remove();
}

function completeBtn(e) {
    const todo = e;
    todo.innerText = "Finish";
    todo.classList.add("completed");
    
}

function upDateBtn(e) {
    const data = e.childNodes[0];
    data.innerHTML = todoInput.value;
    todoInput.value = " "
}

