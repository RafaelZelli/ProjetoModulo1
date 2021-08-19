function escolhaUm(){
    var escolha = prompt("Digite as opçoes abaixo \n 1 - Seguir em frente no corredor \n 2 - Subir as escadas \n 0 - Cancelar");
    
    if(escolha == 0){
        return null;
    }else if(escolha == 1){
        return location.href = './mary3.html';
    }else if(escolha == 2){
        return location.href = './mary4.html';      
    }else{
        alert("Selecione uma opçao válida");
        return escolhaUm();  
    }
}


function escolhaDois(){
    var escolha = prompt("Digite as opçoes abaixo \n 1 - Ir reto \n 2 - Virar a direita \n 0 - Cancelar");

    if(escolha == 0){
        return null;
    }else if(escolha == 1){
        return location.href = './mary5.html';
    }else if(escolha == 2){
        return location.href = './mary6.html';    
    }else{
        alert("Selecione uma opçao válida");
        return escolhaDois();  
    }
}

function escolhaTres(){
    var escolha = prompt("Digite as opçoes abaixo \n 1 - Gritar por ajuda \n 2 - Quebrar e pular pela janela \n 0 - Cancelar");

    if(escolha == 0){
        return null;
    }else if(escolha == 1){
        return location.href = './mary8.html';
    }else if(escolha == 2){
        return location.href = './mary9.html';
    }else{
        alert("Selecione uma opçao válida");
        return escolhaTres();  
    }
}

function voltarInicio(){
    return location.href = './index.html';
}
