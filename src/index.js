import "./styles/main.css";
import header  from "./components/header";
import footer from "./components/footer";
import { TodoAddButton, registerUserInputListener, addTodoUI } from "./components/input";
import { createMenu, registerMenuEventListers } from "./components/header";
import { Storage } from "./lib/storage";
import { Widget } from "./share/widgets";

const container = document.getElementById("container");

document.body.insertBefore(TodoAddButton(), container);
document.body.insertBefore(header(), container)
document.body.insertBefore(createMenu(), container);
document.body.appendChild(footer());

registerMenuEventListers();
registerUserInputListener();


function displayNotes() {
    clearCurrentTodoUI();
    for (let todoObj in Storage.todoObjstorage) {
        addTodoUI(Storage.todoObjstorage[todoObj])
    }
}

function clearCurrentTodoUI() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

document.getElementById("notes")
    .addEventListener('click', displayNotes);