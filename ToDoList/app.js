//Selectors
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filteropt = document.querySelector(".filter-todo");

//Events
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", delCheck);
filteropt.addEventListener("click", filterTodo)

//Functions
function addTodo(event) 
{
    event.preventDefault();             //prevent from submitting

    // create/add todo div
    const todoDiv= document.createElement("div");  
    todoDiv.classList.add("todo");                     

    // create/add todo list
    const newTodo = document.createElement("li");   
    newTodo.innerText= todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value="";
    
    //Checkbox button
    const completedButton = document.createElement("button");
    completedButton.innerHTML= '<i class= "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Delete button
    const trashButton= document.createElement("button");
    trashButton.innerHTML= '<i class= "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton); 

    //Append to list
    todoList.appendChild(todoDiv);

}

function delCheck(e)
{
    const item=e.target;

    //Delete item from list
    if (item.classList[0] === "trash-btn")
    {
        const todo= item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', e =>{
            todo.remove();
        });
        
    }

    //check item from list
    if (item.classList[0] === "complete-btn")
    {
        const todo= item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos=todoList.childNodes;
    todos.forEach (function (todo){
        switch (e.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")){
                todo.style.display="flex"; 
                }
                else{
                todo.style.display="none";
                }
                break;
            case "incomplete":
                if (!todo.classList.contains("completed")){
                    todo.style.display="flex"; 
                    }
                else{
                    todo.style.display="none";
                }
                break;
        }
            
    });
    

}


