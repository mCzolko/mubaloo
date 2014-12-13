# Mubaloo Front End Developer Trial Task
Bootstrap of the application is done using https://github.com/logankoester/grunt-phonegap

### Dependencies (Mac)
NodeJS (http://nodejs.org)
```sh
$ npm install -g grunt-cli
$ npm install -g ios-deploy
$ npm install -g ios-sim
```

### Installation
Clone this repository and then install node modules:
```sh
$ cd mubaloo
$ npm install
```

### Build and running application
First of all you have to install iOS platform by running command
```sh
$ grunt phonegap:build:ios
```
After successful build run the application like a boss by:
```sh
$ grunt phonegap:run:ios
```
