# Initialize
In order to lunch the application you need to do two things

## Install packages

### yarn
    yarn

### npm
    npm install

## Environment
in order to add the environment variables you should copy the .env.example file

    cp .env.example .env

## Launch the API
This project contains an internal API using express, so you need to launch the api first in a separated terminal.

##  yarn
    yarn start:api

##  npm
    npm run start:api

**Note: the default port of the express server is 4000 so if you're running it on a different port, change the base apu environment variable in .env file.**

## Launch the project
## yarn
    yarn start

## npm
    npm run start

# React Project Structure
In order to have a highly scalable structure for a react project, is required to follow several principles from SOLID and GRASP so you can isolate anything based on its responsibility and modify each component of this structure based on its responsibility separated from other components

## Directory separation
At the beginning, you should separate at the highest level of responsibility, a project contains the source codes, builds, deployment, and structure configurations such as conventions.

### Server
Responsible providing an API with mock data.

### src
Responsible for source code, its content also should be categorized based on their responsibilities

#### Components

contains any component categorized in three different categories
-	Common: smart but re-usable components with their own logics, shared between different pages, and they are responsible for themselves
-	Global: dumb components without any logic, mostly UI components such as buttons, inputs, and etc.
-	Pages: contains components that are not re-usable in other components and mostly contain only the page itself

**Note: each part specific to an element should be separated into partials, so a component may include several parts and each part may have responsibility for one part of the component, so it should be broken into partials, e.g. a drop-down containing several items would have a directory structure like this:**

```
UserRolesDropDown
    - Partials
        - UserRolesList
            - Index
            - styles
        - UserRoleItem
            - Index
            - styles
        - Index
        - styles
    - Index.js
```

**In this example, UserRolesDropDown contains an index, styles, and a directory called Partials, in partials we have two directories and each one contains an index, and a styles file
The root index contains API calles and action dispatchers, it gets the data and passes to the UserRolesList, this component is responsible for iteration over the roles data and renders a UserRoleItem per each column of roles array and passes the data of one single role to UserRoleItem.**

#### Config
allows you to separate the configs such as root reducers, theme configts, and store creator

#### Constants
any constant such as messages should be stored in different directory

#### Ducks
since the flux architecture recommends you to separate the data flow from the view, so DSM (Ducks Structure Management) comes in handy, instead of coupling the redux components of a component with its visual components, you can separate the entire features based on their responsibility in another directory, separated by the type of the component, e.g., we have user and posts components, they contain several actions and reducers.

```
- UserComponent
    - Index
    - Actions
    - Reducers
    - Styles
- PostComponent
    - Index
    - Actions
    - Reducers
    - Styles
```

We can separate the component from its redux components by separating the directories

```
- Components
    - User
        - Index
        - styles
    - Posts
        - Index
        - Styles
- Ducks
    - User
        - Actions
        - Reducers
    - Posts
        - Actions
        - Reducers
```

**Also, there is another way to group the redux components based on their functionality instead of the feature, but it’s not recommended to do so, cause the logic of separation should stay the same, so if we’re separating the components based on what they are responsible for, we should do it for redux components too.**

#### Helpers
Any re-usable helper function with general purpose should be stored in this directory separated by its functionality, e.g. you want to have a function that converts English numbers to persian, also you want to have a helper function to add a suffix to a string, since they are both helpers related to string, you should have a stringHelpers file in this directory that contains both functions

#### Hooks
Responsible for containing any general hook that would be re-usable in the entire app

**Note: component specific hooks should be stored in root directory of a component itself, e.g. if we had a related hook in previous example, the hook would be added as a directory to the UserRolesDropDown directory**

#### Resources
The resources directory is responsible for storing any images, third-party scripts, and any media self-hosted on the project itself.

### Build
Responsible to contain the build version of the app directory, a webpack bundle manager is responsible to use the app directory as the entry, and its output should be the build directory.

## Technical Requirements
In order to be able to scaleup the project later, you should follow several principles and many conventions to avoid major issues later

### State manager: Redux
A state manager helps you to wrap your application in a global context and access any data in any level of the project.

You can use Redux, Mobix, or react context, since the community of the Redux is way bigger than the Mobix, and side-effect handling and middleware are tools that the context is not able to handle them, so the best option to use in a high scale project is Redux, but pay attention, you might use Redux and context together, e.g., its recommended to put the data flow of an app in Redux, but what about something that we want in the entire product, but it’s not a data? E.g., any layout related functionality that is global but it’s not entirely data with the exact type of the data we’re storing in the Redux, in these cases I highly suggest you to separate the data based on their types, if its actually a data, Redux is where to store the data, but if it’s not actually data, context is the best, so always care about the separation of the global context itself.

### Side-effect handling: Saga
Handling the side-effects such as API calls in components is not the best practice, that’s why Redux provides a solution for async functionalities without freezing the dispatcher called side-effect handling, you can have a watcher over a dispatcher that takes the action and has access to its payload, it’s useful when you want to call an API in several places, or make anything suspended for other actions

### Loading Reducers
If you have any API in your project, you should have a loading reducer that stores the current status of a specific API so you’ll be able to write hooks over the API statuses and separate the entire APIs from their resolvers in components, basically you can listen to an API in your entire application
