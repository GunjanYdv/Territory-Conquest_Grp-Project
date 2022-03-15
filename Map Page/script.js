var Btn1 = document.querySelector('.etherion');
var Btn2 = document.querySelector('.silven');
var Btn3 = document.querySelector('.gorene');
var Btn4 = document.querySelector('.yitanada');
var Btn5 = document.querySelector('.denera');
var Btn6 = document.querySelector('.arthora');
var Btn7 = document.querySelector('.miorbmark');
var Btn8 = document.querySelector('.idzora');
var Btn9 = document.querySelector('.qaevia');
var Btn10 = document.querySelector('.wrafuthen');

var modalBg = document.querySelector('.modal-bg');
var span_tag = document.getElementById('show-time');
var submitBtn = document.querySelector('.submit-btn');
const startingMinutes = 2;
let time = startingMinutes*60;

Btn1.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
    countdown_call = setInterval(updateTime,1000);
});
Btn2.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
    countdown_call = setInterval(updateTime,1000);
});
Btn3.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
    countdown_call = setInterval(updateTime,1000);
});
Btn4.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
    countdown_call = setInterval(updateTime,1000);
});
Btn5.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
    countdown_call = setInterval(updateTime,1000);
});
Btn6.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
    countdown_call = setInterval(updateTime,1000);
});
Btn7.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
    countdown_call = setInterval(updateTime,1000);
});
Btn8.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
    countdown_call = setInterval(updateTime,1000);
});
Btn9.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
    countdown_call = setInterval(updateTime,1000);
});
Btn10.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
    countdown_call = setInterval(updateTime,1000);
});

submitBtn.addEventListener('click',function(){
    modalBg.classList.remove('bg-active');
});

function closeModal(){
    modalBg.classList.remove('bg-active');
}

function updateTime(){
    const minutes = Math.floor(time/60);
    let seconds = time%60;
    if(seconds<10){
        seconds='0'+seconds;
    }
    span_tag.innerHTML = minutes + ":" + seconds;
    if(minutes == 0 && seconds == 0){
        clearInterval(countdown_call);
        closeModal();
        time=2*60;
    }
    time--;
}