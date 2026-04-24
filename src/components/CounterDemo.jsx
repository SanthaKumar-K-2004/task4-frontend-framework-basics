import { useState } from 'react'

function CounterDemo({ title, step = 1 }) {
  const [count, setCount] = useState(0)

  return (
    <section className="counter-demo">
      <h3>{title}</h3>
      <p>This component manages its own local state with useState.</p>
      <div className="counter-actions">
        <button type="button" onClick={() => setCount((prev) => prev - step)}>
          -{step}
        </button>
        <strong>{count}</strong>
        <button type="button" onClick={() => setCount((prev) => prev + step)}>
          +{step}
        </button>
      </div>
      <button type="button" className="reset-btn" onClick={() => setCount(0)}>
        Reset
      </button>
    </section>
  )
}

export default CounterDemo
