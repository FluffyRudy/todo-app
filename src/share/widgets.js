function textContainedElem(type, text, attribute=undefined, value=undefined) {
    const elem = document.createElement(type);
    elem.textContent = text;
    setWidgetAttribute(elem, attribute, value);
    return elem;
}

function setWidgetAttribute(element, attribute, value) {
    if (attribute) {
        if (attribute === "class")
            element.classList.add(value);
        else
            element.setAttribute(attribute, value);
    }
}

export class Widget {
    static createButton(text, attribute=undefined, value=undefined) {
        return textContainedElem("button", text, attribute, value);
    }

    static createText(text, attribute=undefined, value=undefined) {
        return textContainedElem("p", text, attribute, value);
    }

    static createContainer(attribute=undefined, value=undefined) {
        const container = document.createElement("div");
        setWidgetAttribute(container, attribute, value);
        return container;
    }

    static createSearchBar(attribute=undefined, value=undefined) {
        const elem = document.createElement("input");
        elem.type = "search";
        setWidgetAttribute(elem, attribute, value);
        return elem;
    }

    static createHeading(level, content, attribute=undefined, value=undefined) {
        const heading = textContainedElem(level, content, attribute, value);
        return heading;
    }

    static createList(listElements, attribute=undefined, value=undefined) {
        const createAttribute = (text) => {
            return text.toLowerCase().replace(' ', '-');
        }
        const elemType = "ul";
        const ul = document.createElement(elemType);
        setWidgetAttribute(ul, attribute, value);
        listElements.forEach(elem => {
            const listElem = document.createElement("li");
            const navBtn   = Widget.createButton(elem, "id", createAttribute(elem));
            listElem.appendChild(navBtn);
            ul.appendChild(listElem);
        })

        return ul;
    }

    static createNavBar(navItems, attribute=undefined, value=undefined) {
        const nav = document.createElement("nav");
        const navElems = Widget.createList(navItems, "id", "menubar-buttons");
        setWidgetAttribute(nav, attribute, value);
        nav.appendChild(navElems);
        return nav;
    }

    static createTodoUI(todoObj) {
        const wrapper = Widget.createContainer("class", "todoui-wrapper");
        wrapper.setAttribute("todo-id", todoObj.id);
        const status = document.createElement('input');
        status.type  = "checkbox";
        status.setAttribute("id", "todo-status");
        const category = Widget.createText("Category: " + todoObj.category, 'id', 'category-popup');
        wrapper.setAttribute("category", todoObj.category);
        const label  = Widget.createText(todoObj.label , "id", "todo-label");
        const details = Widget.createButton("Details", "id", "todo-details");
        const deleteBtn = Widget.createButton("", "id", "delete-todoui");

        wrapper.appendChild(category);
        [status, label, details, deleteBtn]
            .forEach(elem => {
                wrapper.appendChild(elem);
            })

        return wrapper;
    }

    static createTodoInfoBox(todoObj) {
        const infoBox = Widget.createContainer("id", "detail-info-box");
        const todoObjFormatted = {
            'Label': todoObj.label,
            'Category': todoObj.category,
            'Description': todoObj.activity,
            'Creation date': todoObj.creationDate,
            'Deadline': todoObj.deadline
        };
        for (let elem in todoObjFormatted) {
            infoBox.appendChild(
                Widget.createText(`${elem}: ${todoObjFormatted[elem]}`)
            )
        }
        return infoBox;
    }
}

