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

<details>
    <summary>04 Diagrama de BD relacional</summary>
    <h2>Objetivo</h2>
    <p>
        Criar um diagrama de um banco de dados relacional, usando as boas práticas
passadas na aula, o principal objetivo desse desafio é estarem praticando os seus
conhecimentos
    </p>
    <h2>Requistos</h2>
    <ul>
        <li>Nomes de tabelas deverão ser no plural</li>
        <li>Nomes de banco, tabelas, colunas e chaves devem ser em inglês ou português, evite misturá-los</li>
        <li>Não precisa focar em um banco de dados, pense que seu diagrama deverá
apenas mostrar a organização das tabelas e seus relacionamentos</li>
    </ul>
    <h2>Descrição de Desafio</h2>
    <p>
        Você como analista de banco de dados foi chamado para estar diagramando o banco de dados de um e-commerce de uma empresa cujo o produto principal de suas vendas é vestuário (calças, blusas, bermudas, etc.), você deverá levar em consideração os seguintes pontos:
    </p>
    <p>
        <strong>Obs.:</strong> Use sua criatividade para desenhar o banco, os pontos acima são somente alguns itens que você deverá se preocupar, o restante do diagrama será por sua conta
    </p>
    <h2>Resolução</h2>
    <p>
        A solução foi feita no site dbdiagram o qual usa DBML - Database Markup Language, para desenho dos diagramas. Segue abaixo o <a href="https://dbdiagram.io/d/61ef4c307cf3fc0e7c6015d9">diagrama</a> implementado, com o código-fonte em DBML à esquerda e o diagrama à direita.
    </p>
    <img src="https://user-images.githubusercontent.com/41833533/152208872-7c5f354d-2758-44da-9907-c3809bd887cf.png" title="DB-diagram"></img>
</details>

<details>
    <summary>05 Injection SQL Attack</summary>
    <ul>
        <li> O código original, conforme imagens abaixo, permitia a possibilidade de inserir queries na url da requisição.</li>
    </ul>
    <img src="https://user-images.githubusercontent.com/41833533/152056192-95820537-07c9-4492-bf4b-f1a02f9fd403.png"/>
    <img src="https://user-images.githubusercontent.com/41833533/152056106-8be7e9f6-527c-4f41-9456-95a6e4141d57.png"/>
    <ul>
        <li> Após a correção abaixo (inserção do '$1' para indicar que só se adiciona 1 elemento à query), a ORM passou a tratar a entrada da requisição, impedindo a utilização de queries indesejadas (como seleção de múltiplos usuários, ou até mesmo inserção e deleção de usuários).
        </li>
    </ul>
    <img src="https://user-images.githubusercontent.com/41833533/152055635-dd4d0c21-8268-4731-82be-ba0b0e38af04.png">
    <img src="https://user-images.githubusercontent.com/41833533/152055511-0992d60c-afc7-4421-9f9e-79b22cd404d3.png"/>
</details>

<details>
    <summary>06 Timing attack</summary>
    <ul>
        <li>O código original (em "original.js"), conforme imagens abaixo, permitia que o invasor soubesse se o usuário existia no sistema pela diferença no tempo de validação entre o caso em que houvesse um user válido e um user inválido.</li>
    </ul>
    <img alt="previous code" src="https://user-images.githubusercontent.com/41833533/152070777-fc3197f2-c9f2-402a-a6b9-f073d841b41b.png"/>
    <img alt="invalid user, previous code" src="https://user-images.githubusercontent.com/41833533/152070552-6d175481-4d6d-4f79-9fc3-43fbbd815dfa.png"/>
    <img alt="valid user and invalid password, previous code" src="https://user-images.githubusercontent.com/41833533/152070635-a707070c-1c63-4f19-b086-4d489a985479.png">
    <ul>
        <li>Na solução (em "index.js"), utilizou-se um validação de uma senha falsa para os usuários inválidos/inexistentes no banco, pois de todo modo ao final da validação seria feito tanto a validação da senha quanto do user. Seguem imagens da solução, como pode ser visto o tempo de requisição foi bem próximo.</li>
    </ul>
    <img src="https://user-images.githubusercontent.com/41833533/152070101-77ff8ede-09ea-49cf-8cf4-598ff1654cbb.png"/>
    <img alt="valid user and invalid password" src="https://user-images.githubusercontent.com/41833533/152070229-0e373895-3e27-4ddf-822c-a4392174e685.png"/>
    <img alt="invalid user and invalid password" src="https://user-images.githubusercontent.com/41833533/152070326-2677c47f-3303-4433-a3a6-f62e0c15ff7b.png"/>
</details>

<details>
    <summary>07 Nest API Deploy no Heroku</summary>

<h2>Descrição</h2>

Aplicação simples análoga a um CRUD para .

## Instalação

* Instalação de dependências

```bash
$ npm install
```

<h2>Docker</h2>

* Lista de comandos para transforma repositório em container https://www.docker.com/products/docker-desktop

```bash
# Compor container
$ docker-compose up

# Build de projeto
$ docker build -t foo
```

<h2>Heroku deploy</h2>

* Lista de comandos para deploy em <a href=" https://devcenter.heroku.com/articles/getting-started-with-nodejs">Heroku</a>
```bash
# Login de usuário
$ heroku login

# Login em registro de containers
$ heroku container:login

# Enviar container para projeto heroku
$ heroku container:push web -a NomeProjeto

# Realizar deploy
$ heroku container:release web -a NomeProjeto

# Abrir projeto no navegador
$ heroku open -a NomeProjeto
```
<h2>Projeto</h2>

* Segue o link do deploy do projeto: <a href="https://nestcampapi.herokuapp.com/">https://nestcampapi.herokuapp.com/</a>


## License

Nest is [MIT licensed](LICENSE).
</details>

## Referências

https://diogommartins.wordpress.com/2016/08/22/como-se-defender-de-ifs-hadouken/
https://dev.to/danielhe4rt/tres-conceitos-para-um-codigo-limpo-3mdo
