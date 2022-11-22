//전역변수
var $earth = null;

//$(document).ready(function() {}) jQuery 3.0 부터는 ready() 사용하지 않고 $(function() {}) 사용 
$(function () {
  initialize();
  event_earth();
});

//전역변수 초기화 코드
function initialize() {
  //지구본 찾기
  $earth = $("#earth");
}

function event_earth() {
  //버튼에 이벤트 등록
  $("#btnStart").click(function () {
    //지구본 위치 값 구하기
    var x = parseInt($("#txTx").val());
    var y = parseInt($("#txTy").val());
    move(x, y);
  });
}

//지구본 이동 기능 함수
function move(x, y) {
  if (x >= 0 && x <= 500 && y >= 0 && y <= 300) {
    $earth.css({
      left: x,
      top: y,
    });
  } else {
    alert("입력된 값이 범위를 벗어났습니다.");
  }
}
