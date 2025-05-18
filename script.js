// Script para interatividade da página
document.addEventListener('DOMContentLoaded', function() {
    // Botão de mensagem
    const mensagemBtn = document.getElementById('mensagem-btn');
    const mensagemContainer = document.getElementById('mensagem-container');
    
    // Array de mensagens motivacionais
    const mensagens = [
        "Acredite em você mesmo e todo o resto se encaixará. Tenha fé em seus talentos, trabalhe com dedicação e grandes coisas acontecerão!",
        "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
        "Sua única limitação é aquela que você impõe em sua própria mente.",
        "Não importa o quão devagar você vá, desde que não pare.",
        "O caminho para o sucesso está sempre em construção."
    ];
    
    // Função para exibir mensagem aleatória
    mensagemBtn.addEventListener('click', function() {
        // Seleciona uma mensagem aleatória
        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        
        // Exibe a mensagem
        mensagemContainer.textContent = mensagemAleatoria;
        mensagemContainer.style.display = 'block';
        
        // Adiciona efeito de fade in
        mensagemContainer.style.opacity = 0;
        let opacity = 0;
        const timer = setInterval(function() {
            if (opacity >= 1) {
                clearInterval(timer);
            }
            mensagemContainer.style.opacity = opacity;
            opacity += 0.1;
        }, 50);
    });
});
