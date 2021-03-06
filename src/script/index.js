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
// -------------------⭐渲染图文详情-----------------------------
! function() {
    $.ajax({
            url: 'http://192.168.13.5/project/youpin/php/listdata.php',
            dataType: 'json' //设置json格式的对象。
        })
        .done((data) => {
            let $renderdata = data; //定义数据
            //⚪渲染直播间轮播图
            const $show = $('.show ul');
            let $showhtml = ''; //拼接字符串
            $.each($renderdata, function(index, value) {
                $showhtml += `
                <li>
                    <div>
                        <a href="detail.html?sid=${value.sid}">
                        <img src="${value.url}"/>
                        <p class="title">${value.title}</p><span class="price">￥${value.price}</span>
                        </a>
                    </div>
                </li>
                `;
            });
            $show.html($showhtml);


            //⚪渲染今日必抢左边商品
            const $bg = $('.bg ul');
            let $bghtml = ''; //拼接字符串
            $.each($renderdata, function(index, value) {
                $bghtml += `
                <li>
                    <a href="detail.html?sid=${value.sid}">
                    <img src="${value.url}"/>
                    <p class="title">${value.title}</p>
                    <p>
                        <span class="price">￥${value.price}</span>
                        <s>￥${+value.price + 200}</s>
                    </p>
                    </a>
                </li>
            `;
            });
            $bg.html($bghtml);


            //⚪渲染今日必抢右边商品
            const $rhtml = $('.right ul');
            let $righthtml = ''; //拼接字符串
            $.each($renderdata, function(index, value) {
                $righthtml += `
                 <li>
                     <a href="detail.html?sid=${value.sid}">
                        <img src="${value.url}"/>
                        <p class="title">${value.title}</p>
                        <p>
                            <span class="price">￥${value.price}</span>
                            <s>￥${+value.price + 200}</s>
                        </p>
                     </a>
                 </li>
             `;
            });
            $rhtml.html($righthtml);


            //⚪渲染商品列表
            const $list = $('.salelist ul');
            let $listhtml = ''; //拼接字符串
            $.each($renderdata, function(index, value) {
                $listhtml += `
                <li>
                    <div>
                        <a href="detail.html?sid=${value.sid}">
                        <img class="lazy" data-original="${value.url}" width="298" height="298"/>
                        <p class="title">${value.title}</p>
                        <p class="small_title">${value.title}</p>
                        <div class="pri">
                            <span class="price">￥${value.price}</span>
                            <span class="prititle">
                                <i>${value.sailnumber}人</i>
                                已购买
                            </span>  
                        </div>  
                        </a>
                    </div>
                </li>
                `;
            });
            $list.html($listhtml);


            //⚪懒加载效果
            $("img.lazy").lazyload({
                threshold: 200, //图片距离200的时候加载
                effect: "fadeIn" //图片显示方式，淡入淡出
            });
            //⚪打印数据库的数据
            console.log($renderdata);
        });
}();