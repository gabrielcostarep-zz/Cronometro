var hh = 0;
var mm = 0;
var ss = 0;

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
    hh = 0;
    mm = 0;
    ss = 0;
    document.getElementById("counter").innerText = '00:00:00';
}

function timer() {
    ss++

    if (ss == 60) {
        ss = 0;
        mm++
    }

    if (mm == 60) {
        mm = 00;
        hh++
    }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById("counter").innerText = format;
}