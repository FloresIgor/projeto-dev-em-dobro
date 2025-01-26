/*Comentário com várias linhas*/
//Comentário de uma linha

const bntAvancar =document.getElementById("btn-avancar")
const bntVoltar =document.getElementById("btn-voltar")
const cartoes= document.querySelectorAll(".cartao")
let cartaoAtual = 0;

bntAvancar.addEventListener("click", function(){ 
    if(cartaoAtual === cartoes.length - 1) return;
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");


  cartaoAtual++;  
  cartoes[cartaoAtual].classList.add("selecionado");
  
});

bntVoltar.addEventListener("click", function(){ 

    if(cartaoAtual === 0) return;
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");


  cartaoAtual--;  
  cartoes[cartaoAtual].classList.add("selecionado");
});