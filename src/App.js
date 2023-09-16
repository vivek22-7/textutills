
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[Mode, setMode] = useState('light'); // Wheater dark mode is enabled or not

  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#172634';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
   <>    
    <Navbar title="TextUtils" aboutText = "About TextUtils" mode= {Mode} toggleMode={toggleMode}/> 
    <div className="container my-3">
      <TextForm heading= "Enter the text to analyze Below" mode={Mode}/>      
      {/* <About/> */}
    </div>
   </>
  );
}

export default App; 

