//inicializo el contador
let countdown;
//QuerySelector del documento H1 del HTML
const timerDisplay = document.querySelector('.display__time-left');
//QuerySelector del documento P del HTML
const endTime = document.querySelector('.display__end-time')
//Pido los segundos por pantalla para enviarlos a la función por parametros.
var setTime = prompt('Elegir segundos')



function timer(seconds) {

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);


    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        //chequea si paro el contador o no.
        if (secondsLeft <= 0) {
            clearInterval(countdown);
            return; //STOP
        }

        displayTimeLeft(secondsLeft)
        displayEndTime(then);


    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds <10 ?'0':''}${remainderSeconds}`;
    //Modifica el title del navegador.
    document.title = 'Time left ' + display;
    timerDisplay.textContent = display;
}

//Muestra el tiempo restante para cuando termine de contar en horas
function displayEndTime(time) {
    const end = new Date(time);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Vuelvo a las ${hour}:${'0'+minutes}`;
}



displayEndTime(timer)
timer(setTime);