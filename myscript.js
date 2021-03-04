function play_se(){
var silen = new Audio ('silen.mp3');
silen.play();
navigator.vibrate([200, 100, 200,100])
}

$(function(){



//ページの読み込みが終わると実行//



//ブラウザバック禁止//
history.pushState(null, null, null)
$(window).on('popstate', function(e){
    if(!e.orininalEvent.state){
        play_se();
        history.pushState(null, null, null)
        return;
    }
});



//モーダル表示//
$('.modal').modal({dismissible: false});
$('#alert').modal('open');
$('#close').click(function(){
$('#alert').modal('close');
play_se();
});



//端末情報取得
var device = navigator.userAgent.match(/Android|iPhone|iPad/);
if (device == null){
    device = '端末';
}
$('#device').text(device);


alert(device);



//カウントダウン//
var time = 30;
setInterval(function(){
    time--;
    $('#timer').text(time)
}, 1000)

});