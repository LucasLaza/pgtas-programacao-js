let nomeDog = "Thor"
let pesoDog = 21
let tempoAtividade = 15

let porteDog = selecionarPorte(pesoDog)

let atividade = selecionarAtividade(porteDog)

let mensagem = mensagemDeTempo(tempoAtividade) + atividade

console.log(mensagem)

function selecionarPorte(peso) {
    return peso < 10 ? "P" : (peso <= 20 ? "M" : "G");
}

function selecionarAtividade(porte){
    switch (porte) {
        case "P":
          return "Brincar dentro de casa";
        case "M":
          return "Caminhada no quarteirão";
        case "G":
          return "Correr no parque";
        default:
          return "Porte inválido";
      }
}

function mensagemDeTempo(tempo){
    switch (true) {
        case tempo < 15:
          return "atividade rápida: ";
        case tempo <= 30:
          return "tempo ideal: ";
        case tempo > 30:
          return "hora da diversão: ";
        default:
          return "Tempo inválido";
    }
}
