(function(){
  $(function(){
    Route.getcoupon(function(data){
      var str = template('txt',data);
      $('main ul').html(str);
    })
  })
})();