import { useState, useRef, useEffect } from 'react';

const Prev = () => {
    const [count, setCount] =useState(0);
    const prevCount= useRef(0);

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

  return (
    <div>
        <h1>Prev Example</h1>
        <p>Count:{count}</p> 
        <p>Prev Count:{prevCount.current}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        
      
    </div>
  )
}

export default Prev
