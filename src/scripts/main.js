AOS.init();

const dateEvent = new Date("Dec 12, 2025, 19:00:00");
const timeStampEvent = dateEvent.getTime();


const countdown = setInterval(function(){
    const now = new Date();
    const timeStampNow = now.getTime();

    const timeLeft = timeStampEvent - timeStampNow;

    const daysInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minutesInMs = 1000 * 60;

    const daysUntilEvent = Math.floor(timeLeft / daysInMs);
    const hoursUntilEvent = Math.floor((timeLeft % daysInMs) / hoursInMs);
    const minutesUntilEvent = Math.floor((timeLeft % hoursInMs) / minutesInMs);
    const secondsUntilEvent = Math.floor((timeLeft % minutesInMs) / 1000);

    document.getElementById('timer').innerHTML = ` começa em ${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    if (timeLeft < 0){
        clearInterval(countdown);
        document.getElementById('timer').innerHTML = " já aconteceu!";
    }
}, 1000);