# Frontend

Welcome to the frontend folder.  This folder uses [Angular 2+](https://angular.io/) and [NodeJS](https://nodejs.org/).  Make sure you have downloaded everything required in the [README](../README.md) at the root of this repository before starting.

**Note: There is a very big difference between AngularJS and Angular 2+.  This project was built in Angular 2+ so if you look up any docs for troubleshooting make sure its for Angular 2+.**

## Table of Contents

- [Frontend](#frontend)
  - [Table of Contents](#table-of-contents)
  - [Running the Frontend](#running-the-frontend)
  - [Tasks](#tasks)
    - [Criteria](#criteria)
    - [Task 1 - Displaying a Hero](#task-1---displaying-a-hero)
    - [Task 2 - Creating a Hero](#task-2---creating-a-hero)
    - [Task 3 - Updating a Hero](#task-3---updating-a-hero)
    - [Task 4 - Deleting a Hero](#task-4---deleting-a-hero)
  - [Existing Implementation](#existing-implementation)

## Running the Frontend

To run the frontend, you use the following Node and Angular CLI commands from your terminal/console in the 'frontend' folder:

```
npm install
```

This command will install all the Angular dependencies needed to run the frontend application.  To start the application and see your changes you make locally, run the following:

```
ng serve
```

This command will tell Angular to build the development server on http://localhost:4200.  If you have another process running on port 4200 on your machine, you must find and terminate that process first, then rerun the command to serve the Angular application.

You'll know the frontend is working if you see a UI on screen when going to http://localhost:4200 in your browser.  The UI will display a list of hero names if you add some to the backend API using [Postman](https://www.postman.com/).

Additionally, you'll want to have the backend running as all the tasks we ask you to attempt relies on the already written heroes route module.  To start the backend and see what routes are already written, refer to the [backend README](../backend/README.md).

## Tasks

The frontend tasks will have you interface with the [backend API](../backend/README.md) by implementing a frontend for the heroes route module.  The heroes route module has already been provided and you can see what routes have been defined in the backend README.  Additionally, we have provided you a sample of frontend code by displaying a list of heroes from the backend API.  Your tasks are to implement the rest of the module's functionality through the UI:

- Seeing a individual hero's profile
- Creating a new hero
- Updating an existing hero
- Deleting an old hero

See the root level [README](../README.md) for the database schema.

### Criteria

You will be assessed on how clean and documented your code is for the tasks you decide to attempt.  Everything you need to run the Angular app is provided.  It is up to you whether you want to write your own CSS or use CSS packages such as [Bulma](https://bulma.io/), [Bootstrap](https://getbootstrap.com/), or [Angular Material](https://material.angular.io/).

Remember, it's ok if you don't complete everything associated with each task, we want to see an attempt so we can see how you code.

### Task 1 - Displaying a Hero

From the list of heroes, if you click on a hero you should be [routed](https://angular.io/guide/router) to a new page that displays in more detail the hero you selected.  If the hero does not exist the user should be routed back to the hero list and be displayed an error message.

### Task 2 - Creating a Hero

A form should appear on screen that allows users to type in a name, class, and level.  When the user submits the form they should be taken to the list of heroes and be displayed all heroes, including the one they just created.

### Task 3 - Updating a Hero

A form should appear on screen that allows users to update the name, class, and level of a hero.  When a user submits the form they should be taken to the list of heroes and be displayed all heroes, including the one they just updated.  If the hero does not exist the user should be routed back to the hero list and be displayed an error message.

### Task 4 - Deleting a Hero

A confirmation button should appear on screen to make sure the user wants to actually delete the selected hero from the list.  If they confirm, they should be taken to the list of heroes and be displayed all heroes, excluding the one they just deleted.  If the hero does not exist the user should be routed back to the hero list and be displayed an error message.

## Existing Implementation

The only existing implementation provided is a [http service](https://angular.io/guide/http) file and a list [component](https://angular.io/guide/component-overview) file.  The service file has a single function that makes a request to the backend API to fetch the list of heroes.  The component file uses the http service file to get this information and displays the name of each hero on screen.

HTTP configuration in the app module has already been implemented.

Additionally, if you would like to incorporate routing in your app, the configuration to already do so has been setup.  You only need to add routes to the [app-routing.module.ts](src/app/app-routing.module.ts) file.
