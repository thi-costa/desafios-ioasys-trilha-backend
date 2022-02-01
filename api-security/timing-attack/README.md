# Timing attack

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