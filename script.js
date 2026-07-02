const btn = document.querySelector('#submitbtn')

const mensagemStatus = document.querySelector('#mensagem-sucesso');

btn.addEventListener("click", function(event) {
    event.preventDefault()
    
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#e-mail').value;
    const telefone = document.querySelector('#telefone').value;

    console.table([nome, email, telefone]);

  
    mensagemStatus.textContent = `Obrigado, ${nome}! Dados enviados.`;
    
    const formulario = document.querySelector('.contato form');
    formulario.reset();
}); 


const link = document.getElementById("meuLink");
link.addEventListener("click", function(event) {
    event.preventDefault();
    alert('Está em desenvolvimento. Aguarde!');
});

const link1 = document.getElementById("meuLink1");
link.addEventListener("click", function(event) {
    event.preventDefault();
    alert('Está em desenvolvimento. Aguarde!');
});

const link2 = document.getElementById("meuLink2");
link.addEventListener("click", function(event) {
    event.preventDefault();
    alert('Está em desenvolvimento. Aguarde!');
});
