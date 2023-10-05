class countdown{
    constructor(){
        this.startTime = 0;
        this.setTime;
    }
    start(){
        this.setTime = setInterval(()=>{
            this.startTime++;
            document.querySelector("h1").innerText = this.startTime;
        },1000)
    }
    stop(){
        clearInterval(this.setTime)
        this.setTime = null;
    }
    startStop=()=>{
        if(!this.setTime){
            this.start()
            document.querySelector("#start").innerText = "Stop"
        }else{
            this.stop()
            document.querySelector("#start").innerText = "Start"
        }
    }
    increment=()=>{
        this.stop()
        this.startTime++
        document.querySelector("h1").innerText = this.startTime;
    }
    decrement=()=>{
        this.stop()
        this.startTime--
        document.querySelector("h1").innerText = this.startTime;
    }
    reset=()=>{
        this.stop()
        this.startTime = 0;
        document.querySelector("h1").innerText = 0;
        document.querySelector("#start").innerText = "Start"
    }
}
let counter = new countdown()
document.querySelector("#start").addEventListener("click",counter.startStop)
document.querySelector("#reset").addEventListener("click",counter.reset)
document.querySelector("#increment").addEventListener("click",counter.increment)
document.querySelector("#decrement").addEventListener("click",counter.decrement)
