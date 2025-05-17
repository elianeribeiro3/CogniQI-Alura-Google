# CogniQI - Chatbot de Diagnóstico Educacional para Crianças (5-12 anos)

[![Python](https://img.shields.io/badge/Python-3.x-blue)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contribuições Bem-Vindas](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/SEU_USUARIO/CogniQI/blob/main/CONTRIBUTING.md)
[![Último Commit](https://img.shields.io/github/last-commit/SEU_USUARIO/CogniQI)](https://github.com/SEU_USUARIO/CogniQI/commits/main)
[![Estrelas](https://img.shields.io/github/stars/SEU_USUARIO/CogniQI)](https://github.com/SEU_USUARIO/CogniQI/stargazers)

>   **CogniQI** é um chatbot educacional interativo desenvolvido em Python, projetado para auxiliar na identificação precoce de possíveis dificuldades de aprendizado em crianças de 5 a 12 anos. O chatbot apresenta uma série de perguntas lúdicas e desafiadoras em áreas como lógica, matemática, português e ciências, fornecendo um ambiente de aprendizado divertido e eficaz.

##   Motivação

A escolha desse tema nasceu de uma dor real que vivi de perto — a luta da minha sobrinha de 9 anos com as dificuldades de aprendizagem, somada ao impacto alarmante do analfabetismo funcional em jovens e adultos, revelado por recentes pesquisas. Acredito que, quanto antes identificarmos essas barreiras, mais rápido e eficaz será o caminho para transformar a educação em uma experiência de sucesso! Este projeto busca oferecer uma ferramenta acessível e intuitiva para pais, educadores e responsáveis, contribuindo para um futuro educacional mais promissor.

##   Funcionalidades

* **Banco de Perguntas Abrangente:** O CogniQI possui um banco de dados com 40 perguntas cuidadosamente elaboradas, abrangendo as áreas de matemática, português, lógica e ciências. As perguntas são distribuídas em diferentes níveis de dificuldade (fácil, médio e difícil) para se adequar à faixa etária das crianças.
* **Seleção Aleatória de Perguntas:** A cada interação, o chatbot seleciona 10 perguntas aleatoriamente, garantindo que cada experiência seja única e estimulante. A seleção é balanceada para incluir perguntas de todas as áreas do conhecimento.
* **Múltiplas Tentativas e Dicas:** Para cada pergunta, a criança tem até duas tentativas para fornecer a resposta correta. Se a primeira tentativa estiver incorreta, o chatbot fornece uma dica útil para orientar o raciocínio.
* **Feedback Imediato e Interativo:** O chatbot avalia as respostas em tempo real, fornecendo feedback imediato sobre o desempenho da criança. As mensagens são encorajadoras e motivacionais, buscando manter o interesse e a confiança.
* **Relatório de Desempenho Detalhado:** Ao final da sessão, o CogniQI gera um relatório de desempenho completo, apresentando o número total de acertos, o percentual de acertos e uma análise do desempenho por área do conhecimento. O relatório também inclui recomendações personalizadas para reforçar as áreas em que a criança demonstrou maior dificuldade.
* **Interface Amigável e Intuitiva:** A interação com o chatbot é realizada através do terminal, com uma interface simples e fácil de usar, adequada para crianças com a supervisão de um adulto, se necessário.

##   Banco de Perguntas Completo

```python
banco_perguntas = [
    # Matemática (10)
    {"tipo": "matemática", "dificuldade": "fácil", "pergunta": "Se você tem 3 maçãs e ganha mais 2, quantas maçãs você tem agora?", "resposta": 5, "dica": "Some 3 + 2"},
    {"tipo": "matemática", "dificuldade": "fácil", "pergunta": "Quantos lados tem um quadrado?", "resposta": 4, "dica": "Um quadrado tem todos os lados iguais"},
    {"tipo": "matemática", "dificuldade": "fácil", "pergunta": "Se um cachorro tem 4 patas, quantas patas têm 2 cachorros?", "resposta": 8, "dica": "Multiplique 4 por 2"},
    {"tipo": "matemática", "dificuldade": "médio", "pergunta": "Qual é o dobro de 6?", "resposta": 12, "dica": "Dobro significa multiplicar por 2"},
    {"tipo": "matemática", "dificuldade": "médio", "pergunta": "Se são 3 horas e passam mais 2 horas, que horas serão?", "resposta": 5, "dica": "Some 3 + 2"},
    {"tipo": "matemática", "dificuldade": "médio", "pergunta": "Quantos dias tem uma semana?", "resposta": 7, "dica": "Conte os dias de segunda a domingo"},
    {"tipo": "matemática", "dificuldade": "difícil", "pergunta": "Se uma pizza é dividida em 8 pedaços e você come 3, quantos pedaços sobram?", "resposta": 5, "dica": "Subtraia 3 de 8"},
    {"tipo": "matemática", "dificuldade": "difícil", "pergunta": "Qual é o resultado de 15 - 7?", "resposta": 8, "dica": "Conte de 7 até 15"},
    {"tipo": "matemática", "dificuldade": "difícil", "pergunta": "Se você tem R$ 10 e gasta R$ 4, quanto dinheiro sobra?", "resposta": 6, "dica": "Subtraia 4 de 10"},
    {"tipo": "matemática", "dificuldade": "difícil", "pergunta": "Quantos meses têm 30 dias?", "resposta": 4, "dica": "Abril, junho, setembro e novembro"},

    # Português (10)
    {"tipo": "português", "dificuldade": "fácil", "pergunta": "Qual palavra rima com 'cão'?", "resposta": ["pão", "mão", "não"], "dica": "Pense em palavras que terminam com 'ão'"},
    {"tipo": "português", "dificuldade": "fácil", "pergunta": "Complete: O __ está latindo.", "resposta": ["cachorro"], "dica": "Animal que faz 'au au'"},
    {"tipo": "português", "dificuldade": "fácil", "pergunta": "Qual é o antônimo de 'alto'?", "resposta": ["baixo"], "dica": "O contrário de alto"},
    {"tipo": "português", "dificuldade": "médio", "pergunta": "Quantas sílabas tem a palavra 'banana'?", "resposta": 3, "dica": "ba-na-na"},
    {"tipo": "português", "dificuldade": "médio", "pergunta": "Qual é o plural de 'casa'?", "resposta": ["casas"], "dica": "Acrescente um 's' no final"},
    {"tipo": "português", "dificuldade": "médio", "pergunta": "Complete a frase: Eu ____ brincar no parque.", "resposta": ["gosto", "adoro"], "dica": "Verbo que expressa preferência"},
    {"tipo": "português", "dificuldade": "difícil", "pergunta": "Qual é o sinônimo de 'rápido'?", "resposta": ["veloz", "ligeiro"], "dica": "Pense em outra palavra para 'rápido'"},
    {"tipo": "português", "dificuldade": "difícil", "pergunta": "Qual palavra está escrita corretamente?", "resposta": ["casa"], "dica": "Compare com 'caza' e 'kasa'"},
    {"tipo": "português", "dificuldade": "difícil", "pergunta": "Qual é o feminino de 'menino'?", "resposta": ["menina"], "dica": "Forma feminina de menino"},
    {"tipo": "português", "dificuldade": "difícil", "pergunta": "Qual é a letra inicial da palavra 'árvore'?", "resposta": ["a"], "dica": "Primeira letra do alfabeto"},

    # Lógica (10)
    {"tipo": "lógica", "dificuldade": "fácil", "pergunta": "Complete a sequência: 2, 4, 6, ___", "resposta": 8, "dica": "Números pares em ordem"},
    {"tipo": "lógica", "dificuldade": "fácil", "pergunta": "O que é mais pesado: 1kg de ferro ou 1kg de algodão?", "resposta": ["igual", "mesmo peso"], "dica": "Ambos têm 1kg"},
    {"tipo": "lógica", "dificuldade": "fácil", "pergunta": "Se hoje é segunda-feira, que dia será depois de amanhã?", "resposta": ["quarta"], "dica": "Segunda -> terça -> quarta"},
    {"tipo": "lógica", "dificuldade": "médio", "pergunta": "O que é: quanto mais você tira, maior fica?", "resposta": ["buraco"], "dica": "Pense em algo que você cava"},
    {"tipo": "lógica", "dificuldade": "médio", "pergunta": "Qual não pertence ao grupo: maçã, banana, laranja, cenoura?", "resposta": ["cenoura"], "dica": "Frutas vs legumes"},
    {"tipo": "lógica", "dificuldade": "médio", "pergunta": "Se todas as bolas são vermelhas e esta é uma bola, então ela é...", "resposta": ["vermelha"], "dica": "Leia a primeira parte com atenção"},
    {"tipo": "lógica", "dificuldade": "difícil", "pergunta": "O que você pode pegar, mas não pode jogar?", "resposta": ["frio"], "dica": "Pense em sensações"},
    {"tipo": "lógica", "dificuldade": "difícil", "pergunta": "O que tem cidades mas não tem casas, tem rios mas não tem água, tem florestas mas não tem árvores?", "resposta": ["mapa"], "dica": "Representação geográfica"},
    {"tipo": "lógica", "dificuldade": "difícil", "pergunta": "Qual é o próximo na sequência: △, □, ○, △, □, ___", "resposta": ["○"], "dica": "Triângulo, quadrado, círculo"},
    {"tipo": "lógica", "dificuldade": "difícil", "pergunta": "O que você quebra antes de usar?", "resposta": ["ovo"], "dica": "Pense em alimentos"},

    # Ciências (10)
    {"tipo": "ciências", "dificuldade": "fácil", "pergunta": "Qual animal mia?", "resposta": ["gato"], "dica": "Animal doméstico que faz 'miau'"},
    {"tipo": "ciências", "dificuldade": "fácil", "pergunta": "Quantas pernas tem uma formiga?", "resposta": 6, "dica": "Todos os insetos têm 6 pernas"},
    {"tipo": "ciências", "dificuldade": "fácil", "pergunta": "Qual é a cor da grama?", "resposta": ["verde"], "dica": "Cor predominante na natureza"},
    {"tipo": "ciências", "dificuldade": "médio", "pergunta": "O que a planta precisa para crescer? (diga uma coisa)", "resposta": ["água", "sol", "terra"], "dica": "Elementos essenciais"},
    {"tipo": "ciências", "dificuldade": "médio", "pergunta": "Qual é o maior animal terrestre?", "resposta": ["elefante"], "dica": "Animal com tromba"},
    {"tipo": "ciências", "dificuldade": "médio", "pergunta": "Onde vivem os peixes?", "resposta": ["água", "rio", "mar"], "dica": "Ambiente aquático"},
    {"tipo": "ciências", "dificuldade": "difícil", "pergunta": "Qual planeta é conhecido como Planeta Vermelho?", "resposta": ["marte"], "dica": "Segundo planeta depois da Terra"},
    {"tipo": "ciências", "dificuldade": "difícil", "pergunta": "Que parte da planta absorve água do solo?", "resposta": ["raiz"], "dica": "Parte que fica embaixo da terra"},
    {"tipo": "ciências", "dificuldade": "difícil", "pergunta": "Qual é o maior órgão do corpo humano?", "resposta": ["pele"], "dica": "Cobre todo o corpo"},
    {"tipo": "ciências", "dificuldade": "difícil", "pergunta": "Que estação vem depois do verão?", "resposta": ["outono"], "dica": "Estações: verão, ____, inverno, primavera"}
]
