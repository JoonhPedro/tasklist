import React, { useState } from 'react'
import Offtask from './Offtask'

const Task: React.FC = () => {
  const [list, setList] = useState('')
  const [task, setTask] = useState<string[]>([])

  const addTask = () => {
    if (list.trim()) {
      setTask([...task, list.trim()])
      setList('')
    }
  }

  const removeTask = (tolist: number) => {
    const updatedTasks = [...task]
    updatedTasks.splice(tolist, 1)
    setTask(updatedTasks)
  }

  return (
    <>
      <div className="container">
        <form
          onSubmit={(event) => {
            event.preventDefault()
            addTask()
          }}
        >
          <h1>Lista de Tarefas</h1>
          <input
            type="text"
            className="input-task"
            name="tasklist"
            placeholder="Digite sua Tarefa"
            maxLength={30}
            required
            value={list}
            onChange={(e) => setList(e.target.value)}
          />
          <button type="submit" className="button-task">
            Adicionar
          </button>
        </form>
        {task.length === 0 ? <Offtask /> : true}

        {task.length > 0 && (
          <ol className="list-task">
            {task.map((todo, tolist) => (
              <li key={tolist}>
                {todo}
                <button
                  className="button-delete"
                  onClick={() => removeTask(tolist)}
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
