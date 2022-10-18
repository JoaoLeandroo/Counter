let start = document.querySelector(".bnt-start");
let paused = document.querySelector(".bnt-paused");
let stop = document.querySelector(".bnt-stop");
let time = document.querySelector(".time");

let segundos=0;
let minutos=0;
let hrs=0;
let intervalo;


function zero(e) {
    if(e < 10){
        return('0' + e)
    }else{
        return e
    }
}


start.onclick = function() {
    tempo()
    intervalo = setInterval(tempo, 1000);
    start.setAttribute("disabled", '');
    start.style.cursor = 'no-drop';
    console.log(intervalo);
}

paused.onclick = function() {
    clearInterval(intervalo);
    start.removeAttribute('disabled');
    start.style.cursor = 'pointer';
}

stop.onclick = function() {
    clearInterval(intervalo);
    segundos=0;
    minutos=0;
    hrs=0;
    start.removeAttribute('disabled');
    start.style.cursor = 'pointer';
    time.innerHTML = `00:00:00`
    console.log(intervalo)
}


function tempo() {
    segundos++
    if(segundos >= 60){
        segundos=0
        minutos++
    }else if(minutos >= 60){
        segundos=0
        minutos=0
        hrs++
    }

    time.innerHTML = `${zero(hrs)}:${zero(minutos)}:${zero(segundos)}`
}