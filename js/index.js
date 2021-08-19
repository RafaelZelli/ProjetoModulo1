function exibeprompt(){
    var selecioneJogador = prompt("Digite o número correspondente: \n 1 - Stifler \n 2 - Celso Peter \n 3 - Mary \n 0 - Cancelar"  );
    
    if(selecioneJogador == 0){
        return null;
    }else if(selecioneJogador == 1){
        return location = ('../telastifler.html');
    }else if(selecioneJogador == 2){
        return location = ('../telacelsopeter.html');
    }else if(selecioneJogador == 3){
        return location = ('../mary1.html');
    }else{
        alert("Jogador não disponível. Escolha uma das opções válidas"); 
        return exibeprompt();  
    }
}

