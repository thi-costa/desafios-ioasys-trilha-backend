# Timing attack

<ul>
    <li>O código original, conforme imagens abaixo, permitia que o invasor soubesse se o usuário existia no sistema pela diferença no tempo de validação entre o caso em que houvesse um user válido e um user inválido.</li>
</ul>

<ul>
    <li>Na solução, utilizou-se um validação de uma senha falsa para os usuários inválidos/inexistentes no banco, pois de todo modo ao final da validação seria feito tanto a validação da senha quanto do user. Seguem imagens da solução.</li>
</ul>