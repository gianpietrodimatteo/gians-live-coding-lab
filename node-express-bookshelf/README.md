# Readme

```bash
npm install
npm start
```

## Creating the project

```bash
npx express-generator --view=pug node-express-bookshelf
npm install
DEBUG=node-express-bookshelf:* npm start
```

Then adding specific files and exporting them. The flow is Model → Controller → Routes → Connect to App. 

## About the project

This project still contains the legacy `var` and `module.export` node syntax.
It is a headless RESTful API.
It contains a CURL based integration testing system.

## For the next project

Use modern notation with export and import.
Use Jest for testing.
Consider the flow.
No need to use the quick start, we're not using Express to serve static files.
