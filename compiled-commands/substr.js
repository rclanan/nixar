// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo, p){
    return repo.commands.push({
      name: "substr",
      desc: "Returns the part of string specified by start and length parameters",
      input: 'line',
      output: 'line',
      enabled: true,
      doc: {
        examples: ['']
      },
      compile: function(){
        return function(mask, line){
          var pars;
          pars = mask.split(',');
          if (pars.length === 0) {
            return line.substr(pars[0]);
          } else {
            return line.substr(pars[0], pars[1]);
          }
        };
      }
    });
  };
}).call(this);
