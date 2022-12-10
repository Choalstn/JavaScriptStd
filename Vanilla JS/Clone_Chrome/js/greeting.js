const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

// JS는 onLoginSubmit을 호출할 때 방금 발생한 이벤트들에 대한 정보를 담고 있는 아규먼트를 포함한 채 호출
// event가 그것
function onLoginSubmit(event) {
    // form은 submit되면 자동적으로 새로고침하게 되어 있는데, 그것을 막는 역할
    // 브라우저의 기본 동작을 막음
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;

    //localStorage에 username이라는 키 값으로 userName 변수 값 저장
    localStorage.setItem(USERNAME_KEY, userName);
    // greeting.innerText = "Hello " + userName;
    paintGreetings(); 
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


//저장된 username 정보가 없는경우와 있는 경우
if(savedUsername == null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}