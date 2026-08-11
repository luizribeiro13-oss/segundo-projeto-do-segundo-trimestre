const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = ["O faturamneto esta positivo ?", "Como melhorar ?"];
const perguntas = [
  {
    enunciado: "O faturamneto esta positivo ?",
    alternativas: ["Sim", "Não"],
  },
  {
    enunciado: "Como melhorar ?",
    alternativas: ["Aumentando as vendas", "Melhorando o Gerenciamento"],
  },
];