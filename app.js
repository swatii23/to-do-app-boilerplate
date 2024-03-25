const addBtn = document.getElementById("button");
const input = document.getElementById("input");
const todolist = document.getElementById("todolist");

const todos = [];

addBtn.addEventListener("click", addTodo)

function addTodo() {
    todos.push(input.value);
    showTodos();
}

function showTodos() {
    todolist.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo;

        todolist.append(li);
        input.value = ""
    })
}