export class Storage {
    static getObjStorage() {
        return JSON.parse(localStorage.getItem('todoObjStorage')) || {};
    }

    static addToStorage(value) {
        const id = Storage.generateUniqueStorageId();
        value.setID(id);
        let todoObjStorage = Storage.getObjStorage();
        if (todoObjStorage.hasOwnProperty(value.category)) {
            todoObjStorage[value.category].push(value);
        } else {
            todoObjStorage[value.category] = [];
            todoObjStorage[value.category].push(value);
        }
        localStorage.setItem('todoObjStorage', JSON.stringify(todoObjStorage));
    }

    static generateStorageId(iterableNum=2) {
        return window.crypto.getRandomValues(new Uint32Array(iterableNum))
            .reduce((uniqueID, ID) => {
                return uniqueID + ID.toString(36)
        }, "");
    }

    static generateUniqueStorageId() {
        let iterableNum = 2;
        let id = Storage.generateStorageId(iterableNum);
        let attempt = 1;
        let todoObjStorage = Storage.getObjStorage();
        while (todoObjStorage.hasOwnProperty(id)) {
            id = Storage.generateStorageId();
            if (attempt % 10 == 0) {
                iterableNum++;
                attempt = 1;
            }
            attempt++;
        }
        return id;
    }

    static removeTodoElem(category, id) {
        let todoObjStorage = Storage.getObjStorage();
        const index = Storage.getElemByCatId(category, id);
        if (index == -1)
            return;
        todoObjStorage[category].splice(index, 1);
        if (todoObjStorage[category].length < 1) {
            delete  todoObjStorage[category];
        }
        localStorage.setItem('todoObjStorage', JSON.stringify(todoObjStorage));
    }

    static getElemByCatId(category, id) {
        let todoObjStorage = Storage.getObjStorage();
        if (todoObjStorage.hasOwnProperty(category)) {
            for (let i = 0; i < todoObjStorage[category].length; i++) {
                const elem = todoObjStorage[category][i];
                if (elem['id'] === id) {
                    return i;
                }
            }
        }
        return -1;
    }

    static getElemByCategory(category) {
        let todoObjStorage = Storage.getObjStorage();
        if (todoObjStorage.hasOwnProperty(category)) {
            return todoObjStorage[category];            
        }
        return null;
    }

    static searchElement(searchStr) {
        const searchedResult = []
        const re = new RegExp(searchStr, 'i');
        let todoObjStorage = Storage.getObjStorage();
        for (let category in todoObjStorage) {
            const currentCategory = Storage.getElemByCategory(category);
            if (currentCategory === null) return;
            for (let elem of currentCategory) {
                if (re.test(elem.label) || re.test(elem.activity) || re.test(elem.category))
                    searchedResult.push(elem);
            }
        }
        return searchedResult;
    }
}
