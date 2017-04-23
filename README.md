# Ionic React Simplified for me #

This repository is an adaption of "kitchen sink" demo from the [React-Ionic](http://reactionic.github.io/) library.

Quick links for those interested:

**Table of Contents**

  - [Installation for Meteor](#installation-for-meteor)
    - [Prerequisites](#prerequisites)
    - [Install, build and run](#install-build-and-run)
  - [Installation with Webpack](#installation-with-webpack)
    - [Prerequisites](#prerequisites-1)
    - [Install, build and run](#install-build-and-run-1)
  - [Next Steps](#next-steps)

  ## Installation for Meteor ##

  ### Prerequisites ###

  You need to have a global installation of node and npm. The commands below should result in something like this:

      $ node -v
      v4.3.1

      $ npm -v
      3.7.5

  If you have an old version or it is not installed at all follow the instructions here: [nodejs.org](https://nodejs.org/)


  And of course Meteor needs to be installed. If you haven't installed it yet, here is
  how: [meteor.com](https://www.meteor.com/install)

  ### Install, build and run ###

  Installation is straightforward:

  * Download the zip file [here](https://github.com/reactionic/reactionic-kitchensink/archive/master.zip)
  * Unzip the file

  Then in a terminal:

      cd reactionic-kitchensink
      npm install
      cd app
      meteor run

  ## Installation with Webpack ##

  ### Prerequisites ###

  You need to have a global installation of node and npm. The commands below should result in something like this:

      $ node -v
      v4.3.1

      $ npm -v
      3.7.5

  If you have an old version or it is not installed at all follow the instructions here: [nodejs.org](https://nodejs.org/)

  You also need a global installation of webpack and webpack-dev-server, check if you have it like this:

      $ webpack 2>&1 >/dev/null | head -1
      webpack 1.12.14

      $ webpack-dev-server --help 2>&1 >/dev/null | head -1
      webpack-dev-server 1.14.1

  If needed these packages can be installed with:

      sudo npm install webpack webpack-dev-server -g


  Or without the `sudo`, depending on your setup.


  ### Install, build and run ###

  Installation is straightforward:

  * Download the zip file [here](https://github.com/reactionic/reactionic-kitchensink/archive/master.zip)
  * Unzip the file

  Then in a terminal:

      cd reactionic-kitchensink
      npm install
      npm install --save-dev webpack-dev-server@1.14.1
      webpack
      webpack-dev-server --content-base build


  ## Information ##

  Also have a look at the [guide](https://github.com/reactionic/reactionic/blob/master/GUIDE.md) for more detail.

  ## Notes ##

  ### Installation ###

  Please install using instructions and the indicated versions. Webpack and meteor will possibly break (using windows both broke for me with the most recent versions). To avoid issues, use the pointed versions, for more info [Version error](https://github.com/angular/angular-cli/issues/2234).

  Current file changes :
  * **app** > **client** > **app.scss** : commented import, added =>
  ``` sass
  @import"node_modules/reactionic/dist/scss/styles/_reactionic.scss";
  ```
  * moved the folder **fonts** from **app** > **public** to **build**


  I wish to remind that the credit of this app is not entirely mine, since this is an adaption of the original [IonicReact](http://reactionic.github.io/) Project
