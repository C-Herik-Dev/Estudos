 
 interface CursoProps{
  id: string;
  nome: string;
  preco: number;
  // Definir apenas a função e o que ela deve esperar e retornar
  promocao: (preco: number) => void;
 }

//  function mostraPromocao(preco: number): void {
//   console.log(`Promoção no curso de apenas: R$ ${preco}`)
//  }

 const novoCurso: CursoProps = {
  id: "13542",
  nome: "TypeScript",
  preco: 750,
  promocao: (preco: number): void => {
    console.log(`Promoção no curso por apenas: R$ ${preco}`)
  }
 }

 console.log(novoCurso);
 console.log(novoCurso.promocao(500))

 console.log("==============================================================")

 interface SomaProps{
  (valor1: number, valor2: number): number;
 }
 let somaNumeros: SomaProps = (valor1: number, valor2: number): number => {
  return valor1 + valor2;
 }

 console.log(`O resultado da soma é: ${somaNumeros(30.5, 1255.7)}`);