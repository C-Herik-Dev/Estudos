/*
  >>Decorators<<
  Class
  Proriedade
  Metodos
  Parametros (pocuco usado)
  Getters e Setters (pouco usado)

  DECORATORS SÃO FUNÇÕES
  não preciso instanciar a classe para usar/chamar o decorator
*/
/*
# Target -> Receber o construtor da classe
function logInfo(target: any){
  console.log(target);
}
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Padrão Factory(Fabrica) | Fução que retorna a criação do decorator
function logInfo(mensagem) {
    return (target) => {
        console.log(`${mensagem}, ${target}`);
    };
}
let Sistema = class Sistema {
};
Sistema = __decorate([
    logInfo("Servidor esá rodando...")
], Sistema);
export {};
//# sourceMappingURL=decorator.js.map