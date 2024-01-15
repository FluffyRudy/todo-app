import "./styles/main.css";
import header  from "./components/header";
import footer from "./components/footer";
import { TodoAddButton, registerEventListener } from "./components/input";
import { Storage } from "./lib/storage";

const container = document.getElementById("container");

container.appendChild(header())
container.appendChild(footer());
container.appendChild(TodoAddButton());

registerEventListener();