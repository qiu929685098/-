// //⚪列表页的JS效果⚪
// // -------------------⭐头部显示/隐藏app下载-----------------------
! function() {
    $.ajax({
            url: 'http://192.168.13.5/project/youpin/php/listdata.php',
            dataType: 'json' //设置json格式的对象。
        })
        .done((data) => {
            let $renderdata = data; //定义数据
            //⚪渲染商品列表
            const $list = $('.sol ul');
            let $listhtml = ''; //拼接字符串
            $.each($renderdata, function(index, value) {
                $listhtml += `
                <li>
                    <div>
                        <a href="detail.html?sid=${value.sid}">
                        <img class="lazy" data-original="${value.url}" width="298" height="298"/>
                        <p class="title">${value.title}</p>
                        <div class="pri">
                            <span class="price">￥${value.price}</span>
                            <span class="prititle">
                                评论
                                <i>${value.sailnumber}</i>
                                条
                            </span>  
                        </div>
                        </div>  
                        </a>
                    </div>
                </li>
                `;
            });
            console.log($listhtml);
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