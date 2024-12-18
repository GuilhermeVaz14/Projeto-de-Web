const pontosDosPersonagens = {
    Kelvin: 0,
    Bob: 0,
    Stuart: 0,
    Dave: 0
};

const perguntas = [
    {
        pergunta: "Qual é sua altura?",
        opcoes: [
            { texto: "Alto", personagem: "Kelvin", pontos: 10 },
            { texto: "Muito baixo", personagem: "Bob", pontos: 10 },
            { texto: "Baixo", personagem: "Stuart", pontos: 10 },
            { texto: "Mediano", personagem: "Dave", pontos: 10 }
        ],
        imagemFundo: "https://img.buzzfeed.com/buzzfeed-static/static/2018-12/5/17/asset/buzzfeed-prod-web-03/sub-buzz-31176-1544047836-13.jpg?downsize=600:*&output-format=auto&output-quality=auto"    
    },
    {
        pergunta: "Qual é o melhor passatempo?",
        opcoes: [
            { texto: "Jogar golfe", personagem: "Kelvin", pontos: 10 },
            { texto: "Tocar guitarra", personagem: "Stuart", pontos: 10 },
            { texto: "Ouvir histórias", personagem: "Bob", pontos: 10 },
            { texto: "Lançar foguetes", personagem: "Dave", pontos: 10 }
        ],
        imagemFundo: "https://down-br.img.susercontent.com/file/eda11e9f3a1adf6c98e219483624316b"
    },
    {
        pergunta: "Qual melhor representa seu cabelo?",
        opcoes: [
            { texto: "Bagunçado", personagem: "Kelvin", pontos: 10 },
            { texto: "Penteado", personagem: "Stuart", pontos: 10 },
            { texto: "Careca", personagem: "Bob", pontos: 10 },
            { texto: "Repartido ao meio", personagem: "Dave", pontos: 10 }
        ],
        imagemFundo:"https://static.jogalo.com/i/133a816.jpg"
    },
    {
        pergunta: "Qual olho você gostaria de ter?",
        opcoes: [
            { texto: "Um par de olhos", personagem: "Kelvin", pontos: 10 },
            { texto: "Apenas um", personagem: "Stuart", pontos: 10 },
            { texto: "Um de cada cor", personagem: "Bob", pontos: 10 },
            { texto: "Qualquer um", personagem: "Dave", pontos: 10 }
        ],
        imagemFundo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCtmnpVJLmFrLcOjRH7Zx2q65NuItUh2yqGuNLnOFJ4NVHddvR-LTBb_OoAGC3zdP9CP9tx2ovV9Rralc22JYdtqBACafjfmdKwrhafzNrmUaNGdeEuHtGcZJDMDQttatPwBtISVquwOFD/s16000/1654871359070549-0.png"
    },
    {
        pergunta: "Defina seu MOOD do dia!",
        opcoes: [
            { texto: "Vivendo a vida", personagem: "Kelvin", pontos: 10 },
            { texto: "De mal com a vida", personagem: "Stuart", pontos: 10 },
            { texto: "De love", personagem: "Bob", pontos: 10 },
            { texto: "Foco na meta", personagem: "Dave", pontos: 10 }
        ],
        imagemFundo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlisHPBu5sGA8GRi3-ij1cTThTtryvAU-Apw&s"
    },
    {
        pergunta: "Você gosta de BANANA?",
        opcoes: [
            { texto: "Gosto", personagem: "Kelvin", pontos: 10 },
            { texto: "Gosto muito", personagem: "Stuart", pontos: 10 },
            { texto: "Adoro BANANAS", personagem: "Bob", pontos: 10 },
            { texto: "Sim", personagem: "Dave", pontos: 10 }
        ],
        imagemFundo:"https://m.media-amazon.com/images/I/91dXVSVtxyL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        pergunta: "Qual seu personagem favorito de Minions?",
        opcoes: [
            { texto: "Margô", personagem: "Kelvin", pontos: 10 },
            { texto: "Edith", personagem: "Stuart", pontos: 10 },
            { texto: "Agnes", personagem: "Bob", pontos: 10 },
            { texto: "Dr. Nefario", personagem: "Dave", pontos: 10 }
        ],
        imagemFundo: "https://live.staticflickr.com/3735/9790005014_2c8f2d7b9b_b.jpg" 
    },
    {
        pergunta: "Qual melhor representa seu temperamento?",
        opcoes: [
            { texto: "Fleumático", personagem: "Kelvin", pontos: 10 },
            { texto: "Sanguíneo", personagem: "Stuart", pontos: 10 },
            { texto: "Colérico", personagem: "Bob", pontos: 10 },
            { texto: "Melancólico", personagem: "Dave", pontos: 10 }
        ],
        imagemFundo:"https://zonagamer.com.br/wp-content/uploads/2024/07/Meu-Malvado-Favorito-4-esquece-que-Minions-sao-um-tempero.jpg"
    },
    {
        pergunta: "Você é responsável?",
        opcoes: [
            { texto: "Sim, o mais responsável", personagem: "Kelvin", pontos: 10 },
            { texto: "Não, sou muito bagunceiro(a)", personagem: "Stuart", pontos: 10 },
            { texto: "Não", personagem: "Bob", pontos: 10 },
            { texto: "Sim", personagem: "Dave", pontos: 10 }
        ],
        imagemFundo:"https://izaeventos.wordpress.com/wp-content/uploads/2017/04/decoracao-de-aniversario-em-caucaia-2-minions.jpg?w=750"
    },
    {
        pergunta: "Qual sua sobremesa favorita?",
        opcoes: [
            { texto: "Pedra", personagem: "Kelvin", pontos: 10 },
            { texto: "Shakes", personagem: "Stuart", pontos: 10 },
            { texto: "Cereal", personagem: "Bob", pontos: 10 },
            { texto: "Sorvete", personagem: "Dave", pontos: 10 }
        ],
        imagemFundo:"https://cloudfront-us-east-1.images.arcpublishing.com/estadao/PSIL3SGU2FNILBWFJPXX2TWLGE.jpg"
    }
];


