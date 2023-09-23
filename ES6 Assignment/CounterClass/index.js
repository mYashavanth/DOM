let startTime = 0;
let setTime;

class countdown{
    constructor(){}
    start(){
        setTime= setInterval(()=>{
            startTime++;
            document.querySelector("h1").innerText = startTime;
            // console.log(startTime);
        },1000)
    }
}
let counter = new countdown()
document.querySelector("#start").addEventListener("click",startStop)
document.querySelector("#reset").addEventListener("click",reset)
document.querySelector("#increment").addEventListener("click",increment)
document.querySelector("#decrement").addEventListener("click",decrement)

function stop(){
    clearInterval(setTime)
    setTime=null;
}
function startStop(){
    if(!setTime){
        counter.start()
        document.querySelector("#start").innerText = "Stop"
    }else{
        stop()
        document.querySelector("#start").innerText = "Start"
    }
}
function increment(){
    stop()
    startTime++
    document.querySelector("h1").innerText = startTime;
}
function decrement(){
    stop()
    startTime--
    document.querySelector("h1").innerText = startTime;
}
function reset(){
    stop();
    startTime = 0;
    document.querySelector("h1").innerText = 0;
    document.querySelector("#start").innerText = "Start"
}



 