import { Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import Siginup from "./Components/Siginup";


function App() {
  
  return (
       
    <> 
       {/* <Home/>
       <Course/> */}
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/signup" element={<Siginup/>}/>
       </Routes>
    </>
     

    
    
      
  );
}

export default App
