# SQL Injection
* O código original, conforme imagens abaixo, permitia a possibilidade de inserir queries na url da requisição.
<img src="https://user-images.githubusercontent.com/41833533/152056192-95820537-07c9-4492-bf4b-f1a02f9fd403.png"/>
<img src="https://user-images.githubusercontent.com/41833533/152056106-8be7e9f6-527c-4f41-9456-95a6e4141d57.png"/>


* Após a correção abaixo (inserção do '$1' para indicar que só se adiciona 1 elemento à query), a ORM passou a tratar a entrada da requisição, impedindo a utilização de queries indesejadas (como seleção de múltiplos usuários, ou até mesmo inserção e deleção de usuários).
<img src="https://user-images.githubusercontent.com/41833533/152055635-dd4d0c21-8268-4731-82be-ba0b0e38af04.png">
<img src="https://user-images.githubusercontent.com/41833533/152055511-0992d60c-afc7-4421-9f9e-79b22cd404d3.png"/>
