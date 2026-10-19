import { useState } from 'react'

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(Math.min(initial, stock))

  const decrement = () => setCount((c) => Math.max(1, c - 1))
  const increment = () => setCount((c) => Math.min(stock, c + 1))

  return (
    <div className="item-count">
      <div className="item-count__controls">
        <button type="button" className="btn btn--ghost" onClick={decrement} disabled={count <= 1} aria-label="Restar">−</button>
        <span className="item-count__value" aria-live="polite">{count}</span>
        <button type="button" className="btn btn--ghost" onClick={increment} disabled={count >= stock} aria-label="Sumar">+</button>
      </div>
      <button type="button" className="btn" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
