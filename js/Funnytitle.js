<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://soya-1300102518.cos.ap-shenzhen-fsi.myqcloud.com/%E5%85%B6%E4%BB%96%E7%BE%8E%E5%8C%96/jg.ico");
         document.title = '警告！警告！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://soya-1300102518.cos.ap-shenzhen-fsi.myqcloud.com/%E5%85%B6%E4%BB%96%E7%BE%8E%E5%8C%96/favicon2.ico");
         document.title = 'ヾ(◍°∇°◍)欢迎回来';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });