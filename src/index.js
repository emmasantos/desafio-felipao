//variáveis nome do jogador, quantidade de xp, nível de jogador
let nomeJogador = "Eden333";
let quantidadeXP = 4444;

//tomada de decisão, classifica nível de jogador de acordo com a quantidade de XP
if(quantidadeXP <= 1000){
    nivelJogador = "Ferro"
    console.log('O Herói de nome ' + nomeJogador + " está no nível " + nivelJogador + "!")
}else if ((quantidadeXP >= 1001) && (quantidadeXP < 2000)){
    nivelJogador = "Bronze"
    console.log('O Herói de nome ' + nomeJogador + " está no nível " + nivelJogador + "!")
}else if ((quantidadeXP >= 2001) && (quantidadeXP < 5000)){
    nivelJogador = "Prata"
    console.log('O Herói de nome ' + nomeJogador + " está no nível " + nivelJogador + "!")
}else if ((quantidadeXP >= 5001) && (quantidadeXP < 7000)){
    nivelJogador = "Ouro"
    console.log('O Herói de nome ' + nomeJogador + " está no nível " + nivelJogador + "!")
}else if ((quantidadeXP >= 7001) && (quantidadeXP < 8000)){
    nivelJogador = "Platina"
    console.log('O Herói de nome ' + nomeJogador + " está no nível " + nivelJogador + "!")
}else if ((quantidadeXP >= 8001) && (quantidadeXP < 9000)){
    nivelJogador = "Ascendente"
    console.log('O Herói de nome ' + nomeJogador + " está no nível " + nivelJogador + "!")
}else if ((quantidadeXP >= 9001) && (quantidadeXP < 10000)){
    nivelJogador = "Imortal"
    console.log('O Herói de nome ' + nomeJogador + " está no nível " + nivelJogador + "!")
}else if (quantidadeXP >= 10001){
    nivelJogador = "Radiante"
    console.log('O Herói de nome ' + nomeJogador + " está no nível " + nivelJogador + "!")
}
