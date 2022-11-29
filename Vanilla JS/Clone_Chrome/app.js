const title = document.querySelector(".hello h1"); 

console.dir(title);

function handleTitleClick() {
    title.style.color = 'blue';
}

//handleTitleClick() -> () 붙이면 클릭이 되기 전에도 실행 
title.addEventListener("click", handleTitleClick);

function handleMouseEnter() {
    title.innerText = 'Mouse is here.';
}

title.addEventListener("mouseenter", handleMouseEnter);

function handleMouseLeave() {
    title.innerText = 'Mouse is gone.';
}

title.addEventListener("mouseleave", handleMouseLeave);
