(function(){
  Route.getinlanddiscount(function(data){
    var str = template('tpl',data);
    $('main .info').html(str);
  })
})();