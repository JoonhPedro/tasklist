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

  const removeTask = (index: number) => {
    const updatedTasks = [...task]
    updatedTasks.splice(index, 1)
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
          <h1>Lista de Tarefa</h1>
          <input
            type="text"
            className="input-task"
            name="tasklist"
            placeholder="Digite sua Tarefa"
            maxLength={35}
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
          <ol>
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
