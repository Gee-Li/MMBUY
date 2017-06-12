  //翻页
  function Flip(dom, pageCount) {
    var str = '';
    str += '<div class="clearfix">';
    str += '<span class="w33">' + '<a href="productlist.html?categoryid=' + categoryid + '&category=' + $('#category').html() + '&pageid=' + (pageid - 1) + '">上一页</a></span>';
    str += '<span class="w33"><select id="selectPage" name="select"  selected">';
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
  //截取url
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

  //获取url中的值
  (function ($) {
  $.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" +
      name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
})(jQuery);