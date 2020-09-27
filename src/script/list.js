const $list = $('.salelist ul');
$.ajax({
        url: 'http://192.168.13.44/project/youpin/php/listdata.php',
        dataType: 'json' //设置json格式的对象。
    })
    .done((data) => {
        let $renderdata = data;
        console.log($renderdata);
        let $strhtml = ''; //拼接字符串
        $.each($renderdata, function(index, value) {
            $strhtml += `
                    <li>
                        <div>
                            <a href="detail.html?sid=${value.sid}">
                            <img class="lazy" data-original="${value.url}/>
                            <p class="title">${value.title}</p>
                            <p>${value.title}</p>
                            <div class="pri">
                                <span>￥${value.price}</span>
                                <span>
                                    <i>${value.sailnumber}</i>
                                    已购买
                                </span>  
                            </div>  
                            </a>
                        </div>
                    </li>
                    `;
        });
        $list.html($strhtml);
        //懒加载效果
        $("img.lazy").lazyload({
            effect: "fadeIn" //图片显示方式
        });
    });