const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");

console.dir(loginInput);

// JS는 onLoginSubmit을 호출할 때 방금 발생한 이벤트들에 대한 정보를 담고 있는 아규먼트를 포함한 채 호출
// event가 그것
function onLoginSubmit(event) {
    // form은 submit되면 자동적으로 새로고침하게 되어 있는데, 그것을 막는 역할
    // 브라우저의 기본 동작을 막음
    event.preventDefault();
    console.log(event);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);