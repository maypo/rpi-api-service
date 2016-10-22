var commonmark = require('commonmark');
var fs = require('fs');

var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();

module.exports.getReadme = function(cb){
  fs.readFile('./README.md', {encoding: 'utf-8'}, function(err, data){
    if (!err){
      var parsed = reader.parse(data);
      var result = writer.render(parsed);
      cb(result);
    }else{
        throw new Error(err);
    }
  });
}
