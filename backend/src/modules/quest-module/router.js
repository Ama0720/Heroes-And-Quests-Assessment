import express from 'express';
import { QuestsDB } from '../../database/QuestsDB.js';
import { HeroesDB } from '../../database/HeroesDB.js';
import { Quest } from '../../types/Quest.js';

/**
 * Returns the Quests Module express router
 * 
 * @returns {express.Router} The quests module express router
 */
export function questsRouter() {
    const router = express.Router();

    // For Testing, to return all quests available
    router.get('/quests', (req, res) => {
        res.send(QuestsDB.getInstance().getAllQuests());
    });

    // TODO: Task 1: Getting Quests for a hero
    router.get('/heroes/:id/quests', (req, res) => {
        const heroId = req.params.id;
        const hero = HeroesDB.getInstance().getHero(heroId);
        
        // Return 404 if hero is not found
        if (!hero) {
            res.sendStatus(404);
        // Else list all quests for hero object, return 200
        } else {
            res.status(200).send(QuestsDB.getInstance().getQuests(heroId));
        }
    });

    // TODO: Task 2: Creating a Quest
    router.post('/heroes/:id/quests', (req, res) => {
        const body = req.body;
        const heroId = req.params.id;
        const hero = HeroesDB.getInstance().getHero(heroId);
        const quest = new Quest(heroId, body);

        // Return 404 if hero is not found
        if (!hero) {
            res.sendStatus(404);
        // Else create quest for hero object, return 201
        } else {
            QuestsDB.getInstance().createQuest(quest);
            res.sendStatus(201);
        }
    });

    // TODO: Task 3: Updating a Quest
    router.patch('/heroes/:heroId/quests/:questId', (req, res) => {
        const heroId = req.params.heroId;
        const questId = req.params.questId;
        const quest = QuestsDB.getInstance().getQuest(questId);
        const hero = HeroesDB.getInstance().getHero(heroId);

        // Return 404 if hero object or quest object is not found
        if (!hero || !quest) {
            res.sendStatus(404);
        // Return 400 if routes heroId doest not match quest's heroId in database
        }else if (heroId !== quest.heroId){
            res.sendStatus(400);
        // Return 204 if quest was updated
        } else {
            const body = req.body;
            QuestsDB.getInstance().updateQuest(questId, body);
            res.sendStatus(204);
        }
    });


    // TODO: Task 4: Deleting a Quest
    router.patch('/heroes/:heroId/quests/:questId', (req, res) => {
        const heroId = req.params.heroId;
        const questId = req.params.questId;
        
        const quest = QuestsDB.getInstance().getQuest(questId);
        const hero = HeroesDB.getInstance().getHero(heroId);

        // Return 404 if hero object or quest object is not found
        if (!hero) {
            // res.sendStatus(404);
            res.send("Hero not Found");
        }else if (!quest){
            res.send("Quest not found");
        // Return 400 if routes heroId doest not match quest's heroId in database
        }else if (heroId !== quest.heroId){
            res.sendStatus(400);
        // Return 204 if quest was deleted
        }else {
            QuestsDB.getInstance().deleteQuest(questId);
            res.sendStatus(204);
        }
    });

    return router;
}