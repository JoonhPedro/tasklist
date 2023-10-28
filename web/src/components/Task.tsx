import React, { useState } from 'react'

import Offtask from './Offtask'

const Task: React.FC = () => {
  const [list, setList] = useState('')
  const [tasks, setTasks] = useState<string[]>([])

  const addTask = () => {
    if (list.trim()) {
      setTasks([...tasks, list.trim()])
      setList('')
    }
  }

  const removeTask = (index: number) => {
    const updatedTasks = [...tasks]
    updatedTasks.splice(index, 1)
    setTasks(updatedTasks)
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

        <ol>
          {tasks.map((todo, index) => (
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

        <Offtask />
      </div>
    </>
  )
}

export default Task
