import "../styles/header.css"
import { Widget } from "../share/widgets";

export default function createHeader() {
    const header = document.createElement("header");
    header.setAttribute("id", "header");

    const container1 = Widget.createContainer("id", "header-left-child");
    const container2 = Widget.createContainer("id", "header-right-child");

    const menuButton = Widget.createButton("", "id", "menu-button");
    const searchBar  = Widget.createSearchBar("id", "search-bar");
    const sortButton = Widget.createButton("Search", "id", "search-button");

    container1.appendChild(menuButton);
    container1.appendChild(Widget.createText("Todo Free", "id", "logo"));
    container2.appendChild(searchBar);
    container2.appendChild(sortButton);

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
    const navElemLabels = ["Notes", "Categorized", "Uncatagorized", "Trash"];
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

export function registerMenuEventListers() {
    document.getElementById("menu-button")
        .addEventListener('click', toggleMenu)
    document.getElementById("cancel-menu")
        .addEventListener('click', toggleMenu);
}