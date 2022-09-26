buger_EL = document.querySelector("#burger");
burger_num_EL = document.querySelector("#burgers_num");
hand_EL = document.querySelector("#hand_img");
hand_num_EL = document.querySelector("#hand_num");

console.log(burger_num_EL);

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

burger_EL.addEventListener("click", burger_click); // når vi klikker på cookie
hand_EL.addEventListener("click", buy_hand)

var timer = setInterval(myTimer, 10); // kjører funksjonen myTimer 1 gang i sekundet
function myTimer(){ 
    burger += hands;
    burger_num_EL.innerHTML = burger;
    
}