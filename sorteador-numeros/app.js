function sortear() {
  let quantidade = parseInt(document.querySelector("#quantidade").value);
  let de = parseInt(document.querySelector("#de").value);
  let ate = parseInt(document.querySelector("#ate").value);
  let HabilitaBotao = document.querySelector('#btn-reiniciar')
 
  let sorteados = [];
  let numero;
  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroiAleatorio(de, ate);
   
    while (sorteados.includes(numero)){
      numero = obterNumeroiAleatorio(de, ate);
    }
     sorteados.push(numero);
  }
 let resultados = document.querySelector("#resultado");
  resultados.innerHTML = ` <label class="texto__paragrafo">Números sorteados:${sorteados}</label> `;
  habilitaBotao()
}


function obterNumeroiAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  function habilitaBotao(){
    let HabilitaBotao = document.querySelector('#btn-reiniciar')
    HabilitaBotao.setAttribute('class','container__botao')
  }
  function reiniciar(){
    document.querySelector("#quantidade").value =''
    document.querySelector("#ate").value =''
    document.querySelector("#de").value=''
    document.querySelector("#resultado").innerHTML = ` <label class="texto__paragrafo">selecione os numeros para o sorteio!</label> `;

  

  }