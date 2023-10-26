import { useState } from 'react';

function App() {
  const [task, setTask] = useState('');

  return (
    <>
      <div className="container">
        <h1>Lista de tarefa</h1>
        <input type="text" placeholder="Digite sua Task" value={task} onChange={(e) => setTask(e.target.value)} />
        <ul>
          <li>{task}</li>
        </ul>
      </div>
    </>
  );
}

export default App;
