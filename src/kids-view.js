var $ = require('jquery');

/*
This module illustrates one way to implement private and public elements.
*/

module.exports = KidsView;

// private
var _kids;
var _renderKids = function()
{
  var html = "<ul>";
  _kids.getKids().forEach(function(kid)
  {
    html += "<li>" + kid + "</li>"
  })
  html += "</ul>";
  $('#container').html(html);
}

function KidsView(kids)
{
  _kids = kids;
  return {
    // public
    renderKids: _renderKids
  }
};
