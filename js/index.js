(function () {
  $(function () {
    Route.getindexmenu(function (data) {
      var tplStr = template('tpl', data);
      $('nav>ul').html(tplStr);

      $(function () {
        var foo = true;
        $('nav>ul li').eq(7).nextAll().hide();
        $('nav>ul li').eq(7).find('a').attr('href','javascript:;');
        $('nav>ul li').eq(7).on('click', function () {
          if (foo) {
            $(this).nextAll().hide(300);
            foo = false;
          } else {
            $(this).nextAll().show(300);
            foo = true;
          }
        });
      })
    })

  })
  $(function () {
    Route.getmoneyctrl(function (data) {
      var tplStr = template("moneyctrl", data);
      $('main>.product').html(tplStr);
    })
  });

  $(function () {
    $('.back').on('click', function () {
      $('html,body').animate({
        scrollTop: 0
      }, 600);
    })
  })
})();