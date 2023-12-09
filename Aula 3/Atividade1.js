class SistemaDeLogin {
    constructor() {
        this.usuarios = [];
    }

    cadastrarUsuario(nome, senha) {
        try {
            const usuarioExistente = this.usuarios.some(usuario => usuario.nome === nome);

            if (!usuarioExistente) { 
                this.usuarios.push({ nome, senha });
                console.log("Usuário cadastrado com sucesso!");
            } else {
                throw new Error("Usuário já existe");
            }
        } catch (erro) {
            console.log(erro.message);
        }
          
    }

    realizarLogin(nome, senha) {
        try {
            const logUsuario = this.usuarios.find(usuario => usuario.nome === nome);
            if (logUsuario) { 
                if (logUsuario.senha === senha) {
                    console.log("usuário logado")
                    return logUsuario;
                } else {
                    throw new Error("Senha inválida");
                }
            } else {
                throw new Error("Usuário não encontrado");
            }
        } catch (error) {
            console.log(error.message);
        }
    
    }

    exibirMensagemPersonalizada(usuario){
        if(usuario){
            return `Bem-vindo(a), ${usuario.nome}!`;
        } 

    }
 
}

// Criando instância do sistema de login
const sistemaLogin = new SistemaDeLogin();

// Cadastrando usuários
sistemaLogin.cadastrarUsuario("usuario1", "senha123");
 
// Realizando login e exibindo mensagem personalizada
const usuarioLogado = sistemaLogin.realizarLogin("usuario1", "senha123");
console.log(sistemaLogin.exibirMensagemPersonalizada(usuarioLogado));
// Saída esperada: Bem-vindo, usuario1!