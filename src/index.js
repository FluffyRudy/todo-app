import "./styles/main.css";
import header  from "./components/header";
import footer from "./components/footer";
import { TodoAddButton, registerUserInputListener, addTodoUI } from "./components/input";
import { createMenu, registerMenuEventListers } from "./components/header";
import { registerTodoEvents } from "./components/todoEvents";
import { Storage } from "./lib/storage"; 

const container = document.getElementById("container");

document.body.insertBefore(TodoAddButton(), container);
document.body.insertBefore(header(), container)
document.body.insertBefore(createMenu(), container);
document.body.appendChild(footer());

registerMenuEventListers();
registerUserInputListener();
registerTodoEvents();

window.onload = () => {
    const todoObjstorage = Storage.getObjStorage();
    for (const category in todoObjstorage) {
        for (const todoObj of todoObjstorage[category]) {
            addTodoUI(todoObj);
        }
    }
}