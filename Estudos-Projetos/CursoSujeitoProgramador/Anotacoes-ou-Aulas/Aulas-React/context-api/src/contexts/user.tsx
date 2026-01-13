import { createContext, type ReactNode, useState } from 'react';

interface UserProviderProps{
  children: ReactNode;
}

type UserContextData = {
  aluno: string;
  qtdAlunos: number;
  changeName: (nome: string) => void;
  newAluno: () => void;
}

export const UserContext = createContext({} as UserContextData);


function UserProvider( {children}: UserProviderProps){
  const [aluno, setAluno] = useState("Carlos Herik");
  const [qtdAlunos, setQtdAlunos] = useState(40)


  function changeName(nome: string){
    setAluno(nome)
  }

  function newAluno(){
    setQtdAlunos(alunos => alunos+1)
  }

  return(
    <UserContext.Provider value={{aluno, qtdAlunos, changeName, newAluno}}>
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider;