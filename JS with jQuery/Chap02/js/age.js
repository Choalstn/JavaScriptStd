function calc() {
    const currentYear = 2022;
    const birthYear = prompt("출생연도를 입력하시오", "YYYY");
    const age = currentYear - birthYear + 1;
    document.querySelector(".show").innerHTML = "당신의 나이는" + age + "세 입니다."
}