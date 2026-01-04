/*
Operadores de comparação
> maior que
>= maior ou igual a (> =)
< menor que 
<= menor ou igual a (< =)
== igual a ** (não recomendado) (= =)
=== igual a. e tipo igual? (= = = )
!= diferente de ** (não recomendado) (! =)
!== diferente de e tipo diferente? (! = = =)

*/

const comp = 10 >= 10; // true
console.log(comp);

/*
Operadores lógicos
&& -> e (and) -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> ou (or) -> Apenas uma expressão precisa ser verdadeira para retornar true
! -> negação (not) -> Inverte o valor lógico da expressão (true vira false e vice-versa)
*/
const expressaoAnd = true && true && true; // true
console.log(expressaoAnd);

const expressaoOr = false || false;
console.log(expressaoOr);

const expressaoNot = !true; // false
//const expressaoNot2 = !!true; // true (duas negações)
console.log(expressaoNot);

// exemplo

const usuario = 'Lucas';
const senha = '123456';

const usuarioCadastrado = usuario === 'Lucas' && senha === '123456';
console.log(usuarioCadastrado);
