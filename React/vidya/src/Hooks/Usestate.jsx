import { useState } from 'react'

const Usestate = () => {
  const [count, setCount] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(0)
  

  const inc = () => {
    setCount((count) => count + 1)
  }

  const reset = () => {
    setCount(0)
  }
  const proQua = () => {
    setQuantity((quantity) => quantity + 1)
    setTotal((total) => total + 100)
  }

  return (
    <div>
      <button onClick={inc}>Inc</button>
      <button onClick={reset}>Reset</button>
      <h1>Count: {count}</h1>
      <button onClick={proQua}>Inc Quantity</button>
      <p>Quantity: {quantity}</p>
      <h1>Total Amount: {total}</h1>
    </div>
  )
}

export default Usestate