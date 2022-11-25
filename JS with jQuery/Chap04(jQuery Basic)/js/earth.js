$(document).ready(function(){
    //지구이미지 웹 요소 찾아서 저장 
     const $earth = $("#earth");

     //버튼에 이벤트 등록 (5초 동안 이동)
     $("#btnStart").click(function(){
        $earth.animate({
            left : "480px"
        }, 5000)
     })
})