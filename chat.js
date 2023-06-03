/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */
// Exemplo: function minhaFuncao() { ... }

 let listaMensagens = [];
function adicionarMensagem(apelido, mensagem){
  listaMensagens.push({
    apelido: apelido,
    mensagem: mensagem
});

}

function formatarMensagens(){

  let htmlData = '';

  for (let i in listaMensagens){
    let item = listaMensagens[i];
      htmlData += `
      <div  class = "chat-message">
        <span class = "chat-message-apelido">${item.apelido}</span>
        <span class = "chat-message-item">${item.mensagem}</span>
      </div>
      `; 
  }
  document.getElementById('chat-messages').innerHTML = htmlData;
}

function atualizarHTML(){

  formatarMensagens();
  
}


function commitMessageClickHandler(){
  let input = document.getElementById('message-input');

  if(input.value.trim().length == 0){
    input.focus();
    return;
  }
  adicionarMensagem('Vilonga:',input.value);
  atualizarHTML();
  document.getElementById('message-input').value = '';
}
//adicionarMensagem('Eldissone: ','olá');

window.addEventListener('load', function(){
    atualizarHTML();
});

// --------------------------------
// Não remover estas linhas
// --------------------------------
 module.exports =
 {
   listaMensagens,
   adicionarMensagem,
   formatarMensagens,
   atualizarHTML,
   commitMessageClickHandler
 };
// --------------------------------