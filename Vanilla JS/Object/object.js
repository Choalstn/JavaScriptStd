//player 객체
const player = {
    name : "Gom",
    points : 10,
    fat : false,
};

console.log(player);
console.log(player.name);

//player.fat의 값 변경 
player.fat = true;
console.log(player);

//기존에 age가 존재하지 않기 떄문에, age 추가 
player.age = 23;
console.log(player);

//객체에 있는 숫자 값 더하기
player.age = player.age + 10;
console.log(player);

//shop 객체안에 함수 생성
const shop = {
    name : "Clothing",
    sayHello : function (name) {
        console.log("Hello " + name + " Nice to meet you !");
    },
}

console.log(shop.name);
shop.sayHello("Jam");