// https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement
// 다양한 이벤트 속성들 확인할 수 있는 곳 


const title = document.querySelector(".hello h1"); 

console.dir(title);

function handleTitleClick() {
    title.style.color = 'blue';
}

function handleMouseEnter() {
    title.innerText = 'Mouse is here.';
}

function handleMouseLeave() {
    title.innerText = 'Mouse is gone.';
}

//handleTitleClick() -> () 붙이면 클릭이 되기 전에도 실행 
//title.addEventListener("click", handleTitleClick);
title.onclick = handleTitleClick;

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);



function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("All Good");
}

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);