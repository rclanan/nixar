// Generated by LiveScript 1.3.1
(function(){
  require('xonom').service('repo', function(){
    return {
      commands: [],
      docs: []
    };
  }).run(__dirname + "/compiled-commands/*.js").service('p', function(){
    return require('prelude-ls');
  }).run(function(repo, p){
    var lines, $;
    lines = [];
    $ = bind$(lines, 'push');
    $('# New shell commands');
    $('Joyable equivalents for existent linux commands');
    $('');
    $('npm install -g nixar');
    $('');
    $('###Commands');
    $('');
    repo.commands.forEach(function(cmd){
      $("#### " + cmd.name);
      return $(cmd.desc + "");
    });
    console.log(lines.join('\n'));
    return require('fs').writeFileSync('README.md', lines.join('\n'), 'utf8');
  });
  function bind$(obj, key, target){
    return function(){ return (target || obj)[key].apply(obj, arguments) };
  }
}).call(this);
