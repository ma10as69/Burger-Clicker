burger_press = document.querySelector("#burger");
burger_num = document.querySelector("#burger_num");
hand = document.querySelector("#hand");
hand_num = document.querySelector("#hand_num");
worker = document.querySelector("#worker");
worker_num = document.querySelector("#worker_num");

console.log(burger_num);

burger = 0;
hands = 0;
worker = 0;
seconds_shop = 1000;
seconds_worker = 1000;
price_hand = 50;


function burger_click(){
    burger++;
}
function buy_hand(){
    if (burger >= price_hand){
        hands++;
        burger -= price_hand;
        seconds_shop -= 100;
            price_hand *= 2;
        timer_shop = setInterval(myTimer_shop, seconds_shop); // kjører funksjonen myTimer 1 gang i sekundet
    
    }
    
}
function hire_worker(){
    if (burger >= 10){
        worker++;
        burger -= 10;
        seconds_worker -= 100;
        timer_worker = setInterval(myTimer_worker, seconds_worker);
    }
    
}

burger_press.addEventListener("click", burger_click); // når vi klikker på cookie
hand.addEventListener("click", buy_hand)
hand.addEventListener("click", hire_worker)


var timer_shop = setInterval(myTimer_shop, seconds_shop); // kjører funksjonen myTimer 1 gang i sekundet
function myTimer_shop(){ 
    if (hands >= 1){
        burger_click();
    }

    hand_num.innerHTML = hands;
}

var timer_worker = setInterval(myTimer_worker, seconds_worker);
function myTimer_worker(){ 
    if (worker >= 1){
        burger_click();
    }

    hand_num.innerHTML = worker;
}


var timer_refresh = setInterval(refresh_timer, 1)
function refresh_timer(){
    burger_num.innerHTML = burger;
}