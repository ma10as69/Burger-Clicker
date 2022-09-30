burger_press = document.querySelector("#burger");
burger_num = document.querySelector("#burger_num");
hand = document.querySelector("#hand_img");
hand_num = document.querySelector("#hand_num");

console.log(burger_num);

burger = 0;
hands = 0;

function burger_click(){
    burger++;
}
function buy_hand(){
    if (burger > 50){
        hands++;
        burger -= 50;
    }
    
}

burger_press.addEventListener("click", burger_click); // når vi klikker på cookie
hand.addEventListener("click", buy_hand)

var timer = setInterval(myTimer, 10); // kjører funksjonen myTimer 1 gang i sekundet
function myTimer(){ 
    burger += hands;
    burger_num.innerHTML = burger;
    
}
