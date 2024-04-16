let listaDeNumerosSorteadeados = [];
let numeroLimite = 10; 
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1
function exibirTextonaTela (tag, texto)  {
let campo = document.querySelector(tag);
campo.innerHTML= texto;
responsiveVoice.speak (texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial (){
  exibirTextonaTela('h1', 'Jogo do Número Secreto ');
  exibirTextonaTela('p', 'Escolha um número de 1 e 100');

}

exibirTextonaTela('h1', 'Jogo do número Secreto');
exibirTextonaTela('p', 'Escolha um número entre 1 e 100');
function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
    exibirTextonaTela('h1','Isso aí ! Você acertou !'); 
    let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com  ${tentativas} ${palavraTentativa}!`;
    exibirTextonaTela('p', mensagemTentativas); 
    document.getElementById ('reiniciar').removeAttribute('disabled')
    

} else {

    if(chute > numeroSecreto){
        exibirTextonaTela('p', 'O número secreto é menor');
     }else{
        exibirTextonaTela('p', 'O número secreto é maior');
    }
    tentativas ++;
    limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido= parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteadeados.length;
   if (quantidadeDeElementosNaLista == numeroLimite);{
    listaDeNumerosSorteadeados = [];
   }
   if (listaDeNumerosSorteadeados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio ();
 
  }else{ listaDeNumerosSorteadeados.push (numeroEscolhido);
    console.log(listaDeNumerosSorteadeados);
  return numeroEscolhido;}

}

  function limparCampo (){
    chute = document.querySelector('input');
    chute.value = '';
  }

  function reiniciarJogo (){
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById ('reiniciar'). setAttribute ('disabled', true);

  
  }