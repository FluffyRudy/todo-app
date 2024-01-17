import "../styles/userInput.css";
import { Widget } from "../share/widgets";
import { Todo } from "../lib/todo";
import { Storage } from "../lib/storage";

function displayPopUp() {
    document.querySelector("dialog").showModal();
}

function closePopup(e) {
    e.preventDefault();
    document.querySelector("dialog").close();
}

function displayErrorPopup(erroMsg) {
    const popup = document.createElement("dialog");
    popup.style.width = "min(600px, 100vw)";
    popup.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    document.body.appendChild(popup);
    const popupContent = Widget.createText(erroMsg);
    popupContent.style.fontSize = "3em";
    popupContent.style.fontFamily = "monospace";
    popupContent.style.color = "white";
    popupContent.style.textAlign = "center";
    popup.appendChild(popupContent);
    popup.showModal();
    setTimeout(() => {
        popup.close()
    }, 2000);
}

function getUserInputs() {
    const label = document.getElementById("todo-label");
    const discription = document.getElementById("todo-disc");
    const deadline = document.getElementById("todo-deadline");
    return [label.value, discription.value, deadline.valueAsDate];
}

function addTodo(e) {
    const userInput = getUserInputs();
    const todoObj = new Todo(...userInput);
    if (userInput[0].length < 4) {
        e.preventDefault();
        displayErrorPopup("Provide proper label");
        return;
    } else if (userInput[1].length < 4) {
        e.preventDefault();
        displayErrorPopup("Provide proper description");
        return;
    }
    Storage.addToStorage(todoObj, Widget.createTodoUI);
    closePopup(e);
}

export function TodoAddButton() {
    return Widget.createButton("", "id", "add-button");
}

export function registerUserInputListener() {
    document.getElementById("add-button")
        .addEventListener('click', displayPopUp);
    document.getElementById("add-todo")
        .addEventListener('click', addTodo);
    document.getElementById("cancel-todo")
        .addEventListener('click', closePopup);
}
