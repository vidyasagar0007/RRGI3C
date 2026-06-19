
import {useContext}from 'react'
import { ThemeContext } from '../Context/Theme'
// import { GlobalContext } from '../Context/GlobalVariable'
const BackgroundChange = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div style={{backgroundColor: theme === "light" ? "White" : "Black", color:theme === "light" ? "black" : "white"}}>
      <h1 className='text-center text-xl text-red-500'>Background Change</h1> <br/><br/>
      <button onClick={toggleTheme} type="button">Change Background</button>
    </div>
  )
}

export default BackgroundChange
