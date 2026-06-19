import { useNavigate } from "react-router-dom"


const Home = () => {
   const navigate = useNavigate()
  return (
   

    <div>
        <button className='border-0 ml-1 mt-1' onClick={() => navigate('/prev')}>SignUp Form</button>
    </div>
  )
}

export default Home
