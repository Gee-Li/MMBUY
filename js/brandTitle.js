(function(){
  $(function(){
    Route.getbrandtitle(function(data){
      var str = template('title',data);
      var $ul = $('.content .brand-con .mbrand-list')
      $ul.html(str);
    })
  })
})();