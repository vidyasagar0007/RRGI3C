import React,{useState} from 'react'

export const Password = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [inputpassword,setInputPassword]=useState("")

//   like here 

const [like,setLike]=useState(false)
const likes=()=>{
    setLike(!like)
}

  return (
    <div>
        <input type={showPassword?"text":"password"} name="" id="" value={inputpassword} onChange={(e)=>setInputPassword(e.target.value)}/>
        <button onClick={()=>setShowPassword((ggg)=>!ggg)}>{showPassword?"Hide":"Show"}</button>

        {/* like code here  */}
        <p>Likes : {like?1:0}</p>
        <button onClick={likes}>Like</button>
    </div>
  )
}
export default Password
