const pontosDosPersonagens = {
    Kelvin: 0,
    Bob: 0,
    Stuart: 0,
    Dave: 0
}
  
//perguntas
const perguntas1 =[
    {
        pergunta: "Qual é sua altura ?",
        opcoes: [
            {texto: "Alto", personagem: "Kelvin", pontos: 10},
            {texto: "Muito baixo", personagem: "Bob", pontos: 10},
            {texto: "baixo", personagem: "Stuart", pontos: 10},
            {texto: "Mediano", personagem: "Dave", pontos: 10}
        ]
    }
]

const perguntas2 =[
    {
        pergunta: "Qual é o melhor passatempo ?",
        opcoes: [
            {texto: "Jogar golf", personagem: "Kelvin", pontos: 10},
            {texto: "Tocar guitarra", personagem: "Stuart", pontos: 10},
            {texto: "Ouvir histórias", personagem: "Bob", pontos: 10},
            {texto: "Lançar foguetes", personagem: "Dave", pontos: 10}
        ]
    }
]

const perguntas3 =[
    {
        pergunta: "Qual melhor representa seu cabelo ?",
        opcoes: [
            {texto: "Bagunçado", personagem: "Kelvin", pontos: 10},
            {texto: "Penteado", personagem: "Stuart", pontos: 10},
            {texto: "Careca", personagem: "Bob", pontos: 10},
            {texto: "Repartido ao meio", personagem: "Dave", pontos: 10}
        ]
    }
]

const perguntas4 =[
    {
        pergunta: "Qual olho você gostaria de ter ?",
        opcoes: [
            {texto: "Um par de olhos", personagem: "Kelvin", pontos: 10},
            {texto: "Apenas um", personagem: "Stuart", pontos: 10},
            {texto: "Um de cada cor", personagem: "Bob", pontos: 10},
            {texto: "Qualquer um", personagem: "Dave", pontos: 10}
        ]
    }
]

const perguntas5 =[
    {
        pergunta: "Defina seu MOOD do dia !",
        opcoes: [
            {texto: "Vivendo a vida", personagem: "Kelvin", pontos: 10},
            {texto: "De mal com a vida", personagem: "Stuart", pontos: 10},
            {texto: "De love", personagem: "Bob", pontos: 10},
            {texto: "Foco na meta", personagem: "Dave", pontos: 10}
        ]
    }
]

const perguntas6 =[
    {
        pergunta: "Você gosta de BANANA ?",
        opcoes: [
            {texto: "Gosto", personagem: "Kelvin", pontos: 10},
            {texto: "Gosto Muito", personagem: "Stuart", pontos: 10},
            {texto: "Adoro BANANAS", personagem: "Bob", pontos: 10},
            {texto: "Sim", personagem: "Dave", pontos: 10}
        ]
    }
]

const perguntas7 =[
    {
        pergunta: "Qual seu personagem favorito de Minions ?",
        opcoes: [
            {texto: "Margô", personagem: "Kelvin", pontos: 10},
            {texto: "Edith", personagem: "Stuart", pontos: 10},
            {texto: "Agnes", personagem: "Bob", pontos: 10},
            {texto: "Dr.Nefario", personagem: "Dave", pontos: 10}
        ]
    }
]

const perguntas8 =[
    {
        pergunta: "Qual melhor representa seu temperamental ?",
        opcoes: [
            {texto: "Fleumático", personagem: "Kelvin", pontos: 10},
            {texto: "Sanguíneo", personagem: "Stuart", pontos: 10},
            {texto: "Colérico", personagem: "Bob", pontos: 10},
            {texto: "Melancólico", personagem: "Dave", pontos: 10}
        ]
    }
]

const perguntas9 =[
    {
        pergunta: "Você é responsável ?",
        opcoes: [
            {texto: "Sim, o mais responsável", personagem: "Kelvin", pontos: 10},
            {texto: "Não, sou muito bagunceiro(a)", personagem: "Stuart", pontos: 10},
            {texto: "Não", personagem: "Bob", pontos: 10},
            {texto: "Sim", personagem: "Dave", pontos: 10}
        ]
    }
]

const perguntas10 =[
    {
        pergunta: "Qual sua sobremesa favorita ?",
        opcoes: [
            {texto: "Pedra", personagem: "Kelvin", pontos: 10},
            {texto: "Shakes", personagem: "Stuart", pontos: 10},
            {texto: "Cereal", personagem: "Bob", pontos: 10},
            {texto: "Sorvete", personagem: "Dave", pontos: 10}
        ]
    }
]

function RegistrarEscolhas(personagem, pontos){
    if(pontosDosPersonagens[personagem] !== undefined){
        pontosDosPersonagens[personagem] += pontos;
    }
}


function determinarPersonagemFinal() {
    let personagemFinal = null;
    let maiorPontuacao = 0;
  
    for (const personagem in pontosDosPersonagens) {
      if (pontosDosPersonagens[personagem] > maiorPontuacao) {
        maiorPontuacao = pontosDosPersonagens[personagem];
        personagemFinal = personagem;
      }
    }
  
    return personagemFinal;
}




    