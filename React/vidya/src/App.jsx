import { BrowserRouter , Route,Routes } from "react-router-dom"
// import UseState  from "./Hooks/UseState";
// import Password from "./Hooks/Password";
// import Usestate from "./Hooks/UseState";

// import Useref from "./Hooks/Useref"
// import Usereftimer from "./Hooks/Usereftimer"
// import Form  from "./Hooks/Form";
// import UseEffect from "./Hooks/UseEffect";

// import Prev from "./Hooks/Prev"

import BackgroundChange from "./Hooks/BackgroundChange";


const App = () => {
  return (
    <div>
      {/* <h1>
        Talwinder CSS Here...! 
      </h1> */}

      {/* <h1 className="text-amber-300">Vidya</h1> */}
      {/* <Usestate/> */}
      {/* <Password/> */}
      {/* <Form/> */}
      {/* <UseEffect/> */}
      {/* <Useref/> */}
      {/* <Usereftimer/> */}
      {/* <Prev/> */}
      {/* <Home/> */}
    
    <BrowserRouter>
    <Routes>
      {/* <Route path="/signup" element={<Form/>}/> */}
      
      <Route path="/bgchange" element={<BackgroundChange/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

