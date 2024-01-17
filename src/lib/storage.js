export class Storage {
    static  todoCounter = 0;
    static todoObjstorage = {};

    static getObjStorage() {
        return Storage.todoObjstorage;
    }

    static addToStorage(value) {
        const id = Storage.generateUniqueStorageId();
        value.setID(id);
        Storage.todoObjstorage[id] = value;
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
}

