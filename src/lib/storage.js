export class Storage {
    static storage = {};

    static getStorage() {
        return Storage.storage;
    }

    static addToStorage(value) {
        const id = window.crypto.getRandomValues(new Uint32Array(10))
                        .reduce((uniqueID, ID) => {
                            return uniqueID + ID.toString(36)
                        }, "");
        Storage.storage[id] = value;
    }
}

