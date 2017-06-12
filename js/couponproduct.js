(function(){
  $(function(){
    var couponid = $.getUrlParam('couponid');
    Route.getcouponproduct(couponid,function(data){
      var tpl = template('tpl',data);
      $('main ul').html(tpl);
    })
  })
})();