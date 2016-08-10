var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;

inherits(KidsCollection, EventEmitter);
module.exports = KidsCollection;


function KidsCollection(opts)
{
  this.kids = ["Avery", "Malia", "Soleil"];
}

KidsCollection.prototype.getKidAt = function(idx)
{

}

KidsCollection.prototype.addKid = function(kid){
  this.kids.push(kid);
}

KidsCollection.prototype.getKids = function()
{
  this.emit('getKids', "Here is the msg");
  return this.kids;
}
