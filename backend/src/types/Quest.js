import { v4 as uuid } from 'uuid';

export class Quest {
    /**
     * Creates a new quest object
     * 
     * @param {*} args A object containing quest properties
     */
    constructor(args) {
        this.id = uuid();
        this.name = args.name || 'Stand';
        this.description = args.description || 'The Hero stands still and does nothing';
        this.heroId = req.param.id || 'No Hero';
    }

    /**
     * Updates the quest class with new update values
     * 
     * @param {Partial<Quest>} args The partial quest object
     */
    updateQuest(args) {
        if (args.name) {
            this.name = args.name;
        }
        if (args.description) {
            this.description = args.description;
        }
        if (args.heroId) {
            this.heroId = args.heroId;
        }
    }
    
}