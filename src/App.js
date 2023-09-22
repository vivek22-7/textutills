
import { useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import{createBrowserRouter}from "react-router-dom";




function App() {    
  const[Mode, setMode] = useState('light'); // Wheater dark mode is enabled or not
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  // const router = createBrowserRouter([{
  //   path: "/",
  //   element: <TextForm showAlert= {showAlert} heading= "Enter the text to analyze Below" mode={Mode}/>, 
  // },]);
  
  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#172634';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Home(Dark Mode)";
      
      // Flashy title
      // 
      // setInterval(() => {
      //   document.title = 'TexUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now!";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Home";
    }
  }
  return (
   <>  
   
    <Navbar title="TextUtils" aboutText = "About TextUtils" mode= {Mode} toggleMode={toggleMode}/> 
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Routes>
        {/* <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route> */}
        
      <Route exact path='/' element={<TextForm showAlert= {showAlert} heading= "Enter the text to analyze Below" mode={Mode}/>}></Route>
      <Route exact path='about' element={<About/>}> </Route>
      
           
    
    </Routes>  
  </div>
   </>
  );
}

export default App; 

