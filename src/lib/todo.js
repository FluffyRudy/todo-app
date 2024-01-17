export class Todo {
    constructor(label, activity, category="all", deadline=null) {
        this.label = label;
        this.activity = activity;
        this.deadline = deadline;
        this.creationDate = new Date();
        this.id = null;
    }           
    
    setID(id) {
        this.id = id;
    }
}

