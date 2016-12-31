# CORE.js

Core functionality to get a project up in running that converts time, mouse, keyboard inputs into renderer frames using THREE.JS

Refactored by Bryce Summers on 12 - 30 - 2016.



# Installation

Download grunt to inject the all of the files automatically.

You can probably just use:
npm install

// Initialize npm repository.
npm init

<!-- include: "type": "css", "files": "**/*.css" -->
<!-- /include -->
<!-- include: "type": "js", "files": "**/*.js" -->
<!-- /include -->

npm install
npm install grunt --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-include-source --save-dev

npm update

# Building
1. Open up two terminals.
2. Navigate each of them to the folder containing this README.
   It should also contain the index.html file and the Gruntfile.js
   For easy navigation, try shift+click on this fold in windows then choose open command promt here.
   On Linux it is not too difficult. On a map, try dragging the file into the terminal or something of that nature.

3. Automatically compile the coffeescript code to javascript in one terminal:
 coffee -o lib/ -cw src/
4. In the other you can automatically inject all of the source code links into the html file:
 npm install
 grunt
 
 
 It may be useful to install python 3 and run python -m http.server in a command prompt to run a local server.
