burger_press = document.querySelector("#burger");
burger_num = document.querySelector("#burger_num");
burger_sell = document.getElementById("#burger_sell");
hand = document.querySelector("#hand");
hand_num = document.querySelector("#hand_num");
worker = document.querySelector("#worker");
worker_num = document.querySelector("#worker_num");
money = document.querySelector("#money");
money_num = document.querySelector("#money_num");
clicks_persec = document.querySelector("#clicks_persec");




console.log(burger_num);


burger = 0;
hands = 0;
money_amount = 0;
worker_amount = 0;
seconds_shop = 1000;
seconds_worker = 1000;
price_hand = 10;
price_worker = 10;
clicks_persecond = 0;



function burger_click(){
    burger++;
}
function buy_hand(){
    if (burger >= price_hand){
        hands++;
        burger -= price_hand;
        seconds_shop -= 100;
        price_hand *= 2;
        clicks_persec;
        timer_shop = setInterval(myTimer_shop, seconds_shop); // kjører funksjonen myTimer 1 gang i sekundet
        clicks_persec.innerHTML = clicks_persecond;
    
    }
    
}
function hire_worker(){
    if (burger >= price_worker){
        worker_amount++;
        burger -= price_worker;
        seconds_worker -= 100;
        price_worker *= 2;
        timer_worker = setInterval(myTimer_worker, seconds_worker);
    }
    worker_num.innerHTML = worker_amount;
  
}


burger_press.addEventListener("click", burger_click); // når vi klikker på cookie
hand.addEventListener("click", buy_hand)
worker.addEventListener("click", hire_worker)


var timer_shop = setInterval(myTimer_shop, seconds_shop); // kjører funksjonen myTimer 1 gang i sekundet
function myTimer_shop(){ 
    if (hands >= 1){
        burger_click();
    }

    hand_num.innerHTML = hands;
}

var timer_worker = setInterval(myTimer_worker, seconds_worker);
function myTimer_worker(){ 
    if (worker_amount >= 1){
        money_amount ++;
    }  
    money_num.innerHTML = money_amount;

}


var timer_refresh = setInterval(refresh_timer, 1)
function refresh_timer(){
    burger_num.innerHTML = burger;
    
}