(function () {
  //设置公共URL
  var Route = {
    //IP地址
    baseUrl: 'http://127.0.0.1:9090',
    //首页导航栏
    getindexmenu: getindexmenu,
    //首页列表
    getmoneyctrl: getmoneyctrl,
    //比价页面,分类列表标题
    getcategorytitle: getcategorytitle,
    //比价页面,分类列表
    getcategory: getcategory,
    //商品列表
    getcategorybyid: getcategorybyid,
    getproductlist: getproductlist,
    //商品详情页
    getproduct: getproduct,
    //商品评论
    getproductcom: getproductcom,
    //国内折扣商品详情
    getmoneyctrlproduct: getmoneyctrlproduct,
    //国内折扣商品列表
    getinlanddiscount: getinlanddiscount,
    //白菜价标题
    getbaicaijiatitle: getbaicaijiatitle,
    //白菜价商品列表
    getbaicaijiaproduct: getbaicaijiaproduct,
    //优惠券标题
    getcoupon: getcoupon,
    //优惠券列表
    getcouponproduct: getcouponproduct,
    //凑单品店铺
    getgsshop: getgsshop,
    //凑单品区域
    getgsshoparea: getgsshoparea,
    //凑单品商品列表
    getgsproduct: getgsproduct,
    //商城导航
    getsitenav: getsitenav,
    //品牌大全标题
    getbrandtitle: getbrandtitle,
    //品牌标题对应的十大品牌
    getbrand: getbrand,
    //品牌标题对应的十大品牌的销量排行榜商品列表
    getbrandproductlist: getbrandproductlist,
    getdiscountproduct: getdiscountproduct
  }

  //首页导航栏
  /*
  地址	http://mmb.ittun.com/api/getindexmenu
  作用描述	主要用来获取首页上面菜单栏数据
  传入api的参数	无
  返回数据格式	Json对象
  返回数据格式样例	{
      "result": [{
          "indexmenuId": “菜单的id”,
          "name": "菜单的名称",
          "img": "菜单的图片",
          "titlehref": "菜单的链接地址"
      }]
  }
  */
  function getindexmenu(callback) {
    var url = Route.baseUrl + '/api/getindexmenu';
    $.get(url, function (data) {
      callback && callback(data);
    }, 'json')
  }


  /*
  地址	http://mmb.ittun.com/api/getcategorytitle
  作用描述	获取分类的标题信息（大家电，手机数码...）等8个数据然后渲染到分类标题上
  传入api的参数	无
  返回数据格式	Json对象
  返回数据格式样例	{
      "result": [{
          "indexmenuId": “菜单的id”,
          "name": "菜单的名称",
          "img": "菜单的图片",
          "titlehref": "菜单的链接地址"
      }]
  }*/

  function getcategorytitle(callback) {
    var url = Route.baseUrl + '/api/getcategorytitle';
    $.get(url, function (data) {
      callback && callback(data);
    }, 'json')
  }



  /*
  地址	http://mmb.ittun.com/api/getcategory
  作用描述	根据分类的标题获取标题对应的分类列表然后渲染到页面上
  传入api的参数	titleid: 分类标题的id  ( Number类型)
  返回数据格式	Json
  返回数据格式样例	{
  	"result": [{
  		"productId": "商品id",
  		"productName": "商品名称",
  		"productPinkage": "商品价格",
  		"productFrom": "商品来源",
  		"productTime": "商品发布事件",
  		"productImgSm": "商品图片小图",
  		"productComCount": "商品评论"
  	}]
  }
  */
  function getcategory(titleid, callback) {
    var url = Route.baseUrl + '/api/getcategory';
    $.get(url, {
      titleid: titleid
    }, function (data) {
      callback && callback(data);
    }, 'json')
  }


  /*
  地址	http://mmb.ittun.com/api/getcategorybyid
  作用描述	根据分类的id获取分类的名称
  传入api的参数	categoryid: 分类的id  ( Number类型)
  返回数据格式	Json
  返回数据格式样例	{
  	"result": [{
  		"categoryId": "分类id",
  		"category": "分类名称",
  		"titleId": "分类标题id"
  	}]
  }
  */
  function getcategorybyid(categoryid, callback) {
    var url = Route.baseUrl + '/api/getcategorybyid';
    $.get(url, {
      categoryid: categoryid
    }, function (data) {
      callback && callback(data);
    }, 'json');
  }


  /*
  地址	http://mmb.ittun.com/api/getproductlist
  作用描述	根据分类id获取该分类的商品列表并渲染到页面
  传入api的参数	categoryid ： 分类id  ( Number类型)，
    pageid :  页数id   ( Number类型)
  返回数据格式	Json对象
  返回数据格式样例	{
      "pagesize": "每页大小",
      "totalCount": "总条数"
      "result": [{
          "productId": "商品id",
          "categoryId": "商品分类id",
          "productListId": "商品列表id",
          "productName": "商品名称",
          "productImg": "商品图片",
          "productPrice": "商品价格",
          "productQuote": "商品报价",
          "productCom": "商品评论数",
          "brandName": "品牌名称",
          "brandTitleId": "品牌标题id"
      }]
  }

  */
  function getproductlist(categoryid, pageid, callback) {
    var url = Route.baseUrl + '/api/getproductlist';
    $.get(url, {
      categoryid: categoryid,
      pageid: pageid
    }, function (data) {
      callback && callback(data);
    }, 'json')
  }


  /*
  地址	http://mmb.ittun.com/api/getproduct
  作用描述	根据商品id获取商品的详细信息然后渲染到页面上
  传入api的参数	productid ： 商品id  ( Number类型)
  返回数据格式	Json对象
  返回数据格式样例	 {
  	"result": [{		
  		"productId": "商品id",
  		"productName": "商品名称",
  		"productImg": "商品图片",
  		"bjShop": "商品比价购买店铺",
  		"categoryId": "分类id"
  	}]
  }
  */

  function getproduct(productid, callback) {
    var url = Route.baseUrl + '/api/getproduct';
    $.get(url, {
      productid: productid
    }, function (data) {
      callback && callback(data);
    }, 'json')
  }


  /*
  地址	http://mmb.ittun.com/api/getproductcom
  作用描述	根据商品id获取该商品的评论信息然后渲染到页面上
  传入api的参数	productid ： 商品id   ( Number类型)
  返回数据格式	Json
  返回数据格式样例	{
  	"result": [{
  		"comId": "商品评论id",
  		"comName": "商品评论人名",
  		"comTime": "商品评论时间",
  		"comFrom": "商品评论来源",
  		"comContent": "商品评论内容",
  		"productId": "商品id",
  		"categoryId": "分类id"
  	}]
  }
  */
  function getproductcom(productid, callback) {
    var url = Route.baseUrl + '/api/getproductcom';
    $.get(url, {
      productid: productid
    }, function (data) {
      callback && callback(data);
    }, 'json')
  }


  /*
  地址	http://mmb.ittun.com/api/getmoneyctrlproduct
  作用描述	根据商品id获取国内折扣商品的详细信息 并渲染到页面
  传入api的参数	productid : 商品id (Number)

  返回数据格式	Json
  返回数据格式样例	{
      "result": [{
          "productId": "商品id",
          "productName": "商品名称",
          "productPinkage": "商品价格",
          "productFrom": "商品来源",
          "productTime": "商品发布时间",
          "productTips": "商品发布小编",
          "productInfo": "商品的描述信息1",
          "productInfo1": "商品的描述信息2",
          "productImgSm": "商品的图片小图",
          "productImgLg": "商品的图片大图",
          "productCity": "商品的库存城市",
          "productInfo2": "商品的描述信息3",
          "productImg2": "商品第2张图片",
          "productImg3": "商品第3张图片",
          "productComment": "",
          "productComCount": "商品评论数量"
      }]
  } 
  */
  function getmoneyctrlproduct(productid, callback) {
    var url = Route.baseUrl + '/api/getmoneyctrlproduct';
    $.get(url, {
      productid: productid
    }, function (data) {
      callback && callback(data);
    }, 'json')
  }

  /*
  地址	http://mmb.ittun.com/api/getinlanddiscount
  作用描述	用来国内折扣商品列表数据 并渲染到页面上
  传入api的参数	无

  返回数据格式	Json
  返回数据格式样例	 {
      "result": [{
          "productId":  "商品id",
          "productName": "商品名称",
          "productPrice": "商品价格",
          "productFrom": "商品来源",
          "productTime": "商品发布时间",       
          "productImg": "商品的图片",
      }]
  }
  */
  function getinlanddiscount(callback) {
    var url = Route.baseUrl + '/api/getinlanddiscount';
    $.get(url, function (data) {
      callback && callback(data);
    }, 'json')
  }


  /*
  地址	http://mmb.ittun.com/api/getdiscountproduct
  作用描述	根据商品id获取国内折扣商品的详细信息 并渲染到页面
  传入api的参数	productid : 商品id (Number)

  返回数据格式	Json
  返回数据格式样例	{
      "result": [{
          "productId": "商品id",
          "productName": "商品名称",
          "productPinkage": "商品价格",
          "productFrom": "商品来源",
          "productTime": "商品发布时间",
          "productTips": "商品发布小编",
          "productInfo": "商品的描述信息1",
          "productInfo1": "商品的描述信息2",
          "productImgSm": "商品的图片小图",
          "productImgLg": "商品的图片大图",
          "productCity": "商品的库存城市",
          "productInfo2": "商品的描述信息3",
          "productImg2": "商品第2张图片",
          "productImg3": "商品第3张图片",
          "productComment": "",
          "productComCount": "商品评论数量"
      }]
  } 
  */
  function getdiscountproduct(productid, callback) {
    var url = Route.baseUrl + '/api/getdiscountproduct';
    $.get(url, {
      productid: productid
    }, function (data) {
      callback && callback(data);
    }, 'json')
  }


  /*
  地址	http://mmb.ittun.com/api/getbaicaijiatitle
  作用描述	主要用来获取白菜价页面的tab栏标题数据并渲染到标题
  传入api的参数	无

  返回数据格式	Json
  返回数据格式样例	 {
      "result": [{
          "titleId": "标题id",
          "title": "标题内容"
      }]
  }

  */
  function getbaicaijiatitle(callback) {
    var url = Route.baseUrl + '/api/getbaicaijiatitle';
    $.get(url, function (data) {
      callback && callback(data);
    }, 'json')
  }


  /*
  地址	http://mmb.ittun.com/api/getbaicaijiaproduct
  作用描述	根据标题id获取该标题对应的商品列表然后渲染到页面
  传入api的参数	titleid : 标题id (Number) 

  返回数据格式	Json
  返回数据格式样例	 {
  	"result": [{
  		"titleId": "标题id",
  		"productId": "商品id",
  		"productName": "商品名称",
  		"productPrice": "商品价格",
  		"productImg": "商品图片",
  		"productCoupon": "点击领取优惠券",
  		"productHref": "下单链接",
  		"productCouponRemain": "已领数量"
  	}]
  }
  */
  function getbaicaijiaproduct(titleid, callback) {
    var url = Route.baseUrl + '/api/getbaicaijiaproduct';
    $.get(url, {
      titleid: titleid
    }, function (data) {
      callback && callback(data);
    }, 'json')
  }



  /*
    地址	http://mmb.ittun.com/api/getmoneyctrl
    作用描述	根据页数用来获取省钱控的每一页的商品列表信息
    传入api的参数	pageid : 页数id   (Number) 不传默认返回第一页数据

    返回数据格式	Json
    返回数据格式样例	{
      "pagesize": "每页数据大小",
      "totalCount": "商品总条数",
      "result": [{
          "productId": "商品id",
          "productName": "商品名称",
          "productPinkage": "商品价格",
          "productFrom": "商品来源",
          "productImgSm": "商品的图片小图",
          "productComCount": "商品评论数量"
      }]
    }
  */
  function getmoneyctrl() {
    var pageid;
    var callback;
    if (arguments.length === 1) {
      pageid = 0;
      callback = arguments[0];
    } else {
      pageid = arguments[0];
      callback = arguments[1];
    }

    var url = Route.baseUrl + '/api/getmoneyctrl';
    $.get(url, {
      pageid: pageid
    }, function (data) {
      callback && callback(data);
    }, 'json')
  }

  /*
  地址	http://mmb.ittun.com/api/getcoupon
  作用描述	用来获取优惠券标题信息 并渲染到页面
  传入api的参数	无
  返回数据格式	Json
  返回数据格式样例	{
  	"result": [{
  		"couponId": "优惠券标题id",
  		"couponImg": "优惠券标题图片",
  		"couponLink": "优惠券列表链接",
  		"couponTitle": "优惠券标题名称"
  	}]
  }
  */

  function getcoupon(callback) {
    var url = Route.baseUrl + '/api/getcoupon';
    $.get(url, function (data) {
      callback && callback(data);
    }, 'json')
  }

  /*
  地址	http://mmb.ittun.com/api/getcouponproduct
  作用描述	根据优惠券标题id获取该标题对应的列表
  传入api的参数	couponid：优惠券标题id  (Number)
  返回数据格式	Json
  返回数据格式样例	{
  	"result": [{
  		"couponProductId": "优惠券商品id",
  		"couponId": "优惠券标题id",
  		"couponProductTime": "优惠券商品有效期",
  		"couponProductImg": "优惠券商品图片",
  		"couponProductName": "优惠券商品名称",
  		"couponProductPrice": "优惠券商品价格"
  	}]
  }
  */
  function getcouponproduct(couponid, callback) {
    var url = Route.baseUrl + '/api/getcouponproduct';
    $.get(url, {
      couponid: couponid
    }, function (data) {
      callback && callback(data);
    }, 'json')
  }

  /*
  地址	http://mmb.ittun.com/api/getgsshop
  作用描述	用来获取凑单品的店铺的信息 并渲染到店铺的下拉列表
  传入api的参数	无

  返回数据格式	Json
  返回数据格式样例	{
  	"result": [{
  		"shopId": "店铺id",
  		"shopName": "店铺名称"
  	}]
  } 
  */
  function getgsshop(callback) {
    var url = Route.baseUrl + '/api/getgsshop';
    $.get(url, function (data) {
      callback && callback(data);
    }, 'json')
  }

  /*
  地址	http://mmb.ittun.com/api/getgsshoparea
  作用描述	用来获取凑单品的区域的信息 并渲染到区域的下拉列表
  传入api的参数	无

  返回数据格式	Json
  返回数据格式样例	 {
  	"result": [{
  		"areaId": "区域id",
  		"areaName": "区域名称"
  	}]
  }
  */
  function getgsshoparea(callback) {
    var url = Route.baseUrl + '/api/getgsshoparea';
    $.get(url, function (data) {
      callback && callback(data);
    }, 'json')
  }


  /*
  地址	http://mmb.ittun.com/api/getgsproduct
  作用描述	根据店铺的id和区域的id获取该店铺该区域的商品列表信息
  传入api的参数	shopid : 店铺id  (Number)
   areaid : 区域id  (Number)

  返回数据格式	Json
  返回数据格式样例	{
  	"result": [{
  		"productId": "商品id",
  		"areaId": "区域id",
  		"shopId": "店铺id",
  		"productPrice": "商品价格",
  		"productImg": "商品图片",
  		"productName": "商品名称"
  	}]
  }
  */
  function getgsproduct(shopid, areaid, callback) {
    var url = Route.baseUrl + '/api/getgsproduct';
    $.get(url, {
      shopid: shopid,
      areaid: areaid
    }, function (data) {
      callback && callback(data);
    }, 'json')
  }

  /*
  地址	http://mmb.ittun.com/api/getsitenav
  作用描述	用来获取所有商城导航的列表信息 并渲染到页面上
  传入api的参数	无

  返回数据格式	Json
  返回数据格式样例	{
  		"result": [{
  			"navId": "导航id",
  			"navImg": "导航图片",
  			"navTitle": "导航名称",
  			"navHref": "导航链接	"
  		}]
  }
  */
  function getsitenav(callback) {
    var url = Route.baseUrl + '/api/getsitenav';
    $.get(url, function (data) {
      callback && callback(data);
    }, 'json')
  }

  /*
  地址	http://mmb.ittun.com/api/getbrandtitle
  作用描述	用来获取品牌大全的标题信息 并渲染到列表
  传入api的参数	无

  返回数据格式	Json
  返回数据格式样例	{
  		"result": [{
  			"brandTitleId": "品牌标题id",
  			"brandTitle": "品牌标题名称",
  			"categoryId": "分类id"
  		}]
  }
  */
  function getbrandtitle(callback) {
    var url = Route.baseUrl + '/api/getbrandtitle';
    $.get(url, function (data) {
      callback && callback(data);
    }, 'json')
  }

  /*
  地址	http://mmb.ittun.com/api/getbrand
  作用描述	根据品牌的标题id获取该品牌标题下的十大品牌列表 并渲染到十大品牌列表里面
  传入api的参数	brandtitleid：品牌标题id  (Number)

  返回数据格式	Json
  返回数据格式样例	 {
  		"result": [{
  			"brandId": "品牌id",
  			"brandTitleId": "品牌标题id",
  			"brandName": "品牌名称",
  			"brandInfo": "品牌全网销售量",
  			"categoryId": "分类id"
  		}]
  }
  */
  function getbrand(brandtitleid, callback) {
    var url = Route.baseUrl + '/api/getbrand';
    $.get(url, {
      brandtitleid: brandtitleid
    }, function (data) {
      callback && callback(data);
    }, 'json')
  }

  /*
  地址	http://mmb.ittun.com/api/getbrandproductlist
作用描述	根据品牌的标题id获取该品牌标题下的十大品牌的销量排行列表商品 并渲染到该品牌的销量排行商品列表里面
传入api的参数	brandtitleid：品牌标题id  (Number) 
pagesize ：展示的数据量 默认为4个 (Number)
返回数据格式	Json
返回数据格式样例	{
    "pagesize": "每页大小",
    "totalCount": "总条数"
    "result": [{
        "productId": "商品id",
        "categoryId": "商品分类id",
        "productListId": "商品列表id",
        "productName": "商品名称",
        "productImg": "商品图片",
        "productPrice": "商品价格",
        "productQuote": "商品报价",
        "productCom": "商品评论数",
        "brandName": "品牌名称",
        "brandTitleId": "品牌标题id",
        "brandId": "品牌id"
    }]
}
  */
  function getbrandproductlist(brandtitleid, pagesize, callback) {
    var url = Route.baseUrl + '/api/getbrandproductlist';
    $.get(url, {
      brandtitleid: brandtitleid,
      pagesize: pagesize
    }, function (data) {
      callback && callback(data);
    }, 'json')
  }


  window.Route = Route;
})();
(function ($) {
  $.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" +
      name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
})(jQuery);