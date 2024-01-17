export class Storage {
    static  todoCounter = 0;
    static todoObjstorage = {};

    static getObjStorage() {
        return Storage.todoObjstorage;
    }

    static addToStorage(value, uiValue) {
        const id = window.crypto.getRandomValues(new Uint32Array(10))
                        .reduce((uniqueID, ID) => {
                            return uniqueID + ID.toString(36)
                        }, "");
        Storage.todoObjstorage[id] = value;
        Storage.todoCounter++;
    }
}

