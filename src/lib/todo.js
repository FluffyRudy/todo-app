function beautifyDate(date) {
    return `${date.toLocaleTimeString()} : ${date.toLocaleDateString()}`;
}

export class Todo {
    constructor(label, activity, category, deadline=null) {
        this.label = label;
        this.category = category.trim() === "" ? "all" : category; 
        this.activity = activity;
        this.deadline = new Date(deadline).toLocaleDateString();
        this.creationDate = beautifyDate(new Date());
        this.id = null;
    }           
    
    setID(id) {
        this.id = id;
    }
}

