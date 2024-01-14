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
}

