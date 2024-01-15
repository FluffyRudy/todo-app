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

