//Trocar o conteudo da pergunta    ///////////////////
let h1Pergunta = document.getElementById("Perguntas");
let Enuncidados = document.getElementById("EnunciadosPerguntas");
let enunciadosArray = ["Enunciado 1", "Enunciado 2", "Enunciado 3", "Enunciado 4", "Enunciado 5", "Enunciado 6", "Enunciado 7", "Enunciado 8", "Enunciado 9", "Enunciado 10"];
h1Pergunta.textContent = "Pergunta #1";
let cont = 2;
let contEnu = 1;

h1Pergunta.style.color = "purple";
enunciadosArray.style.color = "purple";

function avancar(){
    if (cont > 10 &&contEnu >9) {
        return; 
    }

    h1Pergunta.textContent = "Pergunta #"+cont;
    cont++;
    Enuncidados.textContent = enunciadosArray[contEnu];
    contEnu++;
}




    