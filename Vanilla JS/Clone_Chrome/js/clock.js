const clock = document.querySelector("#clock");

clock.innerText = "lalala"; 

function getClock() {
    const date = new Date();
    
    //const hours = date.getHours().padStart(2, "0");
    //불가능한 이유 : padStart는 String에 적용됨

    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = (`${hours} : ${min} : ${sec}`)

}

//getClock 함수를 호출해서 web이 load 되자마자 시간이 뜰 수 있도록 함
getClock();
setInterval(getClock, 1000)

//interval은 매번 일어나야 하는 것을 의미 
//setInterval(실행할 함수, 간격)

//setTimeout(함수, 간격)
//setInterval은 반복해서 나타내지만, setTimeout은 일정 시간 후에 한 번 실행

//padStart(maxLength, fillString)
//"hello".padStart(, "~") 
//결과 값 : ~~~~~~~~~~~~~~~hello
//즉, 값을 채워주는 역할 
