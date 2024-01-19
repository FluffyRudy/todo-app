import { Storage } from "../lib/storage";
import { Widget } from "../share/widgets";

function handleTodoEvents(event) {
    const parentElem = event.target.parentNode;
    const category = parentElem.getAttribute("category");
    const id =  parentElem.getAttribute("todo-id"); 
    if (event.target.getAttribute("id") == "delete-todoui") {
        Storage.removeTodoElem( 
            category, 
            id
        );
        parentElem.remove();
    } else if (event.target.getAttribute("id") == "todo-details") {
        const infoBox = Widget.createTodoInfoBox(
            Storage.todoObjstorage[category][Storage.getElemByCatId(category, id)]
        );
        if (!document.getElementById("detail-info-box")) {
            document.getElementById("container").appendChild(infoBox);
            event.target.onblur = () => {
                if (document.getElementById("detail-info-box"))
                    document.getElementById("detail-info-box").remove();
            }
        }
    }
}

export function registerTodoEvents() {
    document.getElementById("container")
        .addEventListener('click', handleTodoEvents);
}