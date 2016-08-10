
## Web Server
This project is just running the simple Mac python web server from the built files directory:
`$ python -m SimpleHTTPServer 8000`

Can also run using one of the package.json scripts{}
`$ npm run serve`

## Build
Browserify compiles src js into bundle.js deployed to the same built files directory
`$ browserify src/main.js -o dist/bundle.js`

There is a shortcut to this as part of package.json scripts{}
`$ npm run build`

I attempted to successfully load external libraries so as to not compile them into a giant bundle.js, but it didnt really work.  Problem was ultimately the sub-dependencies of those external libs.  For example, I got things to kind of work with Backbone, but it was up to me to manually load underscore too.

// browserify -r uniq -r ./src/main.js > ./dist/bundle.js
// browserify -r backbone -r jquery -r ./src/main.js:citizensmodule > ./dist/bundle.js
// browserify -x backbone -x jquery -r ./src/main.js:citizensmodule > ./dist/bundle.js


## Iterative Development
Changes to src js can be monitored for automatic re-builds (with performance boost from caching) as part of package.json scripts{} shortcut
`$npm run watch`
