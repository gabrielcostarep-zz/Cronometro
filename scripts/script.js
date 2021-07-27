var hour = 0;
var minute = 0;
var seconds = 0;

var time = 1000;
var cron;

function startCount() {
    cron = setInterval(timer, time);
}

function pauseCount() {
    clearInterval(cron);
}

function stopCount() {
    clearInterval(cron);
    hour = 0;
    minute = 0;
    seconds = 0;
    document.getElementById("counter").innerText = '00:00:00';
}

function count(elemento) {
    return elemento < 10 ? '0' + elemento : elemento;
}

function timer() {
    seconds++

    if (seconds == 60) {
        seconds = 0;
        minute++
    }

    if (minute == 60) {
        minute = 00;
        hour++
    }

    var format = count(hour) + ':' + count(minute) + ':' + count(seconds);
    document.getElementById("counter").innerText = format;
}