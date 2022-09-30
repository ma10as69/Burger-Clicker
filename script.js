burger_press = document.querySelector("#burger");
burger_num = document.querySelector("#burger_num");
hand = document.querySelector("#hand");
hand_num = document.querySelector("#hand_num");

console.log(burger_num);

burger = 0;
hands = 0;
seconds = 1000;

function burger_click(){
    burger++;
}
function buy_hand(){
    if (burger >= 50){
        hands++;
        burger -= 50;
        seconds -= 100;
        timer = setInterval(myTimer, seconds); // kjører funksjonen myTimer 1 gang i sekundet
    }
    
}

burger_press.addEventListener("click", burger_click); // når vi klikker på cookie
hand.addEventListener("click", buy_hand)


var timer = setInterval(myTimer, seconds); // kjører funksjonen myTimer 1 gang i sekundet
function myTimer(){ 
    if (hands >= 1){
        burger_click();
    }

    hand_num.innerHTML = hands;
}


var timer_refresh = setInterval(refresh_timer, 1)
function refresh_timer(){
    burger_num.innerHTML = burger;
}