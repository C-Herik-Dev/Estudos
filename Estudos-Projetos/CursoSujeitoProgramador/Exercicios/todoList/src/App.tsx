import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [lista, setLista] = useState<string[]>(() => {
    const minhaLista = localStorage.getItem("@lista")
    return minhaLista ? JSON.parse(minhaLista) : []
  });
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    localStorage.setItem('@lista', JSON.stringify(lista))
  }, [lista])


  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLista([...lista, input]);
    setInput("");
  }

  function handleDelete(index: number) {
    const newList = lista.filter((item, i) => i !== index);
    setLista(newList);
  }

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <form onSubmit={(e) => handleRegister(e)}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Digite uma tarefa..."
        />
        <button onClick={handleRegister}>Adicionar</button>
      </form>

      <div>
        {lista.length > 0 && (
          <div className="lista">
            <ul>
              {lista.map((lista, index) => (
                <li key={index}>
                  {lista}
                  <button onClick={() => handleDelete(index)}>Excluir</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
