import { Quest } from "../types/Quest.js";

export class QuestsDB {
    static instance = undefined;
    quests = []; // Database array

    /**
     * Gets an instance of the database
     * 
     * @returns {QuestsDB} An instance of QuestsDB
     */
    static getInstance() {
        if (!this.instance) {
            this.instance = new QuestsDB();
        }
        return this.instance;
    }

    /**
     * Gets all the quests in the database
     * 
     * @returns {Quest[]} An array of quests
     */
    getAllQuests() {
        return this.quests;
    }

    /**
     * Gets all quests for a specific hero
     * 
     * @param {string} heroId 
     * @returns {Quest[]} An array of heroes
     */
    getQuests(heroId) {
        return this.quests.filter(quest => quest.heroId === heroId);
    }

    /**
     * Adds a quest to the database
     * 
     * @param {Quest} quest The quest to add to the database
     */
    createQuest(quest) {
        this.quests.push(quest);
    }

    /**
     * Updates a quest by id in the database
     * 
     * @param {string} id The id of the quest to update
     * @param {Partial<Quest>} questUpdates A partial quest object
     */
    updateQuest(id, questUpdates) {
        const quest = this.getQuest(id);
        this.deleteQuest(id);
        quest.updateQuest(questUpdates);
        this.createQuest(quest);
    }

    /**
     * Deletes a quest by id in the database
     * 
     * @param {string} id The id of the quest to delete
     */
    deleteQuest(id) {
        const index = this.quests.findIndex(quest => quest.id === id);
        if (index >= 0) {
            this.quests.splice(index, 1);
        }
    }
}