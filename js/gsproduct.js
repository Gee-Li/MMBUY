(function () {
  $(function () {
    var shopid = 0;
    var areaid = 0;
    var shopname;
    var areaname;
    getshop($('#shop ul'));
    getarea($('#area ul'));
    content($('.gs-product-list>.container'));

    $('.gs-filter ul>li:first-child').on('click', function () {
      $('#shop').toggleClass('hide');
    })
    $('.gs-filter ul>li:nth-child(2)').on('click', function () {
      $('#area').toggleClass('hide');
    })

    function getshop(dom) {
      Route.getgsshop(function (data) {
        var str = template('shoptxt', data);
        dom.html(str);
        $('#shop ul li').on('click', 'a', function () {
          shopid = $(this).parent().data('shopid');
          shopname = $(this).parent().data('name');
          var str = '';
          str += '<a href="javascript:;">' + shopname + '<i class="up"></i></a>';
          $('.gs-filter ul>li:first-child').html(str);
          content($('.gs-product-list>.container'));
        })
      })
    }

    function getarea(dom) {
      Route.getgsshoparea(function (data) {
        var str = template('areatxt', data);
        dom.html(str);
        $('#area ul li').on('click', 'a', function () {
          areaid = $(this).parent().data('areaid');
          areaname = $(this).parent().data('name');
          var str = '';
          str += '<a href="javascript:;">' + areaname + '<i class="up"></i></a>';
          $('.gs-filter ul>li:nth-child(2)').html(str);
          content($('.gs-product-list>.container'));
        })
      })
    }

    function content(s) {
      Route.getgsproduct(shopid, areaid, function (data) {
        var tpl = template('tpl', data);
        s.html(tpl);
      })
    }
  })
})();