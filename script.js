let [sec, min, hours] = [0,0,0];
let displayTime = document.getElementById("display-time");
let timer = null;

function stopwatch (){
    sec++;
    if(sec == 60){
        min++;
        sec= 0;
        if(min == 60){
            min = 0;
            hours++
        }
    }
    let h = hours<10 ? "0" + hours:hours;
let m = min <10? "0"+ min : min ;
let s = sec <10? "0"+ sec : sec;
displayTime.innerHTML =  h + ":"+ m + ":"+ s;

}


function watchStart(){
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000);
}

function stop(){
    clearInterval(timer)
}

function restart(){
    clearInterval(timer);
    [sec, min, hours] = [0,0,0];
    displayTime.innerHTML =  "00"+ ":"+ "00" + ":"+ "00";
}