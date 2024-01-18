export class Storage {
    static  todoCounter = 0;
    static todoObjstorage = {};
    static todoTrashStorage = {};

    static getObjStorage() {
        return Storage.todoObjstorage;
    }

    static addToStorage(value) {
        const id = Storage.generateUniqueStorageId();
        value.setID(id);
        if (Storage.todoObjstorage.hasOwnProperty(value.category)) {
            Storage.todoObjstorage[value.category].push(value);
        } else {
            Storage.todoObjstorage[value.category] = [];
            Storage.todoObjstorage[value.category].push(value);
        }
        Storage.todoCounter++;
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
        while (Storage.todoObjstorage.hasOwnProperty(id)) {
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
        const index = Storage.getElemBy(category, id);
        if (index == -1)
            return;
        Storage.todoObjstorage[category].splice(index, 1);
        if (Storage.todoObjstorage[category].length < 1) {
            delete  Storage.todoObjstorage[category];
        }
        
                
    }

    static getElemBy(category, id) {
        if (Storage.todoObjstorage.hasOwnProperty(category)) {
            for (let i = 0; i < Storage.todoObjstorage[category].length; i++) {
                const elem = Storage.todoObjstorage[category][i];
                if (elem['id'] === id) {
                    return i;
                }
            }
        }
        return -1;
    }
}

