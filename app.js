// selectors
const todoInupt=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const filterOption=document.querySelector('.filter-todo');


// event-listeners

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

// functions

function addTodo(event) {
    // console.log('hello');

    //Prevent form from submitting
    event.preventDefault();

    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo")

    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInupt.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Check mark Button 
    const completedButton=document.createElement('button');
    completedButton.innerHTML ='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Check trash Button 
    const trashButton=document.createElement('button');
    trashButton.innerHTML ='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append to list todo
    todoList.appendChild(todoDiv);

    // clear todo input value 
    todoInupt.value ='';

    
}

function deleteCheck(e){
    // console.log(e.target);
    const item =e.target;
    //delete todo
    if (item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        // Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }
    
    // check mark function
    if (item.classList[0]==='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
    
}

function filterTodo(e){
    const todos= todoList.childNodes;

    todos.forEach(function(todo){
        console.log(e.target.value)
        console.log(todos)
        switch(e.target.value){
            case "all":
                todo.style.display='flex';
                break;
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display= "flex";
                }else{
                    todo.style.display= "none";
                }
                break;
            case "uncompleted": 
                if (!todo.classList.contains("completed")){
                    todo.style.display= "flex";
                }
                else{
                    todo.style.display= "none";
                }
                break;
            }
    });
}
