/**
 * Created by tianhao on 17-1-25.
 */

$(document).ready(function() {
    function camera(){
        var bodyBgs = [];    //创建一个数组变量来存储背景图片的路径
        bodyBgs[0] = "http://s3.tianmuyi.site/img1.jpg";
        bodyBgs[1] = "http://s3.tianmuyi.site/img2.jpg";
        bodyBgs[2] = "http://s3.tianmuyi.site/img3.jpg";
        bodyBgs[3] = "http://s3.tianmuyi.site/img4.jpg";
        bodyBgs[4] = "http://s3.tianmuyi.site/img5.jpg";
        bodyBgs[5] = "http://s3.tianmuyi.site/img6.jpg";
        bodyBgs[6] = "http://s3.tianmuyi.site/img7.jpg";
        bodyBgs[7] = "http://s3.tianmuyi.site/img8.jpg";
        bodyBgs[8] = "http://s3.tianmuyi.site/img9.jpg";
        bodyBgs[9] = "http://s3.tianmuyi.site/img10.jpg";
        var randomBgIndex = Math.round( Math.random() * 9 );
        $(".logo-svg").animate({width:400},"slow");
        $(".logo-svg").css("background","url("+bodyBgs[randomBgIndex]+") center no-repeat");
        $(".logo-svg").css("background-size","100%");
    }
    var n=$(".info-avatar");
    n.on("click",camera);
});
function logo(){
    $(".logo-svg").css("background","url(http://s3.tianmuyi.site/weixin.png) center no-repeat");
    $(".logo-svg").css("background-size","50%");
}
