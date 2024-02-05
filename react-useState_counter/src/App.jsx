import { useState } from 'react';
import { nanoid } from 'nanoid';
import Counter from './components/Counter';
import CounterForm from './components/CounterForm';

function App() {
  const [counters, setCounters] = useState([])

  const handleAddCounter = (title, step, value) => {
    const newCounter = {
      title,
      initialValue: value,
      step,
      id: nanoid(),
    }

    setCounters(prev => [...prev, newCounter])

  }

  return (
  <div className='container'>
  <main>
    <h1>Your counters:</h1>
    <div className="counters-container">
     {counters.map((coun) => {
      return <Counter {...coun} />
     })}
    </div>
  </main>
  <aside>
    <h2>Create new counter</h2>
    <CounterForm handleAddCounter={handleAddCounter} />    
  </aside>
  </div>
  )
}

export default App;