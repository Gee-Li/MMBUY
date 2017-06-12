(function () {
  $(function () {
    var productid = $.getUrlParam('productid');
    Route.getdiscountproduct(productid, function (data) {
      var str = template('txt', data);
      $('main').html(str);
    })
  })
})();