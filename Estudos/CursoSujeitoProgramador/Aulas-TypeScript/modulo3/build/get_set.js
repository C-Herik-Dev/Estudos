class Jogo {
    servidor;
    id = "135420";
    constructor(servidor) {
        this.servidor = servidor;
    }
    // Metodo GET = Para pegar o valor ao inves de acessar diretamente a prorpriedade
    get getServidorIP() {
        console.log("Pegando o IP do servidor...");
        return this.servidor;
    }
    // Metodo SET = Para passar/definir ou modificar o valor de uma propriedade/atributo
    set setServidorIP(novoIp) {
        if (this.servidor === novoIp) {
            throw new Error("O novo IP não pode ser igual ao atual.");
        }
        this.servidor = novoIp;
    }
}
const GTA = new Jogo("135.102.7.22");
try {
    GTA.setServidorIP = "135.102.7.22";
}
catch (error) {
    if (error instanceof Error) {
        console.log("ERROR: ", error.message);
    }
    else {
        console.log("ERROR desconhecido: ", error);
    }
}
console.log(GTA.getServidorIP);
export {};
//# sourceMappingURL=get_set.js.map