const h1 = document.querySelector(".hello h1"); 

function handleTitleClick() {
    //className : 이전 존재하는 클래스를 신경쓰지 않고 바꿈
    //classList : 이전 존재하는 클래스에 추가&제거 가능 
    const clickedClass = "clicked"

    // if(h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }

    //toggle : 위 다섯 줄 내용의 기능을 함 
    h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);
