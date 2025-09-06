/**
 * Created by tianhao on 17-1-25.
 */

$(document).ready(function() {
    function camera(){
        var bodyBgs = [];    //创建一个数组变量来存储背景图片的路径
        bodyBgs[0] = "images/img1.jpg";
        bodyBgs[1] = "images/img2.jpg";
        bodyBgs[2] = "images/img3.jpg";
        bodyBgs[3] = "images/img4.jpg";
        bodyBgs[4] = "images/img5.jpg";
        bodyBgs[5] = "images/img6.jpg";
        bodyBgs[6] = "images/img7.jpg";
        bodyBgs[7] = "images/img8.jpg";
        bodyBgs[8] = "images/img9.jpg";
        bodyBgs[9] = "images/img10.jpg";
        var randomBgIndex = Math.round( Math.random() * 9 );
        $(".logo-svg").animate({width:400},"slow");
        $(".logo-svg").css("background","url("+bodyBgs[randomBgIndex]+") center no-repeat");
        $(".logo-svg").css("background-size","100%");
    }
    var n=$(".info-avatar");
    n.on("click",camera);
});
function logo(){
    $(".logo-svg").css("background","url(images/weixin.png) center no-repeat");
    $(".logo-svg").css("background-size","50%");
}
