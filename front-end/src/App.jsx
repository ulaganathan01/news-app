import Home from "./components/Home"
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Headlines from "./components/Headlines";
import Politics from "./components/Politics";
import Entertainment from "./components/Entertainment";
import Business from "./components/Business";
import Technology from "./components/Technology";
import Sports from "./components/Sports";
import Health from "./components/Health";
import "./App.css";


function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/top-headlines" element={<Headlines/>}/>
        <Route path="/politics" element={<Politics/>}/>
        <Route path="/entertainment" element={<Entertainment/>}/>
        <Route path="/business" element={<Business/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path="/sports" element={<Sports/>}/>
        <Route path="/health" element={<Health/>}/>
      </Routes>
    </>
  )
}

export default App
