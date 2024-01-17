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

    static createList(listElements, type="ul") {
        const createAttribute = (text) => {
            return text.toLowerCase().replace(' ', '-');
        }
        const elemType = (type == "ol") ? "ol" : "ul";
        const ul = document.createElement(elemType);
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
        const navElems = Widget.createList(navItems);
        setWidgetAttribute(nav, attribute, value);
        nav.appendChild(navElems);
        return nav;
    }
}

