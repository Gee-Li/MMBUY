$(function () {
  Route.getcategorytitle(function (data) {
    var tplStr = template("mcontent", data);
    $('main>.mcontent').html(tplStr);

    $('.mcontent .content-t').on('click', function () {
      var titleId = $(this).data('titleid');
      var $titleDiv = $(this);
      $titleDiv.next().toggle();
      Route.getcategory(titleId, function (data) {
        var tplStr = template('contentList', data);
        $titleDiv.next().find('.content-list').html(tplStr);
      })
    })
  })
  

})