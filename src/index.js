import "./styles/main.css";
import { createHeader } from "./components/header";
import { Widget } from "./share/widgets";

const container = document.getElementById("container");
const addButton = Widget.createButton("", "id", "add-button");

container.appendChild(createHeader())
document.body.appendChild(addButton);