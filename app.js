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
    todos.forEach((todo, ind) => {
        const li = document.createElement("li");
        li.innerHTML = `${todo} <a onclick="editTodo(${ind})">Edit</a><a onclick="deleteTodo(${ind})">&times|</a>`;

        todolist.append(li);
        input.value = ""
    })
}

function editTodo(ind) {
    const update = prompt("Please insert your new value:");
    todos.splice(ind, 1, update);
    showTodos();
}

function deleteTodo(ind) {
    todos.splice(ind, 1);
    showTodos();
}