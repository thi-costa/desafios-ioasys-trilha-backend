const usuarioTeste = {
    nome: "Thiago Costa",
    idade: 23,
    nacionalidade: "Brasileiro",
    estado: "Sergipe",
    cidade: "Aracaju",
    formacao: "ioasysCamp",
};

const checarUsuario = (usuario) => {
    if (usuario.nome === "Thiago Costa") {
        if (usuario.idade === 23) {
            if (usuario.estado === "Sergipe") {
                if (usuario.cidade === "Aracaju") {
                    if (usuario.formacao === "ioasysCamp") {
                        console.log("Cadastrado");
                    } else console.log("Não cadastrado");
                } else console.log("Não cadastrado");
            } else console.log("Não cadastrado");
        } else console.log("Não cadastrado");
    } else console.log("Não cadastrado");
};

checarUsuario(usuarioTeste);
