var unique = require('uniq');
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log("unique:" + unique(data));

console.log('bundle.js: ' + (1082257/1024));
console.log('minified: ' + (200061/1024));
console.log('compression: ' + ((200061 / 1082257) * 100));


// ----
var KidsCollection = require('./kids-collection.js');
var KidsView = require('./kids-view.js');

myCollection = new KidsCollection();
// event listener
myCollection.on('getKids', function (msg) {
    console.log('event: ' + msg);
});

myView = new KidsView(myCollection);
myView.renderKids();
//
myCollection.addKid("Tobi");
myView.renderKids();

// testing Backbone
// ---
var Backbone = require('backbone');

var BackboneView = Backbone.View.extend({
  initialize: function(opts){
    console.log('view instantiated: ' + opts.name);
  }
})

var bView = new BackboneView({
  'name': "testes"
});

var KidModel = Backbone.Model.extend({

})


var BackboneCollection = Backbone.Collection.extend({

})

var bCollection = new BackboneCollection({
  model: KidModel
})
