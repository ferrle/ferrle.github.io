// Cache selectors
  (function($,window) { 
    var lastId,
    topMenu = $(".navbar .links"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.on('click',function(e){
        e.stopPropagation;
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('body').stop().animate({ 
        scrollTop: offsetTop
      }, 700);
      e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
      // Get container scroll position
      var fromTop = $(this).scrollTop()+topMenuHeight;

      // Get id of current scroll item
      var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
          return this;
      });
      // Get the id of the current element
      cur = cur[cur.length-1];
      var id = cur && cur.length ? cur[0].id : "";

      if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems.parent()
                 .removeClass("current-menu-item")
                 .end()
                 .filter("[href=#"+id+"]")
                 .parent()
                 .addClass("current-menu-item");
       }
    });
  })(jQuery, window);