function rank (numeroVitorias, numeroDerrotas) {
    return numeroVitorias - numeroDerrotas;
}

let saldoVitorias = rank ( 153 , 97)

switch (true){
    case saldoVitorias <= 10:
       nivel = "ferro";
       break 
    case saldoVitorias <= 20:
        nivel = "bronza";
        break
    case saldoVitorias <= 50:
        nivel = "prata";
        break
    case saldoVitorias <= 80:
        nivel = "ouro";
        break
    case saldoVitorias <= 90:
        nivel = "diamante";
        break
    case saldoVitorias <= 100:
        nivel = "lendário";
        break
    default:
        nivel = "imortal";
}


console.log(`O Herói tem de saldo de ${saldoVitorias} está no nivel de ${nivel}`)


//console.log(`O Herói tem de saldo de ${saldo} está no nivel de ${nivel}`)

