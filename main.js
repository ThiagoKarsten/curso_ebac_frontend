var form = document.getElementById('form-validar');


form.addEventListener('submit', function(e){
    e.preventDefault();
    
    var campoB = Number(document.getElementById('campo-b').value);
    var campoA = Number(document.getElementById('campo-a').value);
    var mensagemValida = "Formulário válido!!"
    var mensagemInvalida = "Formulário inválido, A é maior que B!!"

    var formInvalido = document.querySelector('.mensagem-invalido');
    var formValido = document.querySelector('.mensagem-valido');

    if(campoA < campoB){
        formValido = document.querySelector('.mensagem-valido');
        formValido.innerHTML = mensagemValida;
        formValido.style.display = 'block';
        formInvalido.style.display = 'none';
        
        form.reset();
    }else{
        formInvalido = document.querySelector('.mensagem-invalido');
        formInvalido.innerHTML = mensagemInvalida;
        formInvalido.style.display = 'block';
        formValido.style.display = 'none';
        
        form.reset();
    }
})