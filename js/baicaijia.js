(function () {
  $(function () {
    Route.getbaicaijiatitle(function (data) {
      var title = template('title', data);
      var $ul = $('.ul-wapper ul');
      var $lis = $ul.children('li');
      var titleid = 0;
      setProduct($('.bcproducts-list ul'), titleid);
      $ul.html(title);
      $ul.find('a').on('click', function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
      })
      var lisWidth = 50;
      $ul.children('li').each(function (index, t) {
        lisWidth += $ul.children('li').innerWidth();
      })
      $ul.width(lisWidth);

      var myScroll = new IScroll('#wrapper', {
        scrollX: true,
        scrollY: false
      });
      $ul.on('click', 'li a', function () {
        titleid = $(this).data('name');
        setProduct($('.bcproducts-list ul'), titleid);
      })
    })


    function setProduct(dom, titleid) {
      Route.getbaicaijiaproduct(titleid, function (str) {
        var pro = template('product', str);
        dom.html(pro);
      })
    }
  })
})();