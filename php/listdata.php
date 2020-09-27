<?php
header('Access-Control-Allow-Origin:*');//跨域访问的域名，*表示所有
header('Access-Control-Allow-Method:POST,GET');//跨域支持的请求方式。
include 'conn.php';
$result = $conn->query("select * from taobaogoods");
//利用二维数组输出简单接口。
$arr = Array();
for($i=0;$i<$result->num_rows;$i++){
    $arr[$i] = $result->fetch_assoc();
};
//输出整个对象
echo json_encode($arr);