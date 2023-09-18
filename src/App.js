
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const[Mode, setMode] = useState('light'); // Wheater dark mode is enabled or not
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
  }
  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#172634';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
   <>    
    <Navbar title="TextUtils" aboutText = "About TextUtils" mode= {Mode} toggleMode={toggleMode}/> 
    <Alert alert = {alert}/>
    <div className="container my-3">
      <TextForm heading= "Enter the text to analyze Below" mode={Mode}/>      
      {/* <About/> */}
    </div>
   </>
  );
}

export default App; 

