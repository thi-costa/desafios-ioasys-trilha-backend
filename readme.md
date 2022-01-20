# ioasysCamp - Trilha backend 2022

Este repositório foi criado para compartilhar a solução dos desafios desenvolvidos ao longo da trilha.

## Desafios

<details>
    <summary>01 Calculadora em JS</summary>
    <a href="https://github.com/thi-costa/desafios-ioasys-trilha-backend/tree/main/calculadora"><h2>Calculadora</h2></a>
    <div>
        Nesse desafio foi feito como uma calculadora executada via console com uso do node.
        <ul>
            <li>Utilizou-se o(s) pacote(s):</li>
            <ul>
                <li><b>readline</b>: para leitura de entradas do usuário via console</li>
            </ul>            
        </ul>
        <p>A calculadora feita suporta as operações de:</p>
        <ul>
            <li>soma (com uso do sinal "+")</li>
            <li>subtração (com uso do sinal "-")</li>
            <li>multiplicação (com uso do sinal "*")</li>
            <li>divisão (com uso do sinal "/")</li>
            <li>divisão inteira (com uso do sinal "//")</li>
            <li>resto da divisão (com uso do sinal "%")</li>
            <li>potenciação (com uso do sinal "**")</li>
            <li>seno, cálculo do seno unidade em radianos (com uso  da string "sin")</li>
            <li>cosseno, cálculo do cosseno unidade em radianos (com uso da string "cos")</li>
            <li>tangente, cálculo da tangente unidade em radianos (com uso da string "tan")</li>
        </ul>
        A imagem abaixo mostram o funcionamento da calculadora.</br></br>
        <img src="https://user-images.githubusercontent.com/41833533/149344072-51dec583-ce83-420a-abc2-fb32ba8edb1a.png" alt="MDN logo"/>
    </div>
</details>

<details>
    <summary>02 ifs Hadouken </summary>
    <h2>Objetivo do Desafio</h2>
    <p>
        O objetivo nesse desafio foi reduzir uma sequência de ifs aninhado, apelidados de "ifs hadouken" devido ao seu formato.<br/>
        O código original a ser simplicado é mostrado na imagem abaixo.
    </p>
    <img src="https://user-images.githubusercontent.com/41833533/149674636-fda0e24d-44d7-401d-9ee4-8954c30e73b4.png" alt="ifs hadouken" width=400px/>
    <h2>Descrição de solução</h2>
    <p>
        <ul>
            <li>Nesse desafio utilizou-se o(s) pacote(s):</li>
            <ul>
                <li><b>readline</b>: para leitura de entradas do usuário via console</li>
            </ul>            
        </ul>
        Na solução utilizada, armazenou-se os usuários em uma estrutura de Map onde as chaves são os ids dos usuários que representam um número único (o primeiro id é 0), e esse id é autoincrementado por 1 a cada criação de usuário. Foram cadastrados 2 usuários para testagem de funcionalidade do código.</br>
        A imagem abaixo mostra a parte do código que desempenhou a mesma função dos ifs hadouken.
    </p>
    <img src="https://user-images.githubusercontent.com/41833533/149858088-79a0b099-b991-494a-8d62-924ce3967653.png" width="600px">
    <h2>Outputs</h2>
    <p>O programa ao ser executado pede informações sobre o usuário de que se deseja saber sua situação cadastral.  As imagens abaixo mostram os usuários já cadastrados e a execução do código.</p>
    <img src="https://user-images.githubusercontent.com/41833533/149859028-f8d42bc4-c001-439d-9be0-cfee33d4f8f3.png" alt="Cadastro de usuários" height="400px"></br>
    <img src="https://user-images.githubusercontent.com/41833533/149862833-b3dfdbf9-b16c-4bc6-a27d-542a22fad756.png" alt="Saída hadouken" width="400px">
</details>

<details>
    <summary>03 Validation hadouken </summary>
    <h2>Objetivo do Desafio</h2>
    <p>
        O objetivo nesse desafio da aula ao vivo, foi reduzir uma sequência de ifs aninhado utilizados para validação de dados de usuário, além de utilizar uma estrutura para tratamento de erros para retornar todos os erros da validação.
    </p>
    <h2>Descrição de solução</h2>
    <p>
        Na solução utilizada, armazenou-se o usuário em uma objeto onde as chaves são os atributos do usuário.</br>
        A imagem abaixo mostra a parte do código que desempenhou a mesma função dos ifs hadouken.
    </p>
    <img src="https://user-images.githubusercontent.com/41833533/150391697-13a0b871-3701-4a55-9c74-ff681f6e4c5d.png" alt="Cadastro de usuários" height="400px">
    <h2>Outputs</h2>
    <p>O programa ao ser executado valida as informações do usuário.  As imagens abaixo mostram o usuário que se deseja validar e a execução do código de validação.</p>
    <img src="https://user-images.githubusercontent.com/41833533/150392027-fdb27851-900e-4831-a78f-89406cd9223e.png" alt="Cadastro de usuários" width="400px"></br>
    <img src="https://user-images.githubusercontent.com/41833533/150391925-fc36f3ac-e79e-4ae2-944f-b6c53ff9121a.png" width="400px">
</details>


## Referências

https://diogommartins.wordpress.com/2016/08/22/como-se-defender-de-ifs-hadouken/
https://dev.to/danielhe4rt/tres-conceitos-para-um-codigo-limpo-3mdo
