// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo){
    return repo.commands.push({
      name: "matches",
      desc: "Create columns from line based on regexp groups",
      input: 'lines',
      output: 'lines',
      enabled: true,
      compile: function(){
        var Table;
        Table = require('easy-table');
        return function(mask, lines){
          var t;
          if ((mask != null ? mask : "") === "") {
            return "";
          }
          t = new Table;
          lines.forEach(function(product){
            product.match(mask.forEach(function(item, i){
              return t.cell(i, item);
            }));
            return t.newRow();
          });
          return callback(t.print());
        };
      }
    });
  };
}).call(this);