const readline = require("readline");
const formInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const camposUsuario = [
    "nome",
    "idade",
    "nacionalidade",
    "estado",
    "cidade",
    "formacao",
];

const usuariosBD = new Map();

function* autoIncreaseId() {
    let index = 0;
    while (true) {
        yield index++;
    }
}
const gen = autoIncreaseId(); // Id iniciando em 0

const funcaoCadastro = (
    nome,
    idade,
    nacionalidade,
    estado,
    cidade,
    formacao,
    mapBD
) => {
    mapBD.set(gen.next().value, {
        nome: nome.toLowerCase(),
        idade: Number(idade),
        nacionalidade: nacionalidade.toLowerCase(),
        estado: estado.toLowerCase(),
        cidade: cidade.toLowerCase(),
        formacao: formacao.toLowerCase(),
    });
};
// simulação com 2 cadastros

funcaoCadastro(
    "Thiago",
    23,
    "Brasil",
    "Sergipe",
    "Aracaju",
    "ioasys",
    usuariosBD
);
funcaoCadastro(
    "Zé Carlos",
    22,
    "Brasil",
    "Bahia",
    "Salvador",
    "ufs",
    usuariosBD
);

const checarUsuarioExiste = async () => {
    console.log("Questionário para identificar se usuário já existe:\n");
    let infoUsuario = {};
    for (const campo of camposUsuario) {
        await new Promise((resolve) =>
            formInterface.question(`${campo}: `, (input) =>
                resolve(
                    campo !== "idade"
                        ? (infoUsuario[campo] = input.toLowerCase())
                        : (infoUsuario[campo] = Number(input))
                )
            )
        );
    }

    let validation = false;
    for(let value of usuariosBD.values()){
        if(JSON.stringify(infoUsuario) === JSON.stringify(value)){
            validation = true;
        }
    }
    
    validation   
        ? console.log("\nO usuário está cadastrado no BD.\n")
        : console.log("\nO usuário NÃO está cadastrado no BD.\n");

    await new Promise((resolve) => {
        formInterface.question(
            "Deseja fazer outra consulta('sim' ou 's')?",
            (retorno) => {
                resolve(
                    (retorno.toLowerCase() === "sim") |
                        (retorno.toLowerCase() === "s")
                        ? checarUsuarioExiste()
                        : formInterface.close()
                );
            }
        );
    });
};

checarUsuarioExiste();
