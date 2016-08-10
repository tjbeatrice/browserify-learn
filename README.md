
# Learning Browserify

## Web Server
This project is just running the simple Mac python web server from the built files directory:

`$ python -m SimpleHTTPServer 8000`

## Build
Browserify compiles src js into bundle.js deployed to the same built files directory

`$ browserify src/main.js -o dist/bundle.js`

### Minification
Minification is achieved via the _uglify-js_ module:

`$ browserify src/main.js | uglifyjs > dist/bundle.js`

### Iterative Development
Changes to src js can be monitored for automatic re-builds (with performance boost from caching) using _watchify_

`$ watchify src/main.js -o dist/bundle.js --debug --verbose`

> Command line shortcuts based on package.json scripts{}
> - npm run serve
> - npm run build
> - npm run minify


## Challenges
I attempted to successfully load external libraries so as to not compile them into a giant bundle.js, but it didnt really work.  Problem was ultimately the sub-dependencies of those external libs.  For example, I got things to kind of work with Backbone, but it was up to me to manually load underscore too.

`javascript
// browserify -r uniq -r ./src/main.js > ./dist/bundle.js
// browserify -r backbone -r jquery -r ./src/main.js:citizensmodule > ./dist/bundle.js
// browserify -x backbone -x jquery -r ./src/main.js:citizensmodule > ./dist/bundle.js
``
