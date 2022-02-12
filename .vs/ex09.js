var tnumero = window.document.querySelector(".tnumero");
var tlista = window.document.querySelector(".tlista");
var resposta = window.document.querySelector(".res");

var lista = [];

function validarNumero(numero, lista){
    if(lista.indexOf(numero.value) != -1){
        return false;
    }else {
        return true;
    }
}

function validarEscala(numero){
    if(numero.value >= 0 && numero.value <=100){
        return true;
    }else {
        
        return false;
    }
}

function adicionarValor(){
    if(validarNumero(tnumero, lista) && validarEscala(tnumero)){

        var options = window.document.createElement("option");
        options.setAttribute("class", "option");
        options.text = `O valor ${tnumero.value} foi adicionado com sucesso`;
        tlista.appendChild(options);
        lista.push(tnumero.value);

        tnumero.value = ""
        tnumero.focus()
    }
    else{
        window.alert("[error] - Numero informado ou fora da escala 1 - 100 ou já está na lista");
    }    
}

function acaoValores(){
    if (lista.length == 0){
        window.alert("ADICIONE VALORES ANTES DE CLICAR AQUI!!")
    }else{

    resposta.innerHTML = "";

    //var options = window.document.createElement("option");
    //options.setAttribute("class", "novaoption");
    //options.text = `A lista tem o total de  ${lista.length} item e ela é ${lista}`;
    //resposta.appendChild(options);

    var maior = lista[0];
    var menor = lista[0];
    var soma = 0;
    soma = Number(soma);

    for( let item in lista){

        soma += Number(lista[item]);
        if(maior < lista[item]){
            maior = lista[item];
        }
        if(menor > lista[item]){
            menor = lista[item]
        }
    }
    var media = (soma/Number(lista.length))
    
    resposta.innerHTML += `<br><option class="novaoption"> A lista tem o total de  ${totalvalor} item e ela é ${lista}</option></br>`
    resposta.innerHTML += `<br><option class="novaoption"> O MAIOR VALOR É ${maior} </option></br>`
    resposta.innerHTML += `<br><option class="novaoption"> O MENOR VALOR É ${menor} </option></br>`
    resposta.innerHTML += `<br><option class="novaoption"> A SOMA DOS VALORES É ${soma} </option></br>`
    resposta.innerHTML += `<br><option class="novaoption"> A SOMA DOS VALORES É ${media} </option></br>`
    
    
    }
    
    
}