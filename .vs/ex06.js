

function verificar(){

    var data = new Date();
    var anoatual = data.getFullYear();
    var fano = window.document.querySelector("#textano").value;
    var res = window.document.getElementsByClassName("res")[0];
    var sex = window.document.getElementsByName("radsex");

    var fotopessoa = document.createElement('img');
    fotopessoa.setAttribute('class', 'foto');

    anoatual = Number.parseFloat(anoatual);
    fano = Number.parseFloat(fano)

    if (fano == 0 || fano > anoatual){
        window.alert("verificque os dados que foi inseridos e insira novamente")
    }
    else{
        
        var idade = anoatual - fano;
        var genero = " ";
        if (sex[0].checked){
            genero = "MASCULINO";
            if (idade >= 0 && idade <= 15){
                //criança
                fotopessoa.setAttribute("src", "../homemcrianca.jpg");

            }else if(idade > 15 && idade <=40){
                //adulto
                fotopessoa.setAttribute("src", "../homemadulto.jpg");
            }else if(idade > 40){
                // velho
                fotopessoa.setAttribute("src", "../homemvelho.jpg");
            }

        }else if (sex[1].checked){
            genero ="FEMININO";
            if (idade >= 0 && idade <= 15){
                //criança
                fotopessoa.setAttribute("src", "../mulhercrianca.jpg");

            }else if(idade > 15 && idade <=40){
                //adulto
                fotopessoa.setAttribute("src", "../mulheradulto.jpg");
            }else if(idade > 40){
                // velho
                fotopessoa.setAttribute("src", "../mulhervelha.jpg");
            }

        }
        res.style.textAlign = "center"
        res.innerHTML = `<h1> A Idade é ${idade} e o sexo ${genero} </h1>`; 

        res.appendChild(fotopessoa);

    }
    
}