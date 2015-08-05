// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo){
    return repo.commands.push({
      name: "count",
      desc: "Calculate count of lines",
      input: 'lines',
      output: 'line',
      enabled: true,
      compile: function(){
        return function(mask, lines){
          return function(it){
            return it.length;
          }(
          lines);
        };
      }
    });
  };
}).call(this);