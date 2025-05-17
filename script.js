// Converta seu código Python para JavaScript aqui
// Ou mantenha a lógica básica para demonstração

const perguntas = [
    {
        tipo: "matemática",
        pergunta: "Se você tem 3 maçãs e ganha mais 2, quantas maçãs você tem agora?",
        resposta: "5",
        dica: "Some 3 + 2"
    },
    // Adicione outras perguntas conforme necessário
];

let perguntaAtual = 0;
let acertos = 0;

function mostrarPergunta() {
    if (perguntaAtual < perguntas.length) {
        const pergunta = perguntas[perguntaAtual];
        document.getElementById('pergunta-area').innerHTML = `
            <h3>Pergunta ${perguntaAtual + 1}/${perguntas.length}</h3>
            <p><strong>${pergunta.tipo.toUpperCase()}</strong>: ${pergunta.pergunta}</p>
        `;
    } else {
        finalizarTeste();
    }
}

function verificarResposta() {
    const respostaUsuario = document.getElementById('resposta-input').value.trim();
    const pergunta = perguntas[perguntaAtual];
    
    if (respostaUsuario === pergunta.resposta) {
        acertos++;
        document.getElementById('resultado').innerHTML = "✅ Correto! Parabéns!";
    } else {
        document.getElementById('resultado').innerHTML = `❌ Resposta incorreta. Dica: ${pergunta.dica}`;
    }
    
    perguntaAtual++;
    document.getElementById('resposta-input').value = "";
    setTimeout(mostrarPergunta, 1500);
}

function finalizarTeste() {
    const percentual = (acertos / perguntas.length) * 100;
    document.getElementById('pergunta-area').innerHTML = `
        <h2>Teste Concluído!</h2>
        <p>Você acertou ${acertos} de ${perguntas.length} perguntas (${percentual.toFixed(1)}%)</p>
    `;
    document.getElementById('resposta-area').style.display = "none";
}

function iniciarTeste() {
    perguntaAtual = 0;
    acertos = 0;
    document.getElementById('resposta-area').style.display = "block";
    mostrarPergunta();
}