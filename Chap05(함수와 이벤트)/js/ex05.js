$(function () {
  init();
  initEvent();
});

var $images = null;

function init() {
  //배열로 이미지들을 받고 있음
  $images = $("#container1 img");
}

function initEvent() {
  $("#btnStart").on("click",function () {
    showImgs();
  });
}

function showImgs() {
  var length = $images.length;

  for (var i = 0; i < length; i++) {
    //eq() 이용하여 인덱스에 맞는 이미지를 저장
    var $img = $images.eq(i);

    //위치 값
    var x = 100 + (i % 3) * 200;
    var y = 100 + parseInt(i / 3) * 200;

    //이미지에 위치 설정
    $img.css({
      left: x,
      top: y,
    });
  }
}
