//⚪首页的JS效果⚪
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
    const $li = $('.nav_main ul li');
    const $fistli = $('.nav_main ul li:nth-child(1)');
    //添加事件
    // $li.on('mouseover', function() {
    //     //点击按钮变色，同时清除其他的类名

    //     $(this).addClass('newli_bg').siblings('li').removeClass('newli_bg');
    // });
    $li.hover(function() {
        $(this).removeClass('navli_bg');
        $(this).addClass('newli_bg').siblings('li').removeClass('newli_bg');
    }, function() {
        $fistli.addClass('navli_bg').siblings('li').removeClass('navli_bg');
    });
}();