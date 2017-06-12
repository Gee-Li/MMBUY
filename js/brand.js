(function () {
  $(function () {
    var brandtitleid = $.getUrlParam('brandtitleid');
    var pagesize = 4;
    var productid;
    Route.getbrand(brandtitleid, function (data) {
      var brand = template('brand', data);
      $('.mbody .brandall').html(brand);
    })
    Route.getbrandproductlist(brandtitleid, pagesize, function (data) {
      var product = template('product', data);
      $('.product-topsell').html(product);
      productid = $('.mpro-list ul li').first().data('id');
      Route.getproductcom(productid,function(str){
        var com = template('comment',str);
        $('.product-newcomment').html(com);
      })
    })
    // Route.getproductcom(productid )
  })
})();