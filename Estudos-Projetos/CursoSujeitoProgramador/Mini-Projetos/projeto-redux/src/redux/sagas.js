import {all} from 'redux-saga/effects';
import user from './user/saga';

//funtion* -> " * " função geradora, como se fosse uma async function, mas com mais controle sobre o fluxo de execução.
// yield -> é o await do generator, ele pausa a execução da função até que a promise seja resolvida, e depois retorna o resultado.

export default function* rootSaga(){
  return yield all([
    user,
  ])
}