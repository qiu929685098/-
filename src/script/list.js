//⚪列表页的JS效果⚪
// -------------------⭐头部显示/隐藏app下载-----------------------
! function() {
    //定义常量
    const $li = $('.last_li');
    const $app = $('.app');
    //添加事件
    $li.hover(function() {
        $app.css('display', 'flex')
    }, function() {
        $app.css('display', 'none')
    });
}();
// -------------------⭐导航栏鼠标移入变色-------------------------
! function() {
    //定义常量
    const $li = $('.nav_main .mainul li');
    const $fistli = $('.nav_main .mainul li:nth-child(1)');
    //添加事件
    $li.hover(function() {
        $(this).removeClass('navli_bg');
        $(this).addClass('newli_bg').siblings('li').removeClass('newli_bg');
        //ev.stopPropagation();//阻止事件冒泡
    }, function() {
        $fistli.addClass('navli_bg').siblings('li').removeClass('navli_bg');
        $(this).removeClass('newli_bg');
    });
}();
// -------------------⭐导航栏二级菜单显示/隐藏--------------------
! function() {
    //定义常量
    const $menu = $('.menu');
    const $nav_box = $('.nav_main article');
    //添加事件
    $menu.hover(function() {
        $nav_box.css('display', 'flex');
    }, function() {
        $nav_box.css('display', 'none');
    });
}();