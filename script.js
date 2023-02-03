console.log(document.getElementsByClassName("countdown-day"))
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

function contador() {
    let dias, horas, minutos, segundos;

    setInterval(function () {
        let target_date = new Date();
        target_date = target_date.addDays(1).setHours(0, 0, 0, 0); // dia seguinte, meia noite

        let current_date = new Date().getTime();
        let segundos_f = (target_date - current_date) / 1000;

        dias = parseInt(segundos_f / 86400);
        segundos_f = segundos_f % 86400;

        horas = parseInt(segundos_f / 3600);
        segundos_f = segundos_f % 3600;

        minutos = parseInt(segundos_f / 60);
        segundos_f = parseInt(segundos_f % 60);

        segundos = parseInt(segundos_f % 60);

            if( !document.getElementsByClassName("countdown-day") )
            return;

            document.getElementsByClassName("countdown-day")[0].innerHTML = dias;
            document.getElementsByClassName("countdown-hour")[0].innerHTML = horas;
            document.getElementsByClassName("countdown-minute")[0].innerHTML = minutos;
            document.getElementsByClassName("countdown-second")[0].innerHTML = segundos;
        
        
    }, 1000);
}

contador();