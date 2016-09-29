Hacker News App !
=========

Welcome to the Hacker News App app. It is built using AngularJS with Firebase as the backend.


Challenges
----------
* The current Hacker News website is rather dull. My mission is to beautify it!

Prerequisites
----------
Before you start, you will need:
* [Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Node.js and Node Package Manager (NPM)](https://nodejs.org/download/)

Setting up Firebase
-------------------
To start off, you will need to set up an account with Firebase:
* Navigate to [firebase.com](https://www.firebase.com/) and click `Sign Up`
* Create an app (named whatever you want)
* Click on your new app's URL
* Navigate to the `Login & Auth` section of your dashboard and check the `Enable Email & Password Authentication` checkbox.
* Navigate to the data tab and then copy the URL from your address bar. It should have the form of `https://<your-app-name>.firebaseio.com`.
* Open the `src/app/app.js` file and replace the `ENDPOINT_URI` constant with the URL you copied. MAKE SURE there is a trailing slash at the end of the URL.

Get the Code
-------------------
Now go ahead and download the code.
```
git clone https://github.com/dinhmq1/hacker-news-app.git
cd hacker-news-app
```

Run the App
-------------------
Next, you need to install all of your dependencies.

`npm install`

And install and run the `serve` package so you can build the app.

```
npm install -g serve
serve src/
```

Navigate to `http://localhost:3000` and view the gloriousness that is Hacker News App!

Testing
-----------
Hacker News App uses [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) for running tests.
You can start a [TDD](http://en.wikipedia.org/wiki/Test-driven_development) workflow with `gulp tdd`.

> Note: you must have `Gulp CLI` installed in order to run the tests with `gulp`. If you do not have it installed globally, run `npm install -g gulp-cli` or use the method below.

If you prefer to use the local installation of gulp managed by npm, you can start the TDD workflow with

`node ./node_modules/gulp/bin/gulp.js tdd`

For continuous integration, you can execute tests with `gulp test` or `npm test`.
