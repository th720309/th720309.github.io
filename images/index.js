/**
 * Created by tianhao on 17-1-25.
 */

$(document).ready(function() {
    function camera(){
        var bodyBgs = [];    //创建一个数组变量来存储背景图片的路径
        bodyBgs[0] = "http://oct3pmpde.bkt.clouddn.com/img1.jpg";
        bodyBgs[1] = "http://oct3pmpde.bkt.clouddn.com/img2.jpg";
        bodyBgs[2] = "http://oct3pmpde.bkt.clouddn.com/img3.jpg";
        bodyBgs[3] = "http://oct3pmpde.bkt.clouddn.com/img4.jpg";
        bodyBgs[4] = "http://oct3pmpde.bkt.clouddn.com/img5.jpg";
        bodyBgs[5] = "http://oct3pmpde.bkt.clouddn.com/img6.jpg";
        bodyBgs[6] = "http://oct3pmpde.bkt.clouddn.com/img7.jpg";
        bodyBgs[7] = "http://oct3pmpde.bkt.clouddn.com/img8.jpg";
        bodyBgs[8] = "http://oct3pmpde.bkt.clouddn.com/img9.jpg";
        bodyBgs[9] = "http://oct3pmpde.bkt.clouddn.com/img10.jpg";
        var randomBgIndex = Math.round( Math.random() * 9 );
        $(".logo-svg").animate({width:400},"slow");
        $(".logo-svg").css("background","url("+bodyBgs[randomBgIndex]+") center no-repeat");
        $(".logo-svg").css("background-size","100%");
    }
    var n=$(".info-avatar");
    n.on("click",camera);
});
function logo(){
    $(".logo-svg").css("background","url(http://oct3pmpde.bkt.clouddn.com/weixin.png) center no-repeat");
    $(".logo-svg").css("background-size","50%");
}
