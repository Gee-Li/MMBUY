(function () {
  $(function () {
    var categoryid = $.getUrlParam('categoryid') || 0;
    var pageid = $.getUrlParam('pageid') || 1;
    Route.getcategorybyid(categoryid, function (data) {
      var str = template('title', data);
      $('.list-title .list').html(str);
      Route.getproductlist(categoryid, pageid, function (data) {
        var str = template('list', data);
        $('main').html(str);
        var pageCount = Math.ceil(data.totalCount / data.pagesize);
        Flip($('.page'), pageCount);
      })
    })

    function Flip(dom, pageCount) {
      var str = '';
      str += '<div class="clearfix page">';
      str += '<span class="w33">' + '<a href="productlist.html?categoryid=' + categoryid + '&category=' + $('#category').html() + '&pageid=' + (pageid - 1) + '">上一页</a></span>';
      str += '<span class="w33"><select id="selectPage" name="select"  selected style="border: 1px solid #bababa; font-size: 16px; padding: 8px 15px; height: 36px"">';
      for (var i = 0; i < pageCount; i++) {
        if (pageid == i + 1) {
          str += '<option value="' + Number(i + 1) + '" selected>' + Number(i + 1) + '/' + Number(pageCount) + '</option>';
        } else {
          str += '<option value="' + Number(i + 1) + '">' + Number(i + 1) + '/' + Number(pageCount) + '</option>';
        }
      }
      str += '</select></span>'
      str += '<span class="w33"><a href="productlist.html?categoryid=' + categoryid + '&category=' + $('#category').html() + '&pageid=' + (Number(pageid) + 1) + '" >下一页</a></span>'
      str += '</div>'
      dom.html(str);
      $('#selectPage').on('change', function (e) {
        window.location.href = 'productlist.html?categoryid=' + $.getUrlParam('categoryid') + '&category=' + $('#category').html() + '&pageid=' + $(this).val();
        $(this).attr('selected', "selected");
      })
    }

    function query() {
      var obj = {};
      var url = location.href.split('?');
      var jps = url[1].split('&');
      jps.forEach(function (v, i) {
        var arrjps = v.split('=');
        var key = arrjps[0];
        var value = arrjps[1];
        obj[key] = value;
      })
      return obj;
    }
  })
})();