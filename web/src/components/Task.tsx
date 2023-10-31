import React, { useState } from 'react'
import Offtask from './Offtask'

const Task: React.FC = () => {
  // Estado para controlar o valor do input.
  const [list, setList] = useState('')
  // E para armazenar a Tasklist.
  const [task, setTask] = useState<string[]>([])

  // Função para adicionar uma nova task a lista.
  const addTask = () => {
    // Verifica se a string 'list' contém algum conteúdo não vazio.
    if (list.trim()) {
      // Adiciona a task e impede a adição de uma entrada vazia.
      setTask([...task, list.trim()])
      // Limpa o valor do input
      setList('')
    }
  }
  // Função que remove a lista de tarefa existente
  const removeTask = (tolist: number) => {
    // Cria uma cópia da lista de tarefas
    const updatedTasks = [...task]
    // Remove a tarefa com o índice 'toList'
    updatedTasks.splice(tolist, 1)
    // Atualiza o estado com a lista de tarefas atualizada
    setTask(updatedTasks)
  }

  return (
    <>
      <div className="container">
        {/* Formulário para adicionar uma nova task */}
        <form
          onSubmit={(event) => {
            // Impede o comportamento padrão do formulário
            event.preventDefault()
            // Chama a função para adicionar a task
            addTask()
          }}
        >
          <h1>Lista de Tarefas</h1>
          {/* Input para digitar a nova task */}
          <input
            type="text"
            className="input-task"
            name="tasklist"
            placeholder="Digite sua Tarefa"
            maxLength={30}
            required
            value={list}
            // Atualiza o estado 'list' com o valor do input
            onChange={(e) => setList(e.target.value)}
          />
          {/* Botão para adicionar a task */}
          <button type="submit" className="button-task">
            Adicionar
          </button>
        </form>
        {/* Exibe o componente Offtask se a lista de tarefas estiver vazia */}
        {task.length === 0 && <Offtask />}
        {/* Verifica se tem alguma task na lista e exibe as tasks */}
        {task.length > 0 && (
          <ol className="list-task">
            {/* Mapeia a lista de tarefas e renderiza cada item o botão de apagar a task */}
            {task.map((todo, index) => (
              <li key={index}>
                {todo}
                <button
                  className="button-delete"
                  onClick={() => removeTask(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </>
  )
}

export default Task
