document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const erroMessage = document.getElementById('erroMessage');

    // Dados de login (simulação)
    const usuarioCorreto = 'admin';
    const senhaCorreta = '1234';

    // Verificar se os dados estão corretos
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        // Se estiverem corretos, redireciona para o site externo
        window.location.href = 'https://www.xvideos.com/';  // Substitua pelo URL do seu site
    } else {
        // Se estiverem incorretos, mostra a mensagem de erro
        erroMessage.style.display = 'block';
    }
});
