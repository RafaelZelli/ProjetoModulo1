function escolhaUm(){
    var escolha = prompt("Digite as opçoes abaixo \n 1 - Tentar abrir a porta/janelas \n 2 - Dar uma garrafada no zumbi \n 3 - Subir as escadas \n 4 - Seguir pela abertura a esquerda \n 0 - Cancelar");
    
    if(escolha == 0){
        return null;
    }else if(escolha == 1){
        return location.href = './Tela2CelsoPeter.html';
    }else if(escolha == 2){
        return location.href = './GameOver1CelsoPeter.html';         
    }else if(escolha == 3){
        return location.href = './Tela5CelsoPeter.html'; 
    }else if(escolha == 4){
        return location.href = './Tela4CelsoPeter.html'; 
    }else{
        alert("Selecione uma opçao válida");
        return escolhaUm();  
    }
}


function escolhaDois(){
    var escolha = prompt("Digite as opçoes abaixo \n 1 - Pegar a esquerda \n 2 - Pegar a direita \n 3 - Desobstruir a passagem \n 0 - Cancelar");

    if(escolha == 0){
        return null;
    }else if(escolha == 1){
        return location.href = './Tela8CelsoPeter.html';  
    }else if(escolha == 2){
        return location.href = './Tela9CelsoPeter.html';       
    }else if(escolha == 3){
        return location.href = './Tela10CelsoPeter.html';       
    }else{
        alert("Selecione uma opçao válida");
        return escolhaDois();  
    }
}

function escolhaTres(){
    var escolha = prompt("Digite as opçoes abaixo \n 1 - Chutar o zumbi e seguir pela escadas \n 2 - Pular para baixo \n 0 - Cancelar");

    if(escolha == 0){
        return null;
    }else if(escolha == 1){
        return location.href = './Tela11CelsoPeter.html';
    }else if(escolha == 2){
        return location.href = './GameOver3CelsoPeter.html';
    }else{
        alert("Selecione uma opçao válida");
        return escolhaTres();  
    }
}

function escolhaQuatro(){
    var escolha = prompt("Digite as opçoes abaixo \n 1 - Atravessar sem incomodar o banho das criaturas \n 2 - Sair correndo trombando nas banheiras \n 0 - Cancelar");

    if(escolha == 0){
        return null;
    }else if(escolha == 1){
        return location.href = './Tela12CelsoPeter.html';
    }else if(escolha == 2){
        return location.href = './GameOver4CelsoPeter.html';
    }else{
        alert("Selecione uma opçao válida");
        return escolhaTres();  
    }
}

function voltarInicio(){
    return location.href = './index.html';
}
