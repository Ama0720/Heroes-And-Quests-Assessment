import express from 'express';
import { QuestsDB } from '../../database/QuestsDB.js';
import { HeroesDB } from '../../database/HeroesDB.js';
import { Hero } from '../../types/Hero.js';
import { Quest } from '../../types/Quest.js';

/**
 * Returns the Quests Module express router
 * 
 * @returns {express.Router} The quests module express router
 */
export function questsRouter() {
    const router = express.Router();

    router.get('/quests', (req, res) => {
        res.send(QuestsDB.getInstance().getAllQuests());
        console.log(__filename);
    });

    // TODO: Task 1: Getting Quests for a hero
    router.get('/heroes/:id/quests', (req, res) => {
        const heroId = req.params.id;
        const hero = HeroesDB.getInstance().getHero(heroId);
        
        // Return 404 if not found, else return quests for hero object
        if (!hero) {
            res.sendStatus(404);
        } else {
            res.send(QuestsDB.getInstance().getQuests(heroId));
            res.sendStatus(200);
        }
    });

    // TODO: Task 2: Creating a Quest
    router.post('/heroes/:id/quests', (req, res) => {
        const body = req.body;
        const heroId = req.params.id;
        const hero = HeroesDB.getInstance().getHero(heroId);
        const quest = new Quest(heroId, body);

        // Return 404 if not found, else create quest for hero object
        if (!hero) {
            res.sendStatus(404);
        } else {
            QuestsDB.getInstance().createQuest(quest);
            res.sendStatus(201);
        }
    });

    // TODO: Task 3

    // TODO: Task 4

    return router;
}