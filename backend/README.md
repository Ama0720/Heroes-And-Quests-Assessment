# Backend API

Welcome to the backend API for the Heroes-Quests app!  This API is built using [NodeJS](https://nodejs.org/) and [Express](https://expressjs.com/).  Make sure you have downloaded everything required in the [README](../README.md) at the root of this repository before starting.

## Table of Contents

- [Backend API](#backend-api)
  - [Table of Contents](#table-of-contents)
  - [Running the API](#running-the-api)
  - [Tasks](#tasks)
    - [Criteria](#criteria)
    - [Task 1 - Getting Quests for a Hero](#task-1---getting-quests-for-a-hero)
    - [Task 2 - Creating a Quest](#task-2---creating-a-quest)
    - [Task 3 - Updating a Quest](#task-3---updating-a-quest)
    - [Task 4 - Deleting a Quest](#task-4---deleting-a-quest)
  - [Existing Routes](#existing-routes)
    - [Get All Heroes](#get-all-heroes)
    - [Get Hero by ID](#get-hero-by-id)
    - [Create Hero](#create-hero)
    - [Update Hero](#update-hero)
    - [Delete Hero](#delete-hero)

## Running the API

To run the API, run the following commands in your terminal/console from the 'backend' folder:

```
npm install
```

This will install any dependencies (such as [Express](https://expressjs.com/)) that are needed to run the API.  Then go back to your terminal/console in the 'backend' folder and run the following command:

```
npm start
```

This will start the development API on http://localhost:3000.  If you have another process running on port 3000 on your machine, turn it off and retype the command.

You'll know the API is working if you see the message "Welcome to the Backend API!" when going to http://localhost:3000 in your browser.

To run tests run the following command:

```
npm test
```

## Tasks

The backend tasks will have you create the Quests module for this application.  The Heroes module has already been provided, you can see those routes at [Existing Routes](#existing-routes).  Where you should define your quest routes are located at [this router](src/modules/quest-module/router.js), this router is already hooked up in [app.js](src/app.js).  Feel free to use the Heroes module as a example to get the hang of express but we want to see how you code and how you would organize/make things more efficient.

See the root level [README](../README.md) for the database schema.

### Criteria

You will be assessed on how clean and documented your code is for the tasks you decide to attempt.  We have installed [Jest](https://jestjs.io/), a javascript testing framework, and [Supertest](https://www.npmjs.com/package/supertest), a express router jest tool, so you can write tests for your routes if you so choose.  An example test file using these can be found [here](src/modules/hero-module/Heroes.spec.ts).

Remember, it's ok if you don't complete everything associated with each task, we want to see an attempt so we can see how you code.

### Task 1 - Getting Quests for a Hero

GET http://localhost:3000/heroes/:id/quests

---

Route ID refers to the Hero's ID

| HTTP Status Code | Response Body |
| --- | --- |
| 200 | An array of Quests belonging to a Hero |
| 404 | Hero was not found for given ID |

### Task 2 - Creating a Quest

POST http://localhost:3000/heroes/:id/quests

---

Body (in JSON format)

```
{
    "name": "Some Quest",
    "description": "Some description"
}
```

---

Route ID refers to the Hero's ID

| HTTP Status Code | Response Body |
| --- | --- |
| 201 | Quest was added to the database |
| 404 | Hero was not found for given ID |

### Task 3 - Updating a Quest

PATCH http://localhost:3000/heroes/:heroId/quests/:questId

---

Body (in JSON format) - Partial Quest Object

```
{
    "description": "Some description"
}
```

---

Route heroId refers to the Hero's ID, questId refers to the Quest's ID

| HTTP Status Code | Response Body |
| --- | --- |
| 204 | Quest was updated in the database |
| 400 | Route heroId does not match the Quest's heroId in database |
| 404 | Hero or Quest was not found for given IDs |

### Task 4 - Deleting a Quest

DELETE http://localhost:3000/heroes/:heroId/quests/:questId

---

Body (in JSON format) - Partial Quest Object

```
{
    "description": "Some description"
}
```

---

Route heroId refers to the Hero's ID, questId refers to the Quest's ID

| HTTP Status Code | Response Body |
| --- | --- |
| 204 | Quest was deleted in the database |
| 400 | Route heroId does not match the Quest's heroId in database |
| 404 | Hero or Quest was not found for given IDs |

## Existing Routes

Below are the following routes we have already made and provided for you, including what is returned and what statuses are returned.

See the root level [README](../README.md) for the database schema.

### Get All Heroes

GET http://localhost:3000/heroes

---

| HTTP Status Code | Response Body |
| --- | --- |
| 200 | An array of Heroes |

### Get Hero by ID

GET http://localhost:3000/heroes/:id

---

| HTTP Status Code | Response Body |
| --- | --- |
| 200 | A single Hero |
| 404 | Hero was not found |

### Create Hero

POST http://localhost:3000/heroes

___

Body (in JSON format)

```
{
    "name": "John Doe",
    "class": "Mage",
    "level": 100
}
```

---

| HTTP Status Code | Response Body |
| --- | --- |
| 201 | Hero was created |

### Update Hero

PATCH http://localhost:3000/heroes/:id

---

Body (in JSON format) - Partial Hero Object

```
{
    "name": "Jane Doe"
}
```

---

| HTTP Status Code | Response Body |
| --- | --- |
| 204 | The hero was updated |
| 404 | The hero to update was not found |

### Delete Hero

DELETE http://localhost:3000/heroes/:id

---

| HTTP Status Code | Response Body |
| --- | --- |
| 204 | The hero was deleted |
| 404 | The hero to delete was not found |
