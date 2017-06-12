(function(){
  $(function(){
    Route.getsitenav(function(data){
      var str = template('nav',data);
      $('main').html(str);
    })
  })
})();