function escolhaUm(){
    var escolha = prompt("Digite as opçoes abaixo \n 1 - Correr \n 2 - Atirar no Zumbi \n 3 - Pular pela Janela \n 0 - Cancelar");
    
    if(escolha == 0){
        return null;
    }else if(escolha == 1){
        document.getElementById("dvConteudo2Jogador3").style.display = "block";
        document.getElementById("dvConteudoJogador3").style.display = "none";
    }else if(escolha == 2){
        document.getElementById("dvConteudo5Jogador3").style.display = "block";
        document.getElementById("dvConteudoJogador3").style.display = "none";        
    }else if(escolha == 3){
        document.getElementById("dvConteudo6Jogador3").style.display = "block";
        document.getElementById("dvConteudoJogador3").style.display = "none";        
    }else{
        alert("Selecione uma opçao válida");
        return escolhaUm();  
    }
}


function escolhaDois(){
    var escolha = prompt("Digite as opçoes abaixo \n 1 - Dar um soco \n 2 - Pegar o carro \n 3 - Gritar \n 0 - Cancelar");

    if(escolha == 0){
        return null;
    }else if(escolha == 1){
        document.getElementById("dvConteudo3Jogador3").style.display = "block";
        document.getElementById("dvConteudo2Jogador3").style.display = "none";
    }else if(escolha == 2){
        document.getElementById("dvConteudo5Jogador3").style.display = "block";
        document.getElementById("dvConteudo2Jogador3").style.display = "none";        
    }else if(escolha == 3){
        document.getElementById("dvConteudo6Jogador3").style.display = "block";
        document.getElementById("dvConteudo2Jogador3").style.display = "none";        
    }else{
        alert("Selecione uma opçao válida");
        return escolhaDois();  
    }
}

function escolhaTres(){
    var escolha = prompt("Digite as opçoes abaixo \n 1 - Saltar \n 2 - Pular \n 3 - Voar \n 0 - Cancelar");

    if(escolha == 0){
        return null;
    }else if(escolha == 1){
        document.getElementById("dvConteudo4Jogador3").style.display = "block";
        document.getElementById("dvConteudo3Jogador3").style.display = "none";
    }else if(escolha == 2){
        document.getElementById("dvConteudo5Jogador3").style.display = "block";
        document.getElementById("dvConteudo3Jogador3").style.display = "none";
    }else if(escolha == 3){
        document.getElementById("dvConteudo6Jogador3").style.display = "block";
        document.getElementById("dvConteudo3Jogador3").style.display = "none";
    }else{
        alert("Selecione uma opçao válida");
        return escolhaTres();  
    }
}

function voltarInicio(){
    return location = ('../Projeto Modulo 1/Jogo.html');
}
