(function () {
  $(function () {
    var categoryid = $.getUrlParam('categoryid');
    var pageid = $.getUrlParam('pageid');
    Route.getmoneyctrl(pageid,function(data){
      var str = template('cont',data);
      $('main').html(str);
      var pageCount = Math.ceil(data.totalCount/data.pagesize);
      Flip($('.page'),pageCount);
    })


    function Flip(dom, pageCount) {
      var str = '';
      str += '<div class="clearfix page">';
      str += '<span class="w33">' + '<a href="moneyctrl.html?&pageid=' + (pageid - 1) + '">上一页</a></span>';
      str += '<span class="w33"><select id="selectPage" name="select"  selected >';
      for (var i = 0; i < pageCount; i++) {
        if (pageid == i + 1) {
          str += '<option value="' + Number(i + 1) + '" selected>' + Number(i + 1) + '/' + Number(pageCount) + '</option>';
        } else {
          str += '<option value="' + Number(i + 1) + '">' + Number(i + 1) + '/' + Number(pageCount) + '</option>';
        }
      }
      str += '</select></span>'
      str += '<span class="w33"><a href="moneyctrl.html?&pageid=' + (Number(pageid) + 1) + '" >下一页</a></span>'
      str += '</div>'
      dom.html(str);
      $('#selectPage').on('change', function (e) {
        window.location.href = 'moneyctrl.html?&pageid=' + $(this).val();
        $(this).attr('selected', "selected");
      })

    }

  })

})();