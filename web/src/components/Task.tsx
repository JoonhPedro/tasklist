import React, { useState } from 'react'
import Offtask from './Offtask'
const Task: React.FC = () => {
  const [task, setTask] = useState('')

  return (
    <>
      <div className="container">
        <h1>Lista de Tarefa</h1>

        <input
          type="text"
          className="input-task"
          name="tasklist"
          placeholder="Digite sua Tarefa"
          maxLength={30}
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <label htmlFor="nome"></label>
        <button type="submit" className="button-task">
          Adicionar
        </button>

        <Offtask />
      </div>
    </>
  )
}

export default Task
