function calcular(){
    var valor = window.document.querySelector(".numero").value;
    var res = window.document.getElementsByClassName("res")[0];
    
    if(valor.length ==0 ){
        window.alert(`[ERROR] INSIRIR UM VALOR VÁLIDO`)
    }else{   
        
        for (var c = 0; c <= 10; c++){
            
            var item = document.createElement("option")
            item.text = `${valor} x ${c} = ${valor*c} -->`
            res.appendChild(item)
        }
    }

}