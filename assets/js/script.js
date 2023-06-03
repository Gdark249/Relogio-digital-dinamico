
const horas = document.getElementById('horas')
const minutos =  document.getElementById('minutos')
const segundos = document.getElementById('segundos')



 

const relogio = setInterval(function time(){

    var data = new Date()
    var hh = data.getHours()
    var mm = data.getMinutes()
    var ss = data.getSeconds()
    
    if (hh<10) hh = "0" + hh
    if (mm<10) mm = "0" + mm
    if (ss<10) ss = "0" + ss

    horas.textContent = hh
    minutos.textContent = mm
    segundos.textContent = ss

    
     


    if (hh >= 06){
        document.body.style.backgroundImage = "linear-gradient(140deg, #0367b8, #d3e203)"
    }
    if (hh >= 12){
        document.body.style.backgroundImage = "linear-gradient(140deg, #acb803, #b85b03)"
    }
    if (hh >= 18){
        document.body.style.backgroundImage = "linear-gradient(140deg, #031eb8, #4203b8)"
    }




})
             
