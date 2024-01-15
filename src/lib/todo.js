export class Todo {
    constructor(label, activity, deadline=null) {
        this.label = label;
        this.activity = activity;
        this.deadline = deadline;
        this.creationDate = new Date();
    }              
}

