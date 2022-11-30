const h1 = document.querySelector(".hello h1"); 

function handleTitleClick() {
    //h1에 class="active"를 추가해줌으로써 글자 색상을 tomato로 바꿔줌
    //js에서 직접적으로 style을 건드리지 않게 된 것
    //단점 : h1에 기존 클래스가 존재하더라도 신경쓰지 않고 바꿔버림
    
    //변수로 지정해줌으로써 에러 발생률을 낮춤 
    const clickedClass = "clicked"

    if(h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);
