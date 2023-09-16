import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=> {
        
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=> {
        
        setText(event.target.value);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClClick = ()=>{
        let newText = "";
        setText(newText);
    }
    const emptytext = ()=> {
        if(text === "Enter text here"){
            setText("");
        }        
    }
    const [text, setText] = useState('Enter text here');
    

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> */}
        <textarea className="form-control" value={text} onClick={emptytext} onChange={handleOnChange} id="myBox" rows="8"></textarea>

    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear Text</button>


    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
