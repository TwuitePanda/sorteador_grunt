document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMaximo = parseInt(document.getElementById('numero-maximo'));
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = meth.random() * numeroMaximo;
        numeroAleatorio = Math.round(numeroAleatorio + 1);
        
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})