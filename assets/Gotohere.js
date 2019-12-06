       function goTo促銷商品() { $("#目標")[0].scrollIntoView(); }      
       function goTo熱銷排行() { $("#目標")[0].scrollIntoView(); }
       function goTo鋼筆() { $("#自我介紹")[0].scrollIntoView(); }
       function goTo鋼珠筆() { $("#社團活動")[0].scrollIntoView(); }
       function goTo原子筆() { $("#目標")[0].scrollIntoView(); }
       function goTo毛筆() { $("#工作經驗")[0].scrollIntoView(); }
       function goTo墨水() { $("#興趣")[0].scrollIntoView(); }
       function goTo客製化() { $("#目標")[0].scrollIntoView(); }
  
       $(function () {
       var $win = $(window);
       var $backToTop = $('.js-back-to-top');
        // 當用戶滾動到離頂部100像素時，展示回到頂部按鈕
       $win.scroll(function () {
       if ($win.scrollTop() > 100) {
       $backToTop.show();
       } 
       else {
       $backToTop.hide();
       }
       });
        // 當用戶點擊按鈕時，通過動畫效果返回頭部
       $backToTop.click(function () {
       $('html, body').animate({scrollTop: 0}, 200);
       });
       });