export class Story {
    constructor(title, description, time, assigner, assignee, priority, category, /*dateCreated*/) {
        this.title = title;
        this.description = description;
        this.time = time;
        this.assigner = assigner;
        this.assignee = assignee;
        this.priority = priority;
        this.category = category;
        //this.dateCreated = dateCreated;
    }
}

export default Story;