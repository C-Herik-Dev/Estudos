import { useState, useEffect, useRef, useMemo, useCallback } from 'react'

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const firstRender = useRef(true);
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [editTask, setEditTask] = useState({
    enable: false,
    task: ''
  })


  useEffect( () => {
    const tarefasSalvas = localStorage.getItem("@tarefas");
    if(tarefasSalvas){
      setTasks(JSON.parse(tarefasSalvas));
    }

  }, [])
  useEffect( () => {
    if(firstRender.current){
      firstRender.current = false;
      return;
    }
    localStorage.setItem("@tarefas", JSON.stringify(tasks));

  }, [tasks])

  const handleRegister = useCallback(() => {
    if(!input){
      alert("Preencha o campo com o nome da tarefa primeiro!");
      return;
    }

    if(editTask.enable){
      handleSaveEdit();
      return;
    }

    setTasks(tarefas => [...tarefas, input]);
    setInput("");
  }, [input, tasks]);


  function handleSaveEdit(){
    const findIndexTask = tasks.findIndex( task => task === editTask.task);
    const allTasks = [...tasks];
    allTasks[findIndexTask] = input;
    setTasks(allTasks);

    setEditTask({
      enable: false,
      task: ''
    })
    setInput("")
    
  }

  function handleDelete(item: string){
    const removeTask = tasks.filter( task => task !== item)
    setTasks(removeTask)
    
  }

  function handleEdit(item: string){
    inputRef.current?.focus();

    setInput(item)
    setEditTask({
      enable: true,
      task: item
    })
  }

  const totalTarefas = useMemo( () =>{
    return tasks.length;
  },[tasks])

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <input
      placeholder='Digite o nome da tarefa...'
      value={input}
      onChange={ (e) => setInput(e.target.value)}
      ref={inputRef}
      /> 
      <button onClick={handleRegister}>
        {editTask.enable ? "Atualizar tarefa" : "Adicionar tarefa"}
        </button>   
      <hr />

      <strong>Você tem {totalTarefas} tarefas!</strong>
      <br /> <br />
      {tasks.map( (item) => (
        <section key= {item}>
          <span>{item}</span>
          <button onClick={ () => handleEdit(item)}>Editar</button>
          <button onClick={ () => handleDelete(item)}>Excluir</button>
        </section>
      ) )}
    </div>
  )
}