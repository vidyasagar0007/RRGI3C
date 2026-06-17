import {useEffect,useRef} from 'react'

const Useref = () => {

const inputRef=useRef(null)
const scrollTo= useRef(null)

useEffect(()=>{
    inputRef.current.focus()
},[])

const Scroll =()=>{
    scrollTo.current.scrollIntoView({behaviour:"smooth"})
}

  return (
    <div>
      <p> This Example From UseRef </p>
      <br/><br/> 
      <input ref={inputRef} className='m1-15' type="text" nmae="" id="" placeholder="enter the name"/>
      <button onClick={Scroll} type="button">Contact here</button>
      <p className='mt-500' ref={scrollTo}>ther is my contact details</p>

    </div>
  )
}

export default Useref
