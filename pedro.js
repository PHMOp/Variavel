function armazenarValor(){

  //armazenar o valor que o usuário digitou 
  var userImput = document.getElementByid(userImput).value ;

  //exibe o valor armazenado 
  console.log("o valor da variável é:" + userImput);

  //atualiza o conteúdo
  document.getElementByid("valorInserido").innerText = "Você clicou no botão e digitou: " + userImput;
}