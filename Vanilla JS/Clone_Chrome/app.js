//단 하나만 가져옴
const title = document.getElementById("title");

//태그 내용 출력
console.log(title);

//속성 출력 
console.dir(title);

title.innerText = "Got You";

console.log(title.id);

//많은 element를 한 번에 가져올 때 getElementsByClassName
//array 형태
const hellos = document.getElementsByClassName("hello");

//h1 태그 모두 가져오기
//array 형태
const title2 = document.getElementsByTagName("h1");

//css 방식으로 검색 - hello 클래스의 h1 가져오기
//h1 태그가 여러개여도 가장 위에거 하나만 가져옴
const title3 = document.querySelector(".hello h1");

console.log(title3);

//array 형태
const title4 = document.querySelectorAll(".hello h1");
console.log(title4);

