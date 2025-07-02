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
