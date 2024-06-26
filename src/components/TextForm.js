import React, {useState} from 'react'
import copy from "copy-to-clipboard";


export default function TextForm(props) {
    
    
    const handleUpClick = ()=> {
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const [copyText, setCopyText] = useState('');
    const handleOnChange = (event)=> {
        
        setText(event.target.value);
        
        setCopyText(event.target.value);
        copy(copyText);
        
    }
    const handleCopy = ()=>{
        copy(copyText);
        props.showAlert("Text Copied to Clipboard", "success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Box Cleared!", "success");
    }
    // const emptytext = ()=> {
    //     if(text === "Enter text here"){
    //         setText("");
    //     }        
    // }
    
    // const handleCopy = () => {
    //     var text = document.getElementById("myBox");
    //     text.select();
    //     text.setSelectionRange(0, 9999);
    //     navigator.clipboard.writeText(text.select());
    //     props.showAlert("Text Copied!", "success");
    // }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const [text, setText] = useState('');
   
  return (
    <>
    <div className='container' style={{color :props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> */}
        <textarea className="form-control" value={text} placeholder='Enter Text Here' onChange={handleOnChange} style={{backgroundColor :props.mode === 'dark'?'grey':'white', color :props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>

    </div>
    <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
    <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
    <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear Text</button>
    <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button> 
    <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>



    </div>
    <div className="container my-3" style={{color :props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0? text : "Nothing to Preview!"}</p>
    </div>
    </>
  )
}
