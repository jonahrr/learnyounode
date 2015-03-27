var fs = require('fs'),
    path = require('path')

module.exports = function(dir, ext, callback){
  fs.readdir(dir, function(err,list){
    if(err) return callback(err);
    var filtered = list.filter(function(file){
      return path.extname(file) === '.' + ext;
    });
    callback(null, filtered);
  });
}
