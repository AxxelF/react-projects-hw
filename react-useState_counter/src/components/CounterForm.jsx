import { useState } from 'react'

function CounterForm({ handleAddCounter }) {
  const [title, setTitle] = useState("")
  const [step, setStep] = useState(1)
  const [value, setValue] = useState(0)

    return (
      <>
        <form action="">
          <div className="form-input">
            <label className='label-title title-form' htmlFor="">Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
        </form>
        <form action="">
          <div className="form-input step-form">
            <label className='label-step' htmlFor="">Step:</label>
            <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} />
          </div>
        </form>
        <form action="">
          <div className="form-input start-form">
            <label className='label-start' htmlFor="">Start from:</label>
            <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
          </div>
          </form>
          <div className="form-buttons">
          <button className='btn-create form-btn' onClick={(e) => {
            e.preventDefault()
            handleAddCounter(title, step, value)
          }} >Create</button>    
          <button className='btn-reset form-btn'>Reset all</button>    
          <button className='btn-delete form-btn'>Delete all</button>    
          </div>
      </>
    )
}

export default CounterForm