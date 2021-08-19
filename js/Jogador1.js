function escolhaUm(){
    var escolha = prompt("Digite as opçoes abaixo \n 1 - Porão \n 2 - Seguir no corredor \n 3 - Porta a direita \n 0 - Cancelar");
    
    if(escolha == 0){
        return null;
    }else if(escolha == 1){
        return location = ('../Projeto Modulo 1/GameOver1Stifler.html');
    }else if(escolha == 2){
        return location = ('../Projeto Modulo 1/Tela2Stifler.html');         
    }else if(escolha == 3){
        return location = ('../Projeto Modulo 1/Tela3Stifler.html'); 
    }else{
        alert("Selecione uma opçao válida");
        return escolhaUm();  
    }
}


function escolhaDois(){
    var escolha = prompt("Digite as opçoes abaixo \n 1 - Porta a esquerda \n 2 - Porta a direita \n 0 - Cancelar");

    if(escolha == 0){
        return null;
    }else if(escolha == 1){
        return location = ('../Projeto Modulo 1/Tela4Stifler.html');  
    }else if(escolha == 2){
        return location = ('../Projeto Modulo 1/GameOver2Stifler.html');       
    }else{
        alert("Selecione uma opçao válida");
        return escolhaDois();  
    }
}

function escolhaTres(){
    var escolha = prompt("Digite as opçoes abaixo \n 1 - Atravessar sem fazer barulho \n 2 - Correr \n 0 - Cancelar");

    if(escolha == 0){
        return null;
    }else if(escolha == 1){
        return location = ('../Projeto Modulo 1/Tela5Stifler.html');
    }else if(escolha == 2){
        return location = ('../Projeto Modulo 1/GameOver3Stifler.html');
    }else{
        alert("Selecione uma opçao válida");
        return escolhaTres();  
    }
}

function voltarInicio(){
    return location = ('../Projeto Modulo 1/index.html');
}
