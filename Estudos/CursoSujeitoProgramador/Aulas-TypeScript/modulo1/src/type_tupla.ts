// Tupla não existe no JS
// tupla é um array com tipos fixos e quantidade fixa de elementos

let aluno: [string, number];
aluno = ['João', 24];
// aluno = [24, 'João'] // ERRO -> precisa ser seguido a mesma ordem e tipos
aluno.push("herik", 30)
//aluno.push(30, "herik") Erro / deve serguir a ordem e tipos

console.log(aluno);
