let nomeDoHeroi = "SeuHerói"; // substitua com o nome do herói
let xpDoHeroi = 5000; // substitua com a quantidade de XP do herói

// Estrutura de decisão usando switch case
let nivelDoHeroi;

switch(true) {
    case xpDoHeroi < 1000:
        nivelDoHeroi = "Ferro";
        break;
    case xpDoHeroi >= 1001 && xpDoHeroi <= 2000:
        nivelDoHeroi = "Bronze";
        break;
    case xpDoHeroi >= 2001 && xpDoHeroi <= 5000:
        nivelDoHeroi = "Prata";
        break;
    case xpDoHeroi >= 5001 && xpDoHeroi <= 7000:
        nivelDoHeroi = "Ouro";
        break;
    case xpDoHeroi >= 7001 && xpDoHeroi <= 8000:
        nivelDoHeroi = "Platina";
        break;
    case xpDoHeroi >= 8001 && xpDoHeroi <= 9000:
        nivelDoHeroi = "Ascendente";
        break;
    case xpDoHeroi >= 9001 && xpDoHeroi <= 10000:
        nivelDoHeroi = "Imortal";
        break;
    case xpDoHeroi >= 10001:
        nivelDoHeroi = "Radiante";
        break;
    default:
        nivelDoHeroi = "Nível desconhecido";
}

// Saída
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);
