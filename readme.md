### Prerequisities
In order to work with this application in development mode you should install `node` and `npm` on your machine

### Installing
```bash
npm install
```

### Development
```bash
npm start
```

This command will start local webserver under `http://localhost:8000` endpoint and will restart your browser page if something changes in `./src` folder

### Production
```bash
npm run build
```
This command will deploy minified and compressed files into `./dist` folder.

## Q&A
###### Why `es6` not `js`?
* Although using `es6` with babel transpiler increases a size of a code, generally expressing thoughts with `es6` is going to be more eloquent than just with vanilla `js`

###### Why Marionette?
* Marionette simply extends Backbone and provide a good tools for building extendable architecture

###### Why did you implement only Model-View layer in your app?
* The application is very simple therefore I made a solution to simplify things by avoiding *controllers / presenters / etc.* and directly inject View with binded Model into html. (a man could consider `app.js` to be the only one simplified controller)

###### Why gulp not grunt?
* Expressing jobs with code rather than with configuration gives more control on what we are going to do

###### Why native localStorage?
* Well, there is localForage / Backbone.localStorage / stash / etc., nevertheless for this application Native localStorage is good enough. Simply no extra code. (Except polyfill for IE, as you might guess)

###### Why do you use promises for loading tasks from localStorage?
* Although loading data from localStorage is synchronous operation, in future we might want to switch from localStorage to server / indexedDb / etc so operation becomes asynchronous. By using promises we choose a right approach for building web apps.