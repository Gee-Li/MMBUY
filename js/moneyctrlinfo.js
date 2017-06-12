(function(){
  $(function(){
    var productid = $.getUrlParam('productid');
    Route.getmoneyctrlproduct(productid,function(data){
      var str = template('txt',data);
      $('main').html(str);
    })
  })
})();