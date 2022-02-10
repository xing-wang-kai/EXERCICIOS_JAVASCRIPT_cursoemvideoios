

var cumprimento = window.document.querySelector(".containerdia");
var legfigcap = window.document.querySelector(".figcaption")
var horaatual = window.document.querySelector(".horaatual");
var forumlario = window.document.querySelector("input[type='number']")
var headercolor = window.document.querySelector(".container_header")
var maincolor = window.document.querySelector(".container_main")
var imagens = ["../amanhecer2.jpg", "../tardecer.jpg", "../anoitecer.jpg", "../madrugada.jpg"]
var getimagens = window.document.querySelector(".getimg")
var botaohoras = window.document.querySelector(".botaohour")
var horasatual = window.document.querySelector(".botaoDesj")


var horas = window.document.querySelector(".thishour")


var botaosistem = window.document.querySelector(".botaoDesj")

function newhours(){

    if (horas.value >= 12 && horas.value <=22){
        cumprimento.innerText = "BOA TARDE!!";
        legfigcap.innerText = "SOL ESCALDANTE";
        horaatual.innerText = "hora Selecionada: " + horas.value + ":00";
        getimagens.src = "../entardecer.jpg";
        headercolor.style.background = "rgb(255, 60, 0)";
        headercolor.style.border = "10px solid rgb(255, 200, 0)";
        maincolor.style.background = "rgb(252, 172, 0)";
        maincolor.style.border = "5px solid rgb(248, 252, 57)";
        document.body.style.background = "rgb(235, 130, 130)";
        botaohoras.style.background ="rgb(248, 252, 57)";
        horasatual.style.background = "rgb(248, 252, 57)";
        forumlario.style.background = "rgb(230, 253, 253)";
        forumlario.style.color = "black";

    } else if (horas.value >= 6 && horas.value < 12) {
        cumprimento.innerText = "BOM DIA!!";
        legfigcap.innerText = "NASCER DO SOL";     
        horaatual.innerText = "hora Selecionada: " + horas.value + ":00";
        getimagens.src = "../amanhecer2.jpg";
        headercolor.style.background = "rgb(253, 141, 225)";
        headercolor.style.border = "10px solid rgb(236, 175, 221)";
        maincolor.style.background = "rgb(230, 255, 170)";
        maincolor.style.border = "5px solid rgb(236, 255, 204)";
        document.body.style.background = "antiquewhite";
        botaohoras.style.background ="rgb(253, 227, 252)";
        horasatual.style.background = "rgb(253, 227, 252)";
        forumlario.style.background = "rgb(230, 253, 253)";
        forumlario.style.color = "black";
        } 
        else {
        cumprimento.innerText = "MADRUGADA!!";
        legfigcap.innerText = "DESLUMBRE DO LUAR";      
        horaatual.innerText = "hora Selecionada: " + horas.value + ":00";
        getimagens.src = "../madrugada.jpg";
        headercolor.style.background = "rgb(8, 0, 117)";
        headercolor.style.border = "10px solid rgb(14, 3, 165)";
        maincolor.style.background = "rgb(62, 9, 105)";
        maincolor.style.border = "5px solid rgb(37, 0, 68)";
        document.body.style.background = "rgb(17, 1, 32)";
        botaohoras.style.background ="rgb(17, 1, 32)";
        horasatual.style.background = "rgb(17, 1, 32)";
        horasatual.style.color = "rgb(129, 36, 216)";
        botaohoras.style.color = "rgb(129, 36, 216)";
        forumlario.style.background = "rgb(129, 36, 216)";
        forumlario.style.color = "white";
        }
    
}

    

botaosistem.onclick = newhours;

var atualhora = new Date()
var botaoatual = window.document.querySelector(".botaohour")

atualhora = atualhora.getHours();


    function byhour(){
        
        horaatual.innerText = (`Hora atual é ${atualhora}:00`);
        if (atualhora >= 12 && atualhora <=22){
            cumprimento.innerText = "BOA TARDE!!";
            legfigcap.innerText = "SOL ESCALDANTE";
            horaatual.innerText = "hora Selecionada: " + atualhora + ":00";
            getimagens.src = "../entardecer.jpg";
            headercolor.style.background = "rgb(255, 60, 0)";
            headercolor.style.border = "10px solid rgb(255, 200, 0)";
            maincolor.style.background = "rgb(252, 172, 0)";
            maincolor.style.border = "5px solid rgb(248, 252, 57)";
            document.body.style.background = "rgb(235, 130, 130)";
            botaohoras.style.background ="rgb(248, 252, 57)";
            horasatual.style.background = "rgb(248, 252, 57)";
            forumlario.style.background = "rgb(230, 253, 253)";
            forumlario.style.color = "black";
    
        } else if (atualhora >= 6 && atualhora < 12) {
            cumprimento.innerText = "BOM DIA!!";
            legfigcap.innerText = "NASCER DO SOL";     
            horaatual.innerText = "hora Selecionada: " + atualhora + ":00";
            getimagens.src = "../amanhecer2.jpg";
            headercolor.style.background = "rgb(253, 141, 225)";
            headercolor.style.border = "10px solid rgb(236, 175, 221)";
            maincolor.style.background = "rgb(230, 255, 170)";
            maincolor.style.border = "5px solid rgb(236, 255, 204)";
            document.body.style.background = "antiquewhite";
            botaohoras.style.background ="rgb(253, 227, 252)";
            horasatual.style.background = "rgb(253, 227, 252)";
            forumlario.style.background = "rgb(230, 253, 253)";
            forumlario.style.color = "black";
            } 
            else {
            cumprimento.innerText = "MADRUGADA!!";
            legfigcap.innerText = "DESLUMBRE DO LUAR";      
            horaatual.innerText = "A HORA ATUAL É PASSAR DAS: " + atualhora + ":00";
            getimagens.src = "../madrugada.jpg";
            headercolor.style.background = "rgb(8, 0, 117)";
            headercolor.style.border = "10px solid rgb(14, 3, 165)";
            maincolor.style.background = "rgb(62, 9, 105)";
            maincolor.style.border = "5px solid rgb(37, 0, 68)";
            document.body.style.background = "rgb(17, 1, 32)";
            botaohoras.style.background ="rgb(17, 1, 32)";
            horasatual.style.background = "rgb(17, 1, 32)";
            horasatual.style.color = "rgb(129, 36, 216)";
            botaohoras.style.color = "rgb(129, 36, 216)";
            forumlario.style.background = "rgb(129, 36, 216)";
            forumlario.style.color = "white";
            }

    }

botaoatual.onclick = byhour;



    