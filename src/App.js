import { useRef , useEffect} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from "./Components/Header";
import Home from './Page/Home';
import Login from "./Page/Login";
import { GoogleMap } from "./Page/MapPage";
import OperatorDashboard from "./Page/OperatorDashboard";
import { Footer } from "./Components/Footer";
import Signup from './Page/Signup';
function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path = "/" element = {<Home />} />
    <Route exact path = "/Login" element = {<Login/>} />
    <Route exact path = "/Signup" element = {<Signup/>} />
    <Route exact path = "/Booking" element = {<GoogleMap/>} />
    <Route exact path = "/OperatorDashboard" element = {<OperatorDashboard/>} />
    </Routes>
    <Footer/>
    </>
  );
}
export default App;
    