let PerguntaAtual = 0; 

function carregarPergunta() {
    const pergunta = perguntas[PerguntaAtual];
    const perguntaElemento = document.getElementById("pergunta");
    const opcoesElemento = document.getElementById("opcoes");
    const numeroPergunta = document.getElementById("numeroPergunta");
    const fundoFoto = document.getElementById("divFoto");

    perguntaElemento.textContent = pergunta.pergunta;
    numeroPergunta.textContent = `Pergunta #${PerguntaAtual + 1}`;

    fundoFoto.innerHTML = `<img src="${pergunta.imagemFundo}" width="100%" height="100%">`;

    opcoesElemento.innerHTML = "";

    pergunta.opcoes.forEach((opcao, index) => {
        const div = document.createElement("div");
        div.classList.add("opcao");

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "opcao";
        input.id = `opcao${index}`;
        input.value = index;

        const label = document.createElement("label");
        label.htmlFor = `opcao${index}`;
        label.textContent = opcao.texto;

        div.appendChild(input);
        div.appendChild(label);
        opcoesElemento.appendChild(div);
    });
    perguntaFundo.style.backgroundImage = `url('${pergunta.imagemFundo}')`;
}

function RegistrarEscolhas() {
    const opcoes = document.getElementsByName("opcao");
    let selecionada = null;

    opcoes.forEach((opcao) => {
        if (opcao.checked) {
            selecionada = parseInt(opcao.value);
        }
    });

    if (selecionada === null) {
        alert("Por favor, selecione uma opção!");
        return false;
    }

    const personagemEscolhido = perguntas[PerguntaAtual].opcoes[selecionada].personagem;
    const pontos = perguntas[PerguntaAtual].opcoes[selecionada].pontos;

    pontosDosPersonagens[personagemEscolhido] += pontos;
    return true;
}

function ProximaPergunta() {
    if (!RegistrarEscolhas()) return;

    PerguntaAtual++;

    if (PerguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    const resultado = document.getElementById("resultado");

    let maiorPontuacao = 0;
    let personagemFinal = "";

    for (const personagem in pontosDosPersonagens) {
        if (pontosDosPersonagens[personagem] > maiorPontuacao) {
            maiorPontuacao = pontosDosPersonagens[personagem];
            personagemFinal = personagem;
        }
    }

    resultado.textContent = `Você é: ${personagemFinal}!`;
    document.getElementById("opcoes").innerHTML = ""; 
    document.getElementById("pergunta").textContent = "Fim do quiz!";
    document.querySelector("button").style.display = "none"; 
}

carregarPergunta();
