function resultado(){
    var inicio = window.document.getElementsByClassName("inicio")[0].value;
    var final = window.document.getElementsByClassName("final")[0].value;
    var passos = window.document.getElementsByClassName("passos")[0].value;
    var botao = window.document.getElementsByClassName("botao")[0];
    var res = window.document.getElementsByClassName("res")[0];
    
    if (inicio == 0 || final == 0 || passos == 0){
        window.alert(`[ERRO] Todos os campos precisam ser peenchidos com valores acima de 1`)
    } else if (inicio == final){
        
        window.alert(`[ERROR] O valor inicio é Igual o final não é possivel executar o comando`);

    }else if(inicio > final){
        var novoinicio = inicio;
        for(novoinicio; novoinicio >= final; novoinicio -= passos ){

            res.innerHTML += `<li>Passo número ${novoinicio} --></li>`;
        }
        }else {
            window.alert(`${inicio} ${final} ${passos}`)
            var novoinicio = Number.parseFloat(inicio);
            var novopassos = Number.parseFloat(passos);
            var novofinal = Number.parseFloat(final)
            for(novoinicio; novoinicio <= novofinal; novoinicio += novopassos){
                
                res.innerHTML += `<li>Passo número ${novoinicio} --></li>`;
            }

        }
    }

    

    
