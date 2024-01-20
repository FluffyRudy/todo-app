import "../styles/header.css"
import { Widget } from "../share/widgets";
import { Storage } from "../lib/storage";

export default function createHeader() {
    const header = document.createElement("header");
    header.setAttribute("id", "header");

    const container1 = Widget.createContainer("id", "header-left-child");
    const container2 = Widget.createContainer("id", "header-right-child");

    const menuButton = Widget.createButton("", "id", "menu-button");
    const searchBar  = Widget.createSearchBar("id", "search-bar");
    const searchButton = Widget.createButton("Search", "id", "search-button");

    container1.appendChild(menuButton);
    container1.appendChild(Widget.createText("Todo Free", "id", "logo"));
    container2.appendChild(searchBar);
    container2.appendChild(searchButton);

    header.appendChild(container1);
    header.appendChild(container2);

    return header;
}

function toggleMenu() {
    document.getElementById("menu-bar")
        .classList.toggle("visible");
    document.getElementById("header").classList.toggle("invisible");
    document.getElementById("add-button").classList.toggle("invisible");
}

export function createMenu() {
    const navElemLabels = ["Notes", "Categorized", "Uncatagorized"];
    const navElement    = Widget.createNavBar(navElemLabels, "id", "menu-bar");
    const headCancelContainer = Widget.createContainer("id", "top-wrapper");
    headCancelContainer.appendChild(createMenuHeading());
    headCancelContainer.appendChild(createMenuCancelButton());
    navElement.insertBefore(headCancelContainer, navElement.firstChild);
    return navElement;
}

function createMenuHeading() {
    return Widget.createHeading("h1", "Todo Free", "id", "menu-heading");
}

function createMenuCancelButton() {
    return Widget.createButton("X", "id", "cancel-menu");
}

function handleMenuButtonEvents(event) {
    const todoUIContainer = document.getElementById("container");
    const targetID = event.target.getAttribute('id');
    
    while (todoUIContainer.firstChild) {
        todoUIContainer.removeChild(todoUIContainer.firstChild);
    }

    if (targetID === 'categorized') {
        const categorizedTodoObj = Object.keys(Storage.getObjStorage())
                                    .filter(category => category != "all");
        for (let category of categorizedTodoObj) {
            const todoObjects = Storage.getElemByCategory(category);
            for (let todoObj of todoObjects) {
                todoUIContainer.appendChild(
                    Widget.createTodoUI(todoObj)
                );
            }
        }
    } else if (targetID === "uncatagorized") {
        const uncategorizedTodoObj = Object.keys(Storage.getObjStorage())
                                    .filter(category => category === "all");
        for (let category of uncategorizedTodoObj) {
            const todoObjects = Storage.getElemByCategory(category);
            for (let todoObj of todoObjects) {
                todoUIContainer.appendChild(
                    Widget.createTodoUI(todoObj)
                );
            }
        }
    } else if (targetID === "notes") {
        const allCategory = Object.keys(Storage.getObjStorage());
        for (let category of allCategory) {
            const todoObjects = Storage.getElemByCategory(category);
            for (let todoObj of todoObjects) {
                todoUIContainer.appendChild(
                    Widget.createTodoUI(todoObj)
                );
            }
        }
    }
}

export function registerMenuEventListers() {
    document.getElementById("menu-button")
        .addEventListener('click', toggleMenu)
    document.getElementById("cancel-menu")
        .addEventListener('click', toggleMenu);
    document.getElementById("menubar-buttons")
        .addEventListener('click', handleMenuButtonEvents);
}