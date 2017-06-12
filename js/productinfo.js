(function () {
  $(function () {
    var productid = $.getUrlParam('productid');
    var categoryid = $.getUrlParam('categoryid');
    Route.getcategorybyid(categoryid, function (data) {
      var str = template('title', data);
      $('.list-title .list').html(str);
    })
    Route.getproduct(productid,function(data){
      var str = template('proInfo',data);
      $('main.productlist').html(str);
      Route.getproductcom(productid,function(data){
        var tpl = template('comment',data);
        $('section.product-cmt').html(tpl);
      })
    })

  });


})();