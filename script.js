const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual seu nível de conhecimento sobre a literatura do nosso país? Descubra seu autor(a)",
        alternativas: [
            "baixo",
            "médio",
            "alto",
            "não sei dizer"
    
        ]
    },
    {
        enunciado: "Se você fosse um escritor, quais temas te interessariam?",
        alternativas: [
            "aventuras e elementos folclóricos",
            "crítica social",
            "psicológico das personagens e retrato o dia a dia comum",
            "socidade brasileira e preconceito racial"
    
        ]
    },
    {
        enunciado: "Como seria seu estilo de escrita? ",
        alternativas: [
            "simples e didático",
            "objetivo e irônico",
            "metafórico e sensível",
            "grotesco e descritivo"
        ]
    },
    {
        enunciado: "Em qual período literário você se encaixaria?",
        alternativas: [
            "pré-modernismo - regionalismo por meio da renovação artística",
            "romantismo - espontaneidade lírica",
            "modernismo - estruturas não tradicionais com liberdade formal",
            "realismo - linguagem objetiva, crítica social e falta de idealizações"
        ]
    }
];

let atual = 0; 
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();

}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
    }
mostraPergunta();
