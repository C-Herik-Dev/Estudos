export function verifacaPessoa(idade) {
    return (target, key, descriptor) => {
        const metodoOriginal = descriptor.value; // guardando o metodo original numa constante
        // Reescrevendo o metodo original
        descriptor.value = function () {
            if (idade < 18) {
                console.log("Cadastro feito como pessoa menor de idade");
            }
            else {
                console.log("Cadastro feito como pessoa adulta");
                return metodoOriginal.apply(this); // chamando o metodo original e fazendo com que o this continue referenciando a classe e mostrando o resultado do metodo original.
            }
        };
    };
}
//# sourceMappingURL=verificaPessoa.js.map