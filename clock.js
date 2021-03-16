
const clock=document.querySelector(".status-bar");
const clock_text=clock.querySelector(".status-bar__clock");

function getTime(){
    const CurrentTime=new Date();
    const hours=CurrentTime.getHours();
    const minutes=CurrentTime.getMinutes();
    clock_text.innerHTML=`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}


function init(){
    getTime();
    setInterval(getTime,1000);
}

init();