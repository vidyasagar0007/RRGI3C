import React from "react"
const Usereftimer = () => {
    const[seconds,setSeconds] = React.useState(0)
    const timerRef = React.useRef(null)
    const start = () => {
        timerRef.current = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000);
    }
    const stop = () => {
        clearInterval(timerRef.current);
    }
    const reset = () => {
        clearInterval(timerRef.current);
        setSeconds(0);
    }
    return (
        <div>
            <h1>timer</h1>
            <p>{seconds}</p>
            <button className='border-2 m-2 p-1' onClick={start}>start</button>
            <button className='border-2 m-2 p-1' onClick={stop}>stop</button>
            <button className='border-2 m-2 p-1' onClick={reset}>reset</button>
        </div>
    )
}
export default Usereftimer