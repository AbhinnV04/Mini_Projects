const display = document.getElementById("display");
let timer = null;
let start_time = 0;
let elapsed_time = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        start_time = Date.now() - elapsed_time;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if (isRunning) {
        clearInterval(timer);
        elapsed_time = Date.now() - start_time;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    let start_time = 0;
    let elapsed_time = 0;
    let isRunning = false;
    display.textContent = "00:00:00:00";

}

function update(){
    const current_time = Date.now();
    elapsed_time = current_time - start_time;
    
    let hours = Math.floor(elapsed_time / (1000 * 60 * 60));
    let minutes = Math.floor(elapsed_time / (1000 * 60) % 60);
    let seconds = Math.floor(elapsed_time / (1000) % 60);
    let milliseconds = Math.floor(elapsed_time % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`

}
